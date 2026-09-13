import { createFileRoute } from "@tanstack/react-router";
import { collectionSchema } from "@/lib/seo";
import { HAT_PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

const DESCRIPTION =
  "Louisiana attitude, above the shoulders. Shop embroidered rope caps from Second Line Clothing, starting with Squealer Season.";

export const Route = createFileRoute("/hats")({
  head: () => ({
    meta: [
      { title: "Hats: Louisiana Rope Caps | Second Line Clothing" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Hats: Louisiana Rope Caps | Second Line Clothing" },
      { name: "twitter:title", content: "Hats: Louisiana Rope Caps | Second Line Clothing" },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://second-line-clothing.com/hats" },
    ],
    links: [
      { rel: "canonical", href: "https://second-line-clothing.com/hats" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(collectionSchema("Hats: Louisiana Rope Caps", "/hats", HAT_PRODUCTS)),
    }],
  }),
  component: HatsPage,
});

function HatsPage() {
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
            HATS
          </h1>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">{DESCRIPTION}</p>
        </div>

        {HAT_PRODUCTS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {HAT_PRODUCTS.map((p) => (
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