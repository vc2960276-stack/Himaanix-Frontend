import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Truck, ShieldCheck, RotateCcw, HeadphonesIcon, Sparkles } from "lucide-react";
import api from "@/lib/api";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import { toast } from "sonner";

const IMG = (id) => `https://images.unsplash.com/${id}?w=1200&q=80&auto=format&fit=crop`;

const CATS = [
  { key: "women", name: "Women", tagline: "Editorial pieces, softly powerful.", to: "/women", img: IMG("photo-1490481651871-ab68de25d43d") },
  { key: "men",   name: "Men",   tagline: "Considered tailoring, everyday.",   to: "/men",   img: IMG("photo-1516826957135-700dedea698c") },
  { key: "kids",  name: "Kids",  tagline: "Small silhouettes, big presence.",  to: "/kids",  img: IMG("photo-1519689680058-324335c77eba") },
];

const HERO_IMGS = [
  IMG("photo-1483985988355-763728e1935b"),
  IMG("photo-1490481651871-ab68de25d43d"),
  IMG("photo-1595777457583-95e059d581b8"),
  IMG("photo-1571908599407-cdb918ed83bf"),
];

const IG_IMGS = [
  IMG("photo-1490481651871-ab68de25d43d"),
  IMG("photo-1483985988355-763728e1935b"),
  IMG("photo-1516826957135-700dedea698c"),
  IMG("photo-1571908599407-cdb918ed83bf"),
  IMG("photo-1608228088998-57828365d486"),
  IMG("photo-1519689680058-324335c77eba"),
];

const PROMO_IMG = IMG("photo-1544441893-675973e31985");

