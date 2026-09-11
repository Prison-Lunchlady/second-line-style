import type { Product } from "./products";

// Build descriptive alt text: product name and color without unrelated search keywords.
export function altForProduct(p: Product, variantLabel?: string): string {
  const color = variantLabel?.includes("/") ? variantLabel.split("/")[0].trim() : "";
  const colorPart = color ? `${color} ` : "";
  return `${colorPart}${p.name} by Second Line Clothing`.trim();
}
