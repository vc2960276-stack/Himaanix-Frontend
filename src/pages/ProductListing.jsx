import React, { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { SlidersHorizontal, X, Sparkles, Bell } from "lucide-react";
import api from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import { formatPrice } from "@/lib/currency";

const SIZES = ["XS", "S", "M", "L", "XL"];
const COLOR_SWATCHES = [
  { name: "Ivory", hex: "#F5F0EB" },
  { name: "Camel", hex: "#C89D66" },
  { name: "Espresso", hex: "#2B1B17" },
  { name: "Charcoal", hex: "#3A3230" },
  { name: "Sand", hex: "#D9C6B1" },
  { name: "Ecru", hex: "#EFE6DD" },
];

// Categories that should render the "Coming Soon" page instead of a listing.
const COMING_SOON_CATEGORIES = new Set(["kids", "kid", "children", "baby"]);

function ComingSoon({ categoryLabel = "Kids" }) {
  return (
    <div>
      <section className="bg-[#EFE6DD] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hx-eyebrow mb-4">HIMAANIX / {categoryLabel.toUpperCase()}</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Coming&nbsp;Soon
          </h1>
          <p className="mt-6 text-[#5C524C] max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We&rsquo;re tailoring something special for {categoryLabel.toLowerCase()}.
            Our {categoryLabel} edit is in the making — soft fabrics, considered cuts,
            and the same quiet luxury you love, scaled down.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17]"
              data-testid="coming-soon-notify"
              onClick={() => {
                // Hook this up to your newsletter / notify endpoint
                // e.g. api.post("/notify", { category: categoryLabel })
                alert(`We'll let you know when ${categoryLabel} drops.`);
              }}
            >
              <Bell className="w-4 h-4" /> Notify Me
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border border-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7]"
            >
              Explore The Edit
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Soft Fabrics", body: "Skin-friendly cottons, breathable linens, and gentle blends." },
            { title: "Considered Cuts", body: "Designed to move, play, and grow with them." },
            { title: "Quiet Luxury", body: "The same HIMAANIX ethos — refined, timeless, built to last." },
          ].map((c) => (
            <div key={c.title} className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8">
              <Sparkles className="w-5 h-5 text-[#C89D66] mb-4" />
              <div className="font-serif text-2xl mb-2">{c.title}</div>
              <p className="text-sm text-[#5C524C] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ProductListing({ preset }) {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [priceMax, setPriceMax] = useState(40000);
  const [sort, setSort] = useState("newest");
  const [filterOpen, setFilterOpen] = useState(false);
  const [visible, setVisible] = useState(24);

  const category = preset?.category || params.category;
  const listingKey = preset?.key || category || "all";
  const presetIsNew = !!preset?.is_new;
  const presetIsPopular = !!preset?.is_popular;
  const presetTitle = preset?.title;

  // Detect "coming soon" categories early so we can short-circuit the listing.
  const isComingSoon =
    !!category && COMING_SOON_CATEGORIES.has(String(category).toLowerCase());

  const title = useMemo(() => {
    if (presetTitle) return presetTitle;
    if (q) return `Search: “${q}”`;
    if (!category) return "All Pieces";
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [presetTitle, category, q]);

  useEffect(() => {
    // Skip fetching entirely for coming-soon categories.
    if (isComingSoon) {
      setLoading(false);
      return;
    }
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
  }, [category, presetIsNew, presetIsPopular, isComingSoon]);

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

  // Reset the visible window whenever the active filter set changes.
  useEffect(() => { setVisible(24); }, [sizes, colors, priceMax, sort, q, category]);

  // Render Coming Soon page for kids (and friends).
  if (isComingSoon) {
    return <ComingSoon categoryLabel={title} />;
  }

  const visibleItems = filtered.slice(0, visible);

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
        <div className="hx-eyebrow mb-3">Max Price · <span className="text-[#1A1110]">{formatPrice(priceMax)}</span></div>
        <input
          type="range" min="500" max="40000" step="500"
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full accent-[#1A1110]"
          data-testid="filter-price-range"
        />
      </div>
      {(sizes.length || colors.length || priceMax < 40000) ? (
        <button onClick={() => { setSizes([]); setColors([]); setPriceMax(40000); }} className="text-xs uppercase tracking-[0.22em] underline">Clear filters</button>
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
              {visibleItems.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
            {visible < filtered.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisible((v) => v + 24)}
                  className="border border-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7]"
                  data-testid="load-more-button"
                >
                  Load More
                </button>
              </div>
            )}
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