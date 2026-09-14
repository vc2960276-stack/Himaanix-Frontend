import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X, Package, LogOut } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/men", label: "Men" },
  { to: "/women", label: "Women" },
  { to: "/kids", label: "Kids" },
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/collections", label: "Collections" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [q, setQ] = useState("");
  const { totals, wishlist, setCartOpen } = useShop();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const doSearch = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    setSearchOpen(false);
    navigate(`/products?q=${encodeURIComponent(q.trim())}`);
    setQ("");
  };

  return (
    <>
      {/* announcement bar */}
      <div className="bg-[#1A1110] text-[#FDFBF7] text-[11px] tracking-[0.28em] uppercase py-2 overflow-hidden" data-testid="announcement-bar">
        <div className="hx-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>Complimentary shipping over $150</span>
              <span>·</span>
              <span>Cash on Delivery available</span>
              <span>·</span>
              <span>30-day easy returns</span>
              <span>·</span>
              <span>New winter monochrome — now live</span>
            </div>
          ))}
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#2B1B17]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <button
            className="md:hidden -ml-2 p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            data-testid="nav-mobile-menu-trigger"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link
            to="/"
            className="flex-1 md:flex-none text-center md:text-left"
            data-testid="nav-brand-logo"
          >
            <img
              src="/logo.png"
              alt="HIMAANIX"
              className="h-12 md:h-16 w-auto object-contain mx-auto md:mx-0"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 mx-8">
            {navLinks.slice(1).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `hx-underline-link text-[13px] uppercase tracking-[0.22em] font-medium ${
                    isActive ? "text-[#1A1110]" : "text-[#5C524C]"
                  } hover:text-[#1A1110]`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <button onClick={() => setSearchOpen(true)} className="p-1.5 hover:text-[#C89D66] transition-colors" aria-label="Search" data-testid="nav-search-trigger">
              <Search className="w-5 h-5" />
            </button>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setAccountOpen(false), 150)}
                  className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] hover:text-[#C89D66]"
                  data-testid="nav-account-menu-trigger"
                >
                  <User className="w-4 h-4" /> {user.name?.split(" ")[0]}
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-[#FDFBF7] border border-[#2B1B17]/10 shadow-lg py-2 z-50" data-testid="account-menu">
                    <div className="px-4 py-2 border-b border-[#2B1B17]/10">
                      <div className="hx-eyebrow text-[10px]">Signed in as</div>
                      <div className="text-sm truncate">{user.email}</div>
                    </div>
                    <Link to="/account/orders" onMouseDown={(e) => e.preventDefault()} onClick={() => setAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#F5F0EB]" data-testid="nav-orders-link">
                      <Package className="w-4 h-4" /> Order History
                    </Link>
                    <Link to="/wishlist" onMouseDown={(e) => e.preventDefault()} onClick={() => setAccountOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#F5F0EB]">
                      <Heart className="w-4 h-4" /> Wishlist
                    </Link>
                    <button
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => { setAccountOpen(false); logout(); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#F5F0EB] text-left"
                      data-testid="nav-logout-button"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth" className="p-1.5 hover:text-[#C89D66]" aria-label="Account" data-testid="nav-account-link">
                <User className="w-5 h-5" />
              </Link>
            )}
            <Link to="/wishlist" className="p-1.5 relative hover:text-[#C89D66]" aria-label="Wishlist" data-testid="nav-wishlist-link">
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C89D66] text-[#1A1110] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <button onClick={() => setCartOpen(true)} className="p-1.5 relative hover:text-[#C89D66]" aria-label="Cart" data-testid="nav-cart-trigger">
              <ShoppingBag className="w-5 h-5" />
              {totals.count > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1A1110] text-[#FDFBF7] text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center" data-testid="nav-cart-count">
                  {totals.count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] bg-[#FDFBF7] p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <img
                src="/logo.png"
                alt="HIMAANIX"
                className="h-12 w-auto object-contain"
              />
              <button onClick={() => setOpen(false)} data-testid="nav-mobile-menu-close"><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to} to={l.to} onClick={() => setOpen(false)}
                  className="py-3 border-b border-[#2B1B17]/10 uppercase tracking-[0.22em] text-sm"
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-3">
              {user ? (
                <>
                  <Link to="/account/orders" onClick={() => setOpen(false)} className="block w-full text-center bg-[#1A1110] text-[#FDFBF7] py-3 tracking-[0.22em] uppercase text-xs" data-testid="mobile-orders-link">
                    Order History
                  </Link>
                  <button onClick={() => { setOpen(false); logout(); }} className="block w-full text-center border border-[#1A1110] py-3 tracking-[0.22em] uppercase text-xs">
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setOpen(false)} className="block w-full text-center bg-[#1A1110] text-[#FDFBF7] py-3 tracking-[0.22em] uppercase text-xs">
                  Sign In / Create Account
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-sm flex items-start justify-center pt-32 px-4" data-testid="search-overlay">
          <button className="absolute top-6 right-6" onClick={() => setSearchOpen(false)}><X className="w-6 h-6" /></button>
          <form onSubmit={doSearch} className="w-full max-w-2xl">
            <div className="hx-eyebrow mb-4">Search HIMAANIX</div>
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full bg-transparent border-b border-[#2B1B17]/30 pb-4 text-2xl md:text-3xl font-serif focus:outline-none focus:border-[#1A1110]"
              data-testid="search-input"
            />
            <p className="mt-4 text-xs text-[#91857D]">Press enter to search</p>
          </form>
        </div>
      )}
    </>
  );
}
