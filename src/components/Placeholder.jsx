import React from "react";

/** Deterministic-ish tint from a string (product id) for placeholder variety */
const hues = [
  ["#F5F0EB", "#EFE6DD", "#E5DCD2"],
  ["#EFE6DD", "#E6D8C7", "#D9C6B1"],
  ["#F0EAE2", "#E4D6C4", "#CFB99A"],
  ["#EEE5DA", "#DBC9B0", "#B99878"],
  ["#F5EEE3", "#E9DCC6", "#C89D66"],
];
const pick = (seed = "") => {
  let s = 0;
  for (let i = 0; i < seed.length; i++) s = (s + seed.charCodeAt(i)) % hues.length;
  return hues[s];
};

/**
 * Editorial placeholder in HIMAANIX "HX" monogram style.
 * Renders elegantly premium block whenever we don't have real photography.
 */
export default function Placeholder({
  seed = "",
  label,
  ratio = "aspect-[3/4]",
  monogramSize = "text-7xl md:text-8xl",
  className = "",
  showBadge = false,
  badge,
}) {
  const [a, b, c] = pick(seed);
  return (
    <div
      className={`relative w-full overflow-hidden ${ratio} ${className}`}
      style={{ background: `linear-gradient(135deg, ${a} 0%, ${b} 50%, ${c} 100%)` }}
    >
      {/* dotted texture */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(43,27,23,0.07) 1px, transparent 1px), radial-gradient(rgba(43,27,23,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px, 34px 34px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />
      {/* soft radials */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(200,157,102,0.18), transparent 55%), radial-gradient(circle at 80% 90%, rgba(26,17,16,0.12), transparent 60%)",
        }}
      />
      {/* monogram */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif font-medium tracking-widest select-none ${monogramSize}`}
          style={{ color: "rgba(200, 157, 102, 0.45)" }}
        >
          HX
        </span>
      </div>
      {/* editorial label */}
      {label && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#5C524C]">
          <span>{label}</span>
          <span className="font-mono">/ HIMAANIX</span>
        </div>
      )}
      {showBadge && badge && (
        <div className="absolute top-3 left-3 bg-[#1A1110] text-[#FDFBF7] text-[10px] uppercase tracking-[0.22em] px-2.5 py-1">
          {badge}
        </div>
      )}
    </div>
  );
}
