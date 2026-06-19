import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Louisiana Apparel Brand | Second Line Clothing" },
      { name: "description", content: "Second Line Clothing is a Louisiana apparel brand. Started in Baton Rouge, built to represent Louisiana culture across cities, towns, and traditions." },
      { name: "keywords", content: "about Second Line Clothing, Louisiana apparel brand, Baton Rouge origin, Louisiana lifestyle brand, Louisiana graphic tees" },
      { property: "og:title", content: "About Second Line Clothing" },
      { property: "og:description", content: "A Louisiana apparel brand started in Baton Rouge, built to represent Louisiana culture across the state." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/about` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Second Line Clothing",
          url: `${ORIGIN}/about`,
          mainEntity: {
            "@type": "Organization",
            name: "Second Line Clothing",
            url: ORIGIN,
            foundingLocation: { "@type": "Place", name: "Baton Rouge, Louisiana" },
            areaServed: { "@type": "State", name: "Louisiana" },
            description: "Louisiana lifestyle and culture apparel brand. Graphic tees and streetwear rooted in Louisiana cities, traditions, and humor.",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
            { "@type": "ListItem", position: 2, name: "About", item: `${ORIGIN}/about` },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">About</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
          A Louisiana Apparel Brand.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground italic">Started in Baton Rouge. Built for all of Louisiana.</p>

        <div className="mt-10 space-y-6 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Louisiana roots</h2>
            <p className="mt-3">Second Line Clothing is a Louisiana lifestyle and culture apparel brand. We design graphic tees and streetwear that celebrate the culture, humor, history, people, and places that make Louisiana unique. The brand isn't a tourist version of the state — it's built by and for people who actually live here.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">The Baton Rouge origin story</h2>
            <p className="mt-3">The brand started in Baton Rouge, which is why Collection 001 leans heavily on Baton Rouge references. Baton Rouge is a college town, a state capital, a river city, and a Friday-night football city all at once — a city with more identity than it usually gets credit for. Building the first collection here meant building on real inside knowledge instead of imported stereotypes.</p>
            <p>Read more: <Link to="/baton-rouge" className="text-primary underline underline-offset-4">Baton Rouge Culture</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">A Louisiana-wide vision</h2>
            <p className="mt-3">Baton Rouge is the starting point, not the ceiling. Louisiana culture is regional, layered, and deep — New Orleans is its own world, Acadiana speaks its own language, North Louisiana has its own music history, bayou country has its own working-coast identity, and small towns like Natchitoches carry centuries of Louisiana history on their own terms. Second Line Clothing is built to represent all of that over time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Future city collections</h2>
            <p className="mt-3">Future limited drops will cover cities and regions across the state: <Link to="/new-orleans" className="text-primary underline">New Orleans</Link>, <Link to="/lafayette" className="text-primary underline">Lafayette</Link> and Acadiana, <Link to="/shreveport" className="text-primary underline">Shreveport</Link>, <Link to="/monroe" className="text-primary underline">Monroe</Link>, <Link to="/houma" className="text-primary underline">Houma</Link> and bayou country, <Link to="/natchitoches" className="text-primary underline">Natchitoches</Link>, and the smaller towns and traditions in between. Each collection will get the same treatment — real references, real respect, real specifics.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Why "Second Line"</h2>
            <p className="mt-3">A second line is the group of people who follow a New Orleans brass band parade — participants, not spectators. That's the posture we wanted Louisiana apparel to take: follow the culture, carry it forward, make it wearable.</p>
          </section>
        </div>

        <p className="mt-10 text-sm">
          More: <Link to="/louisiana" className="text-primary underline">Louisiana Culture Hub</Link> · <Link to="/faq" className="text-primary underline">FAQ</Link> · <Link to="/blog" className="text-primary underline">Journal</Link>
        </p>
      </article>
      <SiteFooter />
    </div>
  );
}
