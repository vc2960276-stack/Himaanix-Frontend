import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Heart, ShoppingBag, ChevronDown, Truck, RotateCcw, ShieldCheck, Star } from "lucide-react";
import api from "@/lib/api";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import { useShop } from "@/Context/ShopContext";
import { formatPrice } from "@/lib/currency";
import { toast } from "sonner";

const SWATCH = {
  Ivory: "#F5F0EB", Camel: "#C89D66", Espresso: "#2B1B17",
  Charcoal: "#3A3230", Sand: "#D9C6B1", Ecru: "#EFE6DD",
  Cream: "#F5EEE3", Olive: "#7A7B4F", White: "#FFFFFF",
  Stone: "#B9AA97", "Raw Indigo": "#3A4A63", "Deep Indigo": "#2A3348",
};

const REVIEWS = [
  { name: "Maya R.",   rating: 5, text: "Beautiful fabric and cut. Feels like a much more expensive piece." },
  { name: "Ishaan P.", rating: 5, text: "Perfect winter layering piece. Impeccable finish." },
  { name: "Anya S.",   rating: 4, text: "Loved the tailoring. Sizing is true to size." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [qty, setQty] = useState(1);
  const [gallery, setGallery] = useState(0);
  const [openSection, setOpenSection] = useState("details");
  const { addToCart, toggleWishlist, inWishlist } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
      setSize(data.sizes?.[1] || data.sizes?.[0] || "");
      setColor(data.colors?.[0] || "");
      setGallery(0);
      const { data: rel } = await api.get("/products", { params: { category: data.category } });
      setRelated(rel.products.filter((p) => p.id !== data.id).slice(0, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    })();
  }, [id]);

  if (!product) return <div className="min-h-[60vh] flex items-center justify-center text-[#91857D]">Loading…</div>;

  const wished = inWishlist(product.id);
  const handleAdd = () => {
    if (!size) return toast.error("Please select a size.");
    addToCart(product, { size, color, quantity: qty });
    toast.success("Added to bag.");
  };
  const handleBuy = () => {
    if (!size) return toast.error("Please select a size.");
    addToCart(product, { size, color, quantity: qty });
    navigate("/checkout");
  };

  const Section = ({ id, title, children }) => (
    <div className="border-b border-[#2B1B17]/10">
      <button className="w-full py-4 flex items-center justify-between text-left" onClick={() => setOpenSection(openSection === id ? "" : id)} data-testid={`pdp-accordion-${id}`}>
        <span className="hx-eyebrow text-[#1A1110]">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${openSection === id ? "rotate-180" : ""}`} />
      </button>
      {openSection === id && <div className="pb-6 text-sm text-[#5C524C] leading-relaxed">{children}</div>}
    </div>
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-[#91857D] tracking-widest uppercase" data-testid="pdp-breadcrumb">
        <Link to="/" className="hover:text-[#1A1110]">Home</Link> / <Link to={`/${product.category}`} className="hover:text-[#1A1110]">{product.category}</Link> / <span className="text-[#1A1110]">{product.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <div className="grid grid-cols-5 gap-3">
            <div className="hidden md:flex col-span-1 flex-col gap-3">
              {(product.images?.length ? product.images : [0, 1, 2]).map((_, i) => (
                <button key={i} onClick={() => setGallery(i)} className={`border ${gallery === i ? "border-[#1A1110]" : "border-transparent"}`} data-testid={`pdp-thumb-${i}`}>
                  <ProductImage src={product.images?.[i]} seed={`${product.id}-${i}`} alt={`${product.name} ${i + 1}`} ratio="aspect-[3/4]" monogramSize="text-lg" />
                </button>
              ))}
            </div>
            <div className="col-span-5 md:col-span-4">
              <div className="relative bg-[#EFE6DD] overflow-hidden group">
                <ProductImage
                  src={product.images?.[gallery] || product.images?.[0]}
                  seed={`${product.id}-${gallery}`}
                  alt={product.name}
                  ratio="aspect-[3/4]"
                  monogramSize="text-9xl"
                  label={`LOOK 0${gallery + 1}`}
                />
              </div>
              <div className="md:hidden mt-3 grid grid-cols-4 gap-2">
                {(product.images?.length ? product.images : [0, 1, 2, 3]).map((_, i) => (
                  <button key={i} onClick={() => setGallery(i)} className={`border ${gallery === i ? "border-[#1A1110]" : "border-transparent"}`}>
                    <ProductImage src={product.images?.[i]} seed={`${product.id}-${i}`} alt={product.name} ratio="aspect-square" monogramSize="text-base" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 md:pl-6">
          <div className="hx-eyebrow mb-2">{product.category}{product.collection ? ` · ${product.collection}` : ""}</div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight" data-testid="pdp-title">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-medium" data-testid="pdp-price">{formatPrice(product.price)}</span>
            {product.old_price && <span className="text-[#91857D] line-through">{formatPrice(product.old_price)}</span>}
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs">
            <div className="flex text-[#C89D66]">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
            <span className="text-[#91857D]">4.9 · 128 reviews</span>
          </div>

          {/* colors */}
          <div className="mt-8">
            <div className="hx-eyebrow mb-3">Colour · <span className="text-[#1A1110]">{color}</span></div>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-9 h-9 rounded-full border transition-all ${color === c ? "ring-2 ring-offset-2 ring-[#1A1110]" : ""}`}
                  style={{ background: SWATCH[c] || "#C89D66", borderColor: "rgba(43,27,23,0.2)" }}
                  aria-label={c}
                  data-testid={`pdp-color-${c.replace(/\s/g, '-').toLowerCase()}`}
                />
              ))}
            </div>
          </div>

          {/* sizes */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <div className="hx-eyebrow">Size</div>
              {/* <button className="hx-eyebrow underline">Size Guide</button> */}
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s} onClick={() => setSize(s)}
                  className={`py-3 text-sm border ${size === s ? "bg-[#1A1110] text-[#FDFBF7] border-[#1A1110]" : "border-[#2B1B17]/20 hover:border-[#1A1110]"}`}
                  data-testid={`pdp-size-${s}`}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* qty */}
          <div className="mt-8">
            <div className="hx-eyebrow mb-3">Quantity</div>
            <div className="inline-flex items-center border border-[#2B1B17]/20">
              <button className="px-4 py-2" onClick={() => setQty(Math.max(1, qty - 1))} data-testid="pdp-qty-dec">−</button>
              <span className="px-5">{qty}</span>
              <button className="px-4 py-2" onClick={() => setQty(qty + 1)} data-testid="pdp-qty-inc">+</button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button onClick={handleAdd} className="w-full bg-[#1A1110] text-[#FDFBF7] py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] flex items-center justify-center gap-2" data-testid="pdp-add-to-cart">
              <ShoppingBag className="w-4 h-4" /> Add to Bag
            </button>
            <button onClick={handleBuy} className="w-full border border-[#1A1110] py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7]" data-testid="pdp-buy-now">
              Buy Now
            </button>
            <button onClick={() => toggleWishlist(product)} className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] mt-1 ${wished ? "text-[#A85D48]" : "text-[#1A1110]"}`} data-testid="pdp-wishlist">
              <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} /> {wished ? "Saved to Wishlist" : "Save to Wishlist"}
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
            <div className="border border-[#2B1B17]/10 p-3 text-center"><Truck className="w-4 h-4 mx-auto text-[#C89D66]" /><div className="mt-1">COD Available</div></div>
            <div className="border border-[#2B1B17]/10 p-3 text-center"><RotateCcw className="w-4 h-4 mx-auto text-[#C89D66]" /><div className="mt-1">30-Day Returns</div></div>
            <div className="border border-[#2B1B17]/10 p-3 text-center"><ShieldCheck className="w-4 h-4 mx-auto text-[#C89D66]" /><div className="mt-1">Secure Checkout</div></div>
          </div>

          <div className="mt-10">
            <Section id="details" title="Product Details">
              <div
                className="prose prose-sm max-w-none text-[#5C524C]"
                dangerouslySetInnerHTML={{ __html: product.description || product.body_html || "" }}
              />
            </Section>
            <Section id="shipping" title="Shipping & Returns">
              Free shipping on orders over ₹2,999. Cash on Delivery available across all serviceable locations. 30-day easy returns — no questions asked.
            </Section>
            <Section id="care" title="Care Instructions">
              Machine wash cold with similar colours. Do not bleach. Tumble dry low or lay flat to dry. Warm iron on reverse.
            </Section>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="bg-[#F5F0EB] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hx-eyebrow mb-3">Customer Reviews</div>
          <h2 className="font-serif text-3xl md:text-4xl">What our community says</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-[#FDFBF7] p-6 border border-[#2B1B17]/8">
                <div className="flex text-[#C89D66] mb-3">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}</div>
                <p className="text-sm text-[#1A1110] leading-relaxed">"{r.text}"</p>
                <div className="mt-4 hx-eyebrow">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* related */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="hx-eyebrow mb-3">Complete The Look</div>
          <h2 className="font-serif text-3xl md:text-4xl mb-8">You may also love</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      )}
    </div>
  );
}
