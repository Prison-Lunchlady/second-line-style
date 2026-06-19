import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import type { CityHub } from "@/lib/cities";
import { CITY_HUBS } from "@/lib/cities";
import { PRODUCTS } from "@/lib/products";

export function CityHubPage({ city }: { city: CityHub }) {
  const otherCities = CITY_HUBS.filter((c) => c.slug !== city.slug);
  const featured = PRODUCTS.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <Link to="/louisiana" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Louisiana Culture Hub
        </Link>

        <header className="mt-6">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">{city.region}</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
            {city.name} Culture
          </h1>
          <p className="mt-4 text-lg text-muted-foreground italic">{city.tagline}</p>
        </header>

        <div className="mt-10 space-y-10">
          {city.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">{s.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-14 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Wear the culture</h2>
          <p className="mt-2 text-sm text-muted-foreground">Louisiana graphic tees from the current Second Line Clothing drop.</p>
          <ul className="mt-4 grid sm:grid-cols-3 gap-3">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Explore more Louisiana</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link to={`/${c.slug}` as "/baton-rouge"} className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                  {c.name} — {c.region}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/louisiana-humor" className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                Louisiana Humor
              </Link>
            </li>
            <li>
              <Link to="/louisiana-streetwear" className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                Louisiana Streetwear
              </Link>
            </li>
          </ul>
        </section>
      </article>
      <SiteFooter />
    </div>
  );
}

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export function buildCityHead(city: CityHub) {
  const url = `${ORIGIN}/${city.slug}`;
  return {
    meta: [
      { title: city.metaTitle },
      { name: "description", content: city.metaDescription },
      { name: "keywords", content: `${city.name} culture, ${city.name} Louisiana, Louisiana culture, ${city.region}, Louisiana lifestyle, Louisiana apparel` },
      { property: "og:title", content: city.metaTitle },
      { property: "og:description", content: city.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${city.name} Culture`,
          description: city.metaDescription,
          url,
          about: { "@type": "Place", name: `${city.name}, Louisiana` },
          author: { "@type": "Organization", name: "Second Line Clothing" },
          publisher: { "@type": "Organization", name: "Second Line Clothing", url: ORIGIN },
          mainEntityOfPage: url,
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
            { "@type": "ListItem", position: 3, name: `${city.name} Culture`, item: url },
          ],
        }),
      },
    ],
  };
}