const TRUST = [
  { icon: Sparkles,       title: "Premium Quality",  desc: "Ethically sourced, obsessively finished." },
  { icon: ShieldCheck,    title: "Secure Payments",  desc: "COD & encrypted card options." },
  { icon: Truck,          title: "Fast Delivery",    desc: "Free shipping over ₹2,999." },
  { icon: RotateCcw,      title: "Easy Returns",     desc: "30-day no-questions returns." },
  { icon: HeadphonesIcon, title: "Concierge Care",   desc: "Real people, 7 days a week." },
];

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const [{ data: pop }, { data: na }] = await Promise.all([
          api.get("/products", { params: { category: "women", is_popular: true } }),
          api.get("/products", { params: { is_new: true } }),
        ]);
        setPopular(pop.products.slice(0, 4));
        setNewArrivals(na.products.slice(0, 8));
      } catch (e) {}
    })();
  }, []);

  const subscribe = async (e) => {
    e.preventDefault();
    try {
      await api.post("/newsletter", { email });
      toast.success("You're on the list. Welcome to HIMAANIX.");
      setEmail("");
    } catch (err) {
      toast.error("Please enter a valid email.");
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[#EFE6DD] overflow-hidden" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 md:pr-8 animate-fade-up">
            <div className="hx-eyebrow mb-6">Winter Monochrome · Vol.04</div>
            <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.9] tracking-tight text-[#1A1110]">
              Define<br/>Your <span className="italic font-normal text-[#C89D66]">Style</span>
            </h1>
            <p className="mt-6 max-w-md text-[#5C524C] leading-relaxed">
              Fashion that speaks before you do. Editorial layering, tactile fabrics, and silhouettes designed to move with your day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/women" className="group inline-flex items-center gap-3 bg-[#1A1110] text-[#FDFBF7] px-6 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17]" data-testid="hero-cta-shop-women">
                Shop Women <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/men" className="group inline-flex items-center gap-3 border border-[#1A1110] px-6 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7]" data-testid="hero-cta-shop-men">
                Shop Men <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-[#5C524C]">
              <div className="flex items-center gap-2"><span className="w-8 h-px bg-[#1A1110]" /> Est. 2024</div>
              <div>·</div>
              <div>Free shipping over ₹2,999</div>
            </div>
          </div>
          <div className="md:col-span-6 relative animate-fade-up" style={{ animationDelay: '150ms' }}>
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[520px] md:h-[600px]">
              <div className="col-span-4 row-span-4"><ProductImage src={HERO_IMGS[0]} seed="hero-a" alt="Editorial look 01" ratio="h-full" monogramSize="text-8xl" label="LOOK 01 · CASHMERE" /></div>
              <div className="col-span-2 row-span-3"><ProductImage src={HERO_IMGS[1]} seed="hero-b" alt="Editorial look 02" ratio="h-full" monogramSize="text-5xl" /></div>
              <div className="col-span-2 row-span-3"><ProductImage src={HERO_IMGS[2]} seed="hero-c" alt="Editorial look 03" ratio="h-full" monogramSize="text-5xl" /></div>
              <div className="col-span-4 row-span-2"><ProductImage src={HERO_IMGS[3]} seed="hero-d" alt="Editorial look 04" ratio="h-full" monogramSize="text-6xl" label="EDITORIAL 24" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="hx-eyebrow mb-3">Shop the Wardrobe</div>
            <h2 className="font-serif text-4xl md:text-5xl">Curated for every silhouette.</h2>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 hx-underline-link text-xs uppercase tracking-[0.28em]">
            View All Categories <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATS.map((c, i) => (
            <Link key={c.key} to={c.to} className="group relative block overflow-hidden bg-[#EFE6DD]" data-testid={`category-card-${c.key}`}>
              <div className="transition-transform duration-700 group-hover:scale-105">
                <ProductImage src={c.img} seed={`cat-${c.key}`} alt={c.name} ratio="aspect-[4/5]" monogramSize="text-8xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1110]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-[#FDFBF7]">
                <div className="hx-eyebrow text-[#EFE6DD]/80 mb-2">Collection {String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-4xl md:text-5xl">{c.name}</h3>
                <p className="text-sm text-[#EFE6DD]/80 mt-2 max-w-[80%]">{c.tagline}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] border-b border-[#FDFBF7] pb-1 group-hover:gap-3 transition-all">
                  Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POPULAR IN WOMEN */}
      <section className="bg-[#F5F0EB] py-20 md:py-28" data-testid="popular-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="hx-eyebrow mb-3">Best Sellers</div>
              <h2 className="font-serif text-4xl md:text-5xl">Popular in Women</h2>
            </div>
            <Link to="/women" className="hx-underline-link text-xs uppercase tracking-[0.28em]">View All</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {popular.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#1A1110] text-[#FDFBF7] p-10 md:p-20 flex flex-col justify-center order-2 md:order-1">
            <div className="hx-eyebrow text-[#C89D66] mb-5">The Signature Edit</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[0.95]">
              Your style.<br/><span className="italic text-[#C89D66]">Your statement.</span>
            </h2>
            <p className="mt-6 max-w-md text-[#EFE6DD]/70">
              Explore pieces designed to elevate your everyday wardrobe — considered layering, refined proportions, and materials that only get better with time.
            </p>
            <Link to="/collections" className="mt-8 inline-flex items-center gap-3 border border-[#C89D66] text-[#C89D66] px-6 py-4 text-xs uppercase tracking-[0.28em] w-fit hover:bg-[#C89D66] hover:text-[#1A1110]" data-testid="promo-cta">
              Shop The Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <ProductImage src={PROMO_IMG} seed="promo-editorial" alt="The Edit — Winter 24" ratio="aspect-[4/5] md:aspect-auto md:h-full" monogramSize="text-9xl" label="THE EDIT · WINTER 24" />
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="hx-eyebrow mb-3">Fresh In</div>
            <h2 className="font-serif text-4xl md:text-5xl">New Arrivals</h2>
            <p className="mt-3 text-[#5C524C] max-w-xl">Discover the latest styles, made for your next statement.</p>
          </div>
          <Link to="/new-arrivals" className="hx-underline-link text-xs uppercase tracking-[0.28em]">Shop New In</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {newArrivals.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#EFE6DD] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hx-eyebrow text-center mb-3">Why HIMAANIX</div>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">A brand built on care.</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {TRUST.map((t, i) => (
              <div key={i} className="text-center px-2">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#1A1110] text-[#C89D66] flex items-center justify-center mb-4">
                  <t.icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-lg">{t.title}</div>
                <div className="text-xs text-[#5C524C] mt-1 leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW THE STYLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-10">
          <div className="hx-eyebrow mb-3">@himaanix</div>
          <h2 className="font-serif text-4xl md:text-5xl">Follow the Style</h2>
          <p className="mt-3 text-[#5C524C]">Discover the HIMAANIX world.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {IG_IMGS.map((src, i) => (
            <div key={i} className="group relative overflow-hidden">
              <div className="transition-transform duration-500 group-hover:scale-110">
                <ProductImage src={src} seed={`ig-${i}`} alt={`@himaanix ${i + 1}`} ratio="aspect-square" monogramSize="text-3xl" />
              </div>
              <div className="absolute inset-0 bg-[#1A1110]/0 group-hover:bg-[#1A1110]/40 transition-colors flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-[#FDFBF7] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#2B1B17] text-[#FDFBF7]" data-testid="newsletter-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="hx-eyebrow text-[#C89D66] mb-4">The List</div>
          <h2 className="font-serif text-4xl md:text-5xl">Stay in the style.</h2>
          <p className="mt-4 text-[#EFE6DD]/70 max-w-xl mx-auto">
            Get updates on new arrivals, exclusive offers, and quiet-luxury inspiration — delivered thoughtfully.
          </p>
          <form onSubmit={subscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-b border-[#EFE6DD]/30 py-3 focus:outline-none focus:border-[#C89D66] text-center sm:text-left"
              data-testid="newsletter-email-input"
            />
            <button className="bg-[#C89D66] text-[#1A1110] px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#FDFBF7]" data-testid="newsletter-submit-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
