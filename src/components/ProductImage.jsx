import React, { useState } from "react";
import Placeholder from "@/components/Placeholder";

/**
 * Renders an editorial fashion image with graceful fallback to the HX monogram Placeholder.
 * Preserves the same aspect-ratio/wrapper so hover animations still apply.
 */
export default function ProductImage({
  src,
  seed = "",
  alt = "",
  ratio = "aspect-[3/4]",
  monogramSize = "text-7xl md:text-8xl",
  label,
  showBadge = false,
  badge,
  loading = "lazy",
  className = "",
}) {
  const [failed, setFailed] = useState(!src);

  if (failed || !src) {
    return (
      <Placeholder
        seed={seed}
        label={label}
        ratio={ratio}
        monogramSize={monogramSize}
        showBadge={showBadge}
        badge={badge}
        className={className}
      />
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-[#EFE6DD] ${ratio} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {label && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/80 z-10">
          <span className="bg-black/30 backdrop-blur-sm px-2 py-0.5">{label}</span>
          <span className="font-mono bg-black/30 backdrop-blur-sm px-2 py-0.5">/ HIMAANIX</span>
        </div>
      )}
      {showBadge && badge && (
        <div className="absolute top-3 left-3 bg-[#1A1110] text-[#FDFBF7] text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 z-10">
          {badge}
        </div>
      )}
    </div>
  );
}
