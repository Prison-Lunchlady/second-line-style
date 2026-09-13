import type { Product } from "./products";

export const SITE_ORIGIN = "https://second-line-clothing.com";

export function productDescription(p: Product): string {
  return p.description || `Shop ${p.name} from Second Line Clothing's ${p.collection === "extras" ? "Extras collection of original graphic apparel" : "Louisiana-inspired collection"}. Choose from the available sizes and colors.`;
}

export function productImages(p: Product): string[] {
  return [...new Set([p.image, p.coverImage, ...(p.gallery || []), ...p.variants.flatMap(v => [v.image, v.back])]
    .filter((image): image is string => Boolean(image))
    .map(image => new URL(image, SITE_ORIGIN).href))];
}

export function collectionSchema(name: string, path: string, products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: `${SITE_ORIGIN}${path}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.name,
        url: `${SITE_ORIGIN}/product/${p.slug}`,
      })),
    },
  };
}

