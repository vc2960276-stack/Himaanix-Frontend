import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductImage from "@/components/ProductImage";

const IMG = (id) => `https://images.unsplash.com/${id}?w=1400&q=80&auto=format&fit=crop`;

const COLLECTIONS = [
  { key: "signature", name: "The Signature Edit",  desc: "Timeless tailoring, considered proportions.",     img: IMG("photo-1490578474895-699cd4e2cf59") },
  { key: "winter",    name: "Winter Monochrome",   desc: "Cream, camel, espresso — one story, three tones.", img: IMG("photo-1595777457583-95e059d581b8") },
  { key: "everyday",  name: "The Everyday Ritual", desc: "Pieces that make the ordinary feel intentional.",   img: IMG("photo-1571908599407-cdb918ed83bf") },
  { key: "atelier",   name: "Atelier Numbered",    desc: "Small-run, hand-finished. Limited to fifty.",      img: IMG("photo-1544441893-675973e31985") },
];

export default function Collections() {
  return (
    <div>
      <section className="bg-[#1A1110] text-[#FDFBF7] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hx-eyebrow text-[#C89D66] mb-3">HIMAANIX / Collections</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">Stories, in cloth.</h1>
          <p className="mt-5 text-[#EFE6DD]/70 max-w-2xl">Each collection is a chapter — a mood, a season, a way of dressing. Explore the world of HIMAANIX through four distinct edits.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {COLLECTIONS.map((c, i) => (
            <Link
              key={c.key} to="/products"
              className={`group relative overflow-hidden ${i % 3 === 0 ? "md:col-span-8" : "md:col-span-4"}`}
              data-testid={`collection-card-${c.key}`}
            >
              <div className="transition-transform duration-700 group-hover:scale-105">
                <ProductImage src={c.img} seed={`collection-${c.key}`} alt={c.name} ratio={i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"} monogramSize="text-8xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1110]/70 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-[#FDFBF7]">
                <div className="hx-eyebrow text-[#EFE6DD]/80 mb-2">Chapter {String(i + 1).padStart(2, '0')}</div>
                <h2 className="font-serif text-3xl md:text-4xl">{c.name}</h2>
                <p className="mt-2 text-sm text-[#EFE6DD]/80 max-w-md">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] border-b border-[#FDFBF7] pb-1">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
