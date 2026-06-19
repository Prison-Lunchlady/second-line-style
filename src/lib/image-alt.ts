import type { Product } from "./products";

// Build descriptive alt text: product name, color (if parsable), Louisiana relevance.
export function altForProduct(p: Product, variantLabel?: string): string {
  const color = variantLabel?.includes("/") ? variantLabel.split("/")[0].trim() : "";
  const colorPart = color ? `${color} ` : "";
  return `${colorPart}${p.name} — Louisiana graphic tee from Second Line Clothing`.trim();
}
