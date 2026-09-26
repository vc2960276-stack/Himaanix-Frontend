const normalizeValue = (value) => String(value ?? "").trim();
const TITLE_COLOR_NAMES = [
  ["off white", "Off White"],
  ["deep indigo", "Deep Indigo"],
  ["raw indigo", "Raw Indigo"],
  ["bottle green", "Bottle Green"],
  ["turquoise blue", "Turquoise Blue"],
  ["navy blue", "Navy Blue"],
  ["indigo blue", "Indigo Blue"],
  ["multicolor", "Multicolor"],
  ["multi", "Multicolor"],
  ["burgundy", "Burgundy"],
  ["charcoal", "Charcoal"],
  ["espresso", "Espresso"],
  ["fuchsia", "Fuchsia"],
  ["mustard", "Mustard"],
  ["maroon", "Maroon"],
  ["purple", "Purple"],
  ["yellow", "Yellow"],
  ["orange", "Orange"],
  ["peach", "Peach"],
  ["brown", "Brown"],
  ["black", "Black"],
  ["white", "White"],
  ["ivory", "Ivory"],
  ["cream", "Cream"],
  ["camel", "Camel"],
  ["khaki", "Khaki"],
  ["olive", "Olive"],
  ["green", "Green"],
  ["navy", "Navy"],
  ["blue", "Blue"],
  ["indigo", "Indigo"],
  ["slate", "Slate"],
  ["grey", "Grey"],
  ["gray", "Gray"],
  ["stone", "Stone"],
  ["sand", "Sand"],
  ["beige", "Beige"],
  ["pink", "Pink"],
  ["lilac", "Lilac"],
  ["red", "Red"],
  ["rust", "Rust"],
  ["teal", "Teal"],
];

const uniqueValues = (values) => {
  const unique = new Map();
  values.forEach((value) => {
    const label = normalizeValue(value);
    const key = label.toLowerCase();
    if (key && !unique.has(key)) unique.set(key, label);
  });
  return [...unique.values()];
};

export function getProductColors(product) {
  const explicitColors = uniqueValues(Array.isArray(product?.colors) ? product.colors : [])
    .filter((color) => !["default", "default title"].includes(color.toLowerCase()));
  if (explicitColors.length) return explicitColors;

  const sizes = new Set(uniqueValues(Array.isArray(product?.sizes) ? product.sizes : []).map((size) => size.toLowerCase()));
  const variantColors = (Array.isArray(product?.variants) ? product.variants : [])
    .flatMap((variant) => [variant.option1, variant.option2, variant.option3])
    .filter((value) => {
      const color = normalizeValue(value).toLowerCase();
      return color && !["default", "default title"].includes(color) && !sizes.has(color);
    });

  const colorsFromVariants = uniqueValues(variantColors);
  if (colorsFromVariants.length) return colorsFromVariants;

  const title = normalizeValue(product?.name || product?.title);
  return uniqueValues(
    TITLE_COLOR_NAMES
      .filter(([name]) => new RegExp(`\\b${name}\\b`, "i").test(title))
      .map(([, label]) => label)
  );
}