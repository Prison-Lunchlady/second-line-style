import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS } from "@/lib/products";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/louisiana-streetwear")({
  head: () => ({
    meta: [
      { title: "Louisiana Streetwear — Baton Rouge & New Orleans Influence | Second Line Clothing" },
      { name: "description", content: "What Louisiana streetwear actually is: Baton Rouge and New Orleans influence, local fashion roots, and how Second Line Clothing fits into the scene." },
      { name: "keywords", content: "Louisiana streetwear, Louisiana fashion, Baton Rouge streetwear, New Orleans streetwear, Southern streetwear, Louisiana graphic tees" },
      { property: "og:title", content: "Louisiana Streetwear | Second Line Clothing" },
      { property: "og:description", content: "Louisiana fashion, Baton Rouge and New Orleans influence, and the local roots of Louisiana streetwear." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/louisiana-streetwear` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/louisiana-streetwear` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Louisiana Streetwear",
          description: "Louisiana fashion, Baton Rouge and New Orleans influence, and the local roots of Louisiana streetwear.",
          url: `${ORIGIN}/louisiana-streetwear`,
          about: { "@type": "Place", name: "Louisiana" },
          author: { "@type": "Organization", name: "Second Line Clothing" },
          publisher: { "@type": "Organization", name: "Second Line Clothing", url: ORIGIN },
          mainEntityOfPage: `${ORIGIN}/louisiana-streetwear`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
            { "@type": "ListItem", position: 2, name: "Louisiana Culture", item: `${ORIGIN}/louisiana` },
            { "@type": "ListItem", position: 3, name: "Louisiana Streetwear", item: `${ORIGIN}/louisiana-streetwear` },
          ],
        }),
      },
    ],
  }),
  component: LouisianaStreetwear,
});

function LouisianaStreetwear() {
  const featured = PRODUCTS.slice(0, 4);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">Louisiana Culture</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
          Louisiana Streetwear
        </h1>
        <p className="mt-4 text-lg text-muted-foreground italic">Built from local references, worn outside the city limits.</p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">What "Louisiana fashion" actually means</h2>
            <p className="mt-3">There's no single Louisiana look. The state covers everything from French Quarter formal to deer camp casual to LSU game-day uniform to Sunday-best in a brass band parade. Louisiana fashion is whatever a Louisianian wears, and the through-line isn't a silhouette — it's an attitude. Bold colors are normal. Letting a graphic do the talking is normal. Showing where you're from is normal.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Local influences</h2>
            <p className="mt-3">Louisiana streetwear pulls from a deep, unusual stack: jazz-era New Orleans tailoring, Black Southern dandyism, hip-hop and bounce style, sportswear from college towns, fishing and hunting gear from the coast, vintage parade and krewe merchandise, and the visual language of festivals that run year-round. Add humid weather and you get a closet that prioritizes lightweight cotton tees and well-printed graphics over heavy layering.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Baton Rouge influence</h2>
            <p className="mt-3">Baton Rouge brings the college-town graphic tee tradition, the LSU purple-and-gold visual identity, and a local streetwear scene that has been quietly producing original ideas for years. Collection 001 leans into Baton Rouge for a reason — the city's design sensibility is sharper than it gets credit for, and a lot of what reads as "Louisiana streetwear" nationally has Baton Rouge fingerprints on it.</p>
            <p>Read more: <Link to="/baton-rouge" className="text-primary underline underline-offset-4">Baton Rouge Culture</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">New Orleans influence</h2>
            <p className="mt-3">New Orleans brings the brass band aesthetic, second line culture, neighborhood pride graphics, krewe merch traditions, and a long history of T-shirts that double as cultural documents. The city's design language — bold type, saint imagery, parade-route iconography, fleur-de-lis everything — has shaped how Louisiana streetwear looks to the outside world.</p>
            <p>Read more: <Link to="/new-orleans" className="text-primary underline underline-offset-4">New Orleans Culture</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Where Second Line Clothing fits</h2>
            <p className="mt-3">Second Line Clothing is part of the next layer of Louisiana streetwear: a Louisiana lifestyle brand that treats the whole state — not one city — as the source material. Collection 001 is Baton Rouge inspired. Future drops will move through New Orleans, Acadiana, North Louisiana, bayou country, and the small towns. The brand is street-level Louisiana, on a tee.</p>
          </section>
        </div>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Shop the drop</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <SiteFooter />
    </div>
  );
}
