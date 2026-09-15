import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, X, ShoppingBag } from "lucide-react";
import { useShop } from "@/Context/ShopContext";
import ProductImage from "@/components/ProductImage";
import { formatPrice } from "@/lib/currency";
import api from "@/lib/api";
import { toast } from "sonner";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useShop();
  const [details, setDetails] = useState({});

  useEffect(() => {
    (async () => {
      const map = {};
      await Promise.all(
        wishlist.map(async (w) => {
          try { const { data } = await api.get(`/products/${w.id}`); map[w.id] = data; } catch {}
        })
      );
      setDetails(map);
    })();
  }, [wishlist]);

  if (wishlist.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24 px-4" data-testid="wishlist-empty">
        <Heart className="w-10 h-10 mx-auto text-[#C89D66]" />
        <h1 className="font-serif text-4xl md:text-5xl mt-6">Your wishlist is empty.</h1>
        <p className="mt-3 text-[#5C524C]">Start saving pieces you love — for later, or forever.</p>
        <Link to="/products" className="inline-block mt-8 bg-[#1A1110] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-[0.28em]">Browse Collection</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="hx-eyebrow mb-3">Saved For Later</div>
      <h1 className="font-serif text-4xl md:text-5xl">Wishlist</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10">
        {wishlist.map((w) => {
          const p = details[w.id] || w;
          return (
            <div key={w.id} className="group relative" data-testid={`wishlist-item-${w.id}`}>
              <div className="relative overflow-hidden">
                <ProductImage src={p.images?.[0]} seed={w.id} alt={p.name} />
                <button onClick={() => toggleWishlist(p)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FDFBF7]/90 flex items-center justify-center text-[#A85D48] z-10">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4">
                <div className="hx-eyebrow text-[#91857D] mb-1">{p.category}</div>
                <div className="font-serif text-lg">{p.name}</div>
                <div className="mt-1 font-medium">{formatPrice(p.price || 0)}</div>
                <button
                  onClick={() => { if (details[w.id]) { addToCart(details[w.id], { size: details[w.id].sizes?.[1], color: details[w.id].colors?.[0] }); toast.success("Moved to bag."); } }}
                  className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] border-b border-[#1A1110] pb-1"
                  data-testid={`wishlist-move-to-cart-${w.id}`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Move to Bag
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
