import { createFileRoute } from "@tanstack/react-router";
import { EXTRAS_PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

const DESCRIPTION =
  "Original graphics and limited designs outside our Louisiana collections.";

export const Route = createFileRoute("/extras")({
  head: () => ({
    meta: [
      { title: "Extras | Second Line Clothing" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Extras | Second Line Clothing" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://secondlineclothing.haiglerdigital.com/extras" },
    ],
    links: [
      { rel: "canonical", href: "https://secondlineclothing.haiglerdigital.com/extras" },
    ],
    scripts:
      EXTRAS_PRODUCTS.length > 0
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Extras",
                itemListElement: EXTRAS_PRODUCTS.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Product",
                    name: p.name,
                    brand: { "@type": "Brand", name: "Second Line Clothing" },
                    url: `https://secondlineclothing.haiglerdigital.com/product/${p.slug}`,
                    offers: {
                      "@type": "Offer",
                      price: p.price,
                      priceCurrency: "USD",
                      availability: "https://schema.org/InStock",
                    },
                  },
                })),
              }),
            },
          ]
        : [],
  }),
  component: ExtrasPage,
});

function ExtrasPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CartDrawer />
      <SiteHeader />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12 text-center">
          <h1
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            EXTRAS
          </h1>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">{DESCRIPTION}</p>
        </div>

        {EXTRAS_PRODUCTS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {EXTRAS_PRODUCTS.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest">
            New designs coming soon.
          </p>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}