/**
 * Format a numeric value as an Indian-Rupee string.
 * Uses the Indian number system grouping (e.g. 1,29,999) and no decimals.
 */
export const formatPrice = (v) => {
  if (v == null || Number.isNaN(Number(v))) return "₹0";
  return `₹${Math.round(Number(v)).toLocaleString("en-IN")}`;
};
