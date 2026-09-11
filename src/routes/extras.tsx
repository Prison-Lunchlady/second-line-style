import { createFileRoute } from "@tanstack/react-router";
import { collectionSchema } from "@/lib/seo";
import { EXTRAS_PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

const DESCRIPTION =
  "Shop the Extras collection: original graphic tees and statement designs from Second Line Clothing, beyond our Louisiana-inspired collection.";

export const Route = createFileRoute("/extras")({
  head: () => ({
    meta: [
      { title: "Extras: Original Graphic Tees | Second Line Clothing" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Extras: Original Graphic Tees | Second Line Clothing" },
      { name: "twitter:title", content: "Extras: Original Graphic Tees | Second Line Clothing" },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://second-line-clothing.com/extras" },
    ],
    links: [
      { rel: "canonical", href: "https://second-line-clothing.com/extras" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(collectionSchema("Extras: Original Graphic Tees", "/extras", EXTRAS_PRODUCTS)),
    }],
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