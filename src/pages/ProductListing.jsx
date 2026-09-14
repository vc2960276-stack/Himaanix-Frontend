import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import api from "@/lib/api";
import ProductCard from "@/components/ProductCard";

const SIZES = ["XS", "S", "M", "L", "XL"];
const COLOR_SWATCHES = [
  { name: "Ivory",    hex: "#F5F0EB" },
  { name: "Camel",    hex: "#C89D66" },
  { name: "Espresso", hex: "#2B1B17" },
  { name: "Charcoal", hex: "#3A3230" },
  { name: "Sand",     hex: "#D9C6B1" },
  { name: "Ecru",     hex: "#EFE6DD" },
];

export default function ProductListing({ preset }) {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [priceMax, setPriceMax] = useState(300);
  const [sort, setSort] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);

  const category = preset?.category || params.category;
  const listingKey = preset?.key || category || "all";
  const presetIsNew = !!preset?.is_new;
  const presetIsPopular = !!preset?.is_popular;
  const presetTitle = preset?.title;

  const title = useMemo(() => {
    if (presetTitle) return presetTitle;
    if (q) return `Search: “${q}”`;
    if (!category) return "All Pieces";
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [presetTitle, category, q]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      const qparams = {};
      if (category && category !== "all") qparams.category = category;
      if (presetIsNew) qparams.is_new = true;
      if (presetIsPopular) qparams.is_popular = true;
      const { data } = await api.get("/products", { params: qparams });
      if (!cancelled) {
        setProducts(data.products);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [category, presetIsNew, presetIsPopular]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.includes(q));
    if (sizes.length) list = list.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (colors.length) list = list.filter((p) => p.colors.some((c) => colors.includes(c)));
    list = list.filter((p) => p.price <= priceMax);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "popular") list.sort((a, b) => Number(b.is_popular) - Number(a.is_popular));
    else if (sort === "newest") list.sort((a, b) => Number(b.is_new) - Number(a.is_new));
    return list;
  }, [products, sizes, colors, priceMax, sort, q]);

  const toggle = (arr, setArr, v) => setArr(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const Filters = (
    <div className="space-y-8">
      <div>
        <div className="hx-eyebrow mb-3">Size</div>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => toggle(sizes, setSizes, s)}
              className={`px-3 py-1.5 border text-xs uppercase tracking-widest ${sizes.includes(s) ? "bg-[#1A1110] text-[#FDFBF7] border-[#1A1110]" : "border-[#2B1B17]/30 hover:border-[#1A1110]"}`}
              data-testid={`filter-size-${s}`}
            >{s}</button>
          ))}
        </div>
      </div>
      <div>
        <div className="hx-eyebrow mb-3">Colour</div>
        <div className="flex flex-wrap gap-3">
          {COLOR_SWATCHES.map((c) => (
            <button
              key={c.name}
              onClick={() => toggle(colors, setColors, c.name)}
              className={`flex items-center gap-2 px-2 py-1 text-xs ${colors.includes(c.name) ? "ring-1 ring-[#1A1110]" : ""}`}
              data-testid={`filter-color-${c.name.toLowerCase()}`}
            >
              <span className="w-5 h-5 rounded-full border border-[#2B1B17]/20" style={{ background: c.hex }} />
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="hx-eyebrow mb-3">Max Price · <span className="text-[#1A1110]">${priceMax}</span></div>
        <input
          type="range" min="20" max="300" step="10"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-[#1A1110]"
          data-testid="filter-price-range"
        />
      </div>
      {(sizes.length || colors.length || priceMax < 300) ? (
        <button onClick={() => { setSizes([]); setColors([]); setPriceMax(300); }} className="text-xs uppercase tracking-[0.22em] underline">Clear filters</button>
      ) : null}
    </div>
  );

  return (
    <div>
      {/* Banner */}
      <section className="bg-[#EFE6DD] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hx-eyebrow mb-3">HIMAANIX / {listingKey.toUpperCase()}</div>
          <h1 className="font-serif text-5xl md:text-6xl">{title}</h1>
          <p className="mt-3 text-[#5C524C] max-w-xl">Discover our edit of {title.toLowerCase()} — considered pieces designed to layer, transition, and last.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-[#5C524C]" data-testid="products-count">{loading ? "Loading…" : `${filtered.length} pieces`}</div>
          <div className="flex items-center gap-3">
            <button className="md:hidden inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]" onClick={() => setFilterOpen(true)} data-testid="filter-mobile-open">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
            <select
              value={sort} onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border border-[#2B1B17]/20 text-xs uppercase tracking-[0.22em] py-2 px-3 focus:outline-none"
              data-testid="sort-select"
            >
              <option value="newest">Newest</option>
              <option value="popular">Popularity</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <aside className="hidden md:block col-span-3 lg:col-span-2">
            {Filters}
          </aside>
          <div className="col-span-12 md:col-span-9 lg:col-span-10">
            {filtered.length === 0 && !loading && (
              <div className="text-center py-24 text-[#91857D]">No pieces match your filters. Try widening the range.</div>
            )}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        </div>
      </section>

      {filterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-80 max-w-[85%] bg-[#FDFBF7] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="font-serif text-2xl">Filters</div>
              <button onClick={() => setFilterOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            {Filters}
            <button onClick={() => setFilterOpen(false)} className="w-full mt-8 bg-[#1A1110] text-[#FDFBF7] py-3 text-xs uppercase tracking-[0.28em]">Show Results</button>
          </div>
        </div>
      )}
    </div>
  );
}
