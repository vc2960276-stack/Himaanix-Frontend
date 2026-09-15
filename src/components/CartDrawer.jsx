import React from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import ProductImage from "@/components/ProductImage";
import { formatPrice } from "@/lib/currency";

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, updateQty, removeItem, totals } = useShop();
  const navigate = useNavigate();
  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-50" data-testid="cart-drawer">
      <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FDFBF7] flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-[#2B1B17]/10">
          <div>
            <div className="hx-eyebrow">Your Bag</div>
            <div className="font-serif text-2xl mt-1">{totals.count} item{totals.count === 1 ? "" : "s"}</div>
          </div>
          <button onClick={() => setCartOpen(false)} data-testid="cart-drawer-close"><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-6">
          {cart.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag className="w-8 h-8 mx-auto text-[#C89D66]" />
              <p className="mt-4 font-serif text-xl">Your bag is empty</p>
              <p className="text-sm text-[#91857D] mt-2">Curated pieces await you.</p>
              <Link
                to="/products"
                onClick={() => setCartOpen(false)}
                className="mt-6 inline-block bg-[#1A1110] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-[0.28em]"
              >
                Shop All
              </Link>
            </div>
          )}

          {cart.map((it) => (
            <div key={it.key} className="flex gap-4" data-testid={`cart-item-${it.product_id}`}>
              <div className="w-24 flex-shrink-0">
                <ProductImage src={it.image} seed={it.product_id} alt={it.name} ratio="aspect-[3/4]" monogramSize="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="hx-eyebrow text-[10px]">{it.category}</div>
                <div className="font-serif text-lg leading-tight">{it.name}</div>
                <div className="text-xs text-[#91857D] mt-1">
                  {it.size && <>Size: {it.size} · </>}{it.color}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center border border-[#2B1B17]/20">
                    <button className="px-2 py-1" onClick={() => updateQty(it.key, it.quantity - 1)} data-testid={`cart-qty-dec-${it.product_id}`}><Minus className="w-3 h-3" /></button>
                    <span className="px-3 text-sm">{it.quantity}</span>
                    <button className="px-2 py-1" onClick={() => updateQty(it.key, it.quantity + 1)} data-testid={`cart-qty-inc-${it.product_id}`}><Plus className="w-3 h-3" /></button>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatPrice(it.price * it.quantity)}</div>
                    <button className="text-xs text-[#91857D] mt-1 hover:text-[#A85D48] flex items-center gap-1" onClick={() => removeItem(it.key)} data-testid={`cart-remove-${it.product_id}`}>
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-[#2B1B17]/10 space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span data-testid="cart-subtotal">{formatPrice(totals.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-[#91857D]">
              <span>Shipping</span>
              <span>{totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}</span>
            </div>
            <div className="flex justify-between font-serif text-xl border-t border-[#2B1B17]/10 pt-3">
              <span>Total</span>
              <span data-testid="cart-total">{formatPrice(totals.total)}</span>
            </div>
            <button
              className="w-full bg-[#1A1110] text-[#FDFBF7] py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17]"
              onClick={() => { setCartOpen(false); navigate("/checkout"); }}
              data-testid="cart-checkout-button"
            >
              Proceed to Checkout
            </button>
            <button
              className="w-full border border-[#1A1110] py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7]"
              onClick={() => setCartOpen(false)}
              data-testid="cart-continue-shopping"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
