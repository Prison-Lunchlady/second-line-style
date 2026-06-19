import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { CITY_HUBS } from "@/lib/cities";
import { PRODUCTS } from "@/lib/products";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/louisiana")({
  head: () => ({
    meta: [
      { title: "Louisiana Culture Hub — Food, Music, Cities & Lifestyle | Second Line Clothing" },
      { name: "description", content: "A Louisiana culture hub from a Louisiana apparel brand: culture, humor, food, music, traditions, cities, and lifestyle — and how it all shapes Second Line Clothing." },
      { name: "keywords", content: "Louisiana culture, Louisiana lifestyle, Louisiana food, Louisiana music, Louisiana traditions, Louisiana cities, Louisiana humor, Louisiana apparel" },
      { property: "og:title", content: "Louisiana Culture Hub | Second Line Clothing" },
      { property: "og:description", content: "Louisiana culture, humor, food, music, traditions, cities, and lifestyle — from a Louisiana apparel brand." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/louisiana` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/louisiana` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Louisiana Culture Hub",
          description: "Louisiana culture, humor, food, music, traditions, cities, and lifestyle from a Louisiana apparel brand.",
          url: `${ORIGIN}/louisiana`,
          about: { "@type": "Place", name: "Louisiana" },
          author: { "@type": "Organization", name: "Second Line Clothing" },
          publisher: { "@type": "Organization", name: "Second Line Clothing", url: ORIGIN },
          mainEntityOfPage: `${ORIGIN}/louisiana`,
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
          ],
        }),
      },
    ],
  }),
  component: LouisianaHub,
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-foreground">{children}</div>
    </section>
  );
}

function LouisianaHub() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <header>
          <p className="text-xs tracking-widest uppercase text-muted-foreground">Louisiana Culture Hub</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
            Louisiana, Wearable.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground italic">
            Second Line Clothing is a Louisiana lifestyle and culture brand. This is the long answer to what that means.
          </p>
        </header>

        <nav className="mt-8 flex flex-wrap gap-2 text-xs tracking-widest uppercase" aria-label="On this page">
          {[
            ["culture", "Culture"],
            ["humor", "Humor"],
            ["food", "Food"],
            ["music", "Music"],
            ["traditions", "Traditions"],
            ["cities", "Cities"],
            ["lifestyle", "Lifestyle"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="px-3 py-1 border border-border rounded-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors">{label}</a>
          ))}
        </nav>

        <div className="mt-12 space-y-12">
          <Section id="culture" title="Louisiana Culture">
            <p>Louisiana culture is the result of centuries of French, Spanish, African, Caribbean, Native American, and Southern American influence colliding in one state. You can hear it in the music, taste it in the food, see it in the architecture, and read it on the menus. It's not a single tradition — it's a layered, regional, lived-in culture that doesn't translate cleanly to the rest of the country.</p>
            <p>That's why a Louisiana apparel brand can't be generic. Louisiana graphic tees only work when they're specific — when they reference a parish, a phrase, a dish, a moment that locals know on sight. Vague Southern pride isn't enough.</p>
          </Section>

          <Section id="humor" title="Louisiana Humor">
            <p>Louisiana humor is dry, regional, and deeply self-aware. It runs on inside jokes about traffic on the bridge, weather that switches seasons in a single afternoon, politicians that read like fiction, and family stories that always seem to involve at least one alligator. <Link to="/louisiana-humor" className="text-primary underline underline-offset-4">More on Louisiana humor →</Link></p>
          </Section>

          <Section id="food" title="Louisiana Food">
            <p>Gumbo, jambalaya, étouffée, red beans and rice, boudin, cracklins, po-boys, sno-balls, fried catfish, crawfish boils, Natchitoches meat pies, plate lunches you eat standing up at a gas station. Louisiana food is regional within the state itself — a Cajun gumbo from Lafayette doesn't look like a Creole gumbo from New Orleans doesn't look like a North Louisiana version. It's a cuisine built by working people who took whatever the land gave them and learned to cook it three different ways.</p>
          </Section>

          <Section id="music" title="Louisiana Music">
            <p>New Orleans gave the world jazz, brass bands, and bounce. Acadiana gave the world Cajun and zydeco. Baton Rouge helped invent swamp blues. Shreveport launched country careers on the Louisiana Hayride. Monroe carries Delta gospel and blues. No state of Louisiana's size has contributed more to American music — and that musical DNA is still being made in dance halls, clubs, churches, and second lines every weekend.</p>
          </Section>

          <Section id="traditions" title="Louisiana Traditions">
            <p>Mardi Gras, second lines, crawfish boils, fais do-dos, jazz funerals, Friday night football, Sunday gumbo, Christmas Eve bonfires on the levee, the Natchitoches Christmas Festival, Jazz Fest, Festival International, the Shrimp and Petroleum Festival, krewes you inherit from your parents. Louisiana traditions don't get archived in museums — they get repeated, every year, by the people who live them.</p>
          </Section>

          <Section id="cities" title="Louisiana Cities">
            <p>Louisiana is not one city. Each region has its own identity, food, accent, and version of the culture. Read the city hubs:</p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {CITY_HUBS.map((c) => (
                <li key={c.slug}>
                  <a href={`/${c.slug}`} className="text-primary underline underline-offset-4 hover:brightness-110">{c.name} — {c.region}</a>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="lifestyle" title="Louisiana Lifestyle">
            <p>Louisiana lifestyle is festivals, family meals that run for hours, porches, dance halls, hunting and fishing camps, brass bands, tailgates, church suppers, and a working relationship with the weather. It's slow when it wants to be and loud when it wants to be. Second Line Clothing builds graphic tees and apparel for the people who live it, not the people who visit it.</p>
            <p><Link to="/louisiana-streetwear" className="text-primary underline underline-offset-4">See how this becomes Louisiana streetwear →</Link></p>
          </Section>
        </div>

        <section className="mt-16 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Wear Louisiana</h2>
          <ul className="mt-3 grid sm:grid-cols-3 gap-3">
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
