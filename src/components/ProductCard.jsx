import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import { useShop } from "@/Context/ShopContext";
import { formatPrice } from "@/lib/currency";

export default function ProductCard({ product, index = 0 }) {
  const { toggleWishlist, inWishlist, addToCart } = useShop();
  const wished = inWishlist(product.id);
  const badge = product.is_new ? "NEW" : product.is_popular ? "POPULAR" : product.old_price ? "SALE" : null;
  const primary = product.images?.[0];
  const hover = product.images?.[1] || primary;

  return (
    <div
      className="group hx-card-hover animate-fade-up"
      style={{ animationDelay: `${(index % 8) * 60}ms` }}
      data-testid={`product-card-${product.id}`}
    >
      <div className="relative overflow-hidden bg-[#EFE6DD]">
        <Link to={`/product/${product.id}`} className="block">
          <div className="hx-card-image transition-transform duration-700 ease-out relative">
            <ProductImage
              src={primary}
              seed={product.id}
              alt={product.name}
              showBadge={!!badge}
              badge={badge}
            />
            {hover && hover !== primary && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ProductImage src={hover} seed={`${product.id}-hover`} alt={product.name} />
              </div>
            )}
          </div>
        </Link>
        <button
          onClick={(e) => { e.preventDefault(); toggleWishlist(product); }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-[#FDFBF7]/90 backdrop-blur flex items-center justify-center transition-all z-20 ${
            wished ? "text-[#A85D48]" : "text-[#1A1110] hover:text-[#A85D48]"
          }`}
          aria-label="Wishlist"
          data-testid={`wishlist-toggle-${product.id}`}
        >
          <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} />
        </button>

        <div className="absolute inset-x-3 bottom-3 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 z-20">
          <button
            onClick={(e) => { e.preventDefault(); addToCart(product, { size: product.sizes?.[1] || product.sizes?.[0], color: product.colors?.[0] }); }}
            className="w-full bg-[#1A1110] text-[#FDFBF7] py-3 text-[11px] uppercase tracking-[0.28em] hover:bg-[#2B1B17] flex items-center justify-center gap-2"
            data-testid={`quick-add-${product.id}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" /> Quick Add
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block mt-4">
        <div className="hx-eyebrow text-[#91857D] mb-1">{product.category}</div>
        <h3 className="font-serif text-lg md:text-xl leading-tight text-[#1A1110]">{product.name}</h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-[#1A1110] font-medium">{formatPrice(product.price)}</span>
          {product.old_price && (
            <span className="text-[#91857D] text-sm line-through">{formatPrice(product.old_price)}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
