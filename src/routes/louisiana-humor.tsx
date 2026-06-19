import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { PRODUCTS } from "@/lib/products";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/louisiana-humor")({
  head: () => ({
    meta: [
      { title: "Louisiana Humor — Sayings, Stereotypes & Stories | Second Line Clothing" },
      { name: "description", content: "Louisiana humor explained: classic sayings, regional stereotypes, Cajun humor, and the inside jokes that show up on Louisiana graphic tees." },
      { name: "keywords", content: "Louisiana humor, Louisiana sayings, Cajun humor, Louisiana stereotypes, Louisiana stories, funny Louisiana tees" },
      { property: "og:title", content: "Louisiana Humor | Second Line Clothing" },
      { property: "og:description", content: "Louisiana sayings, Cajun humor, regional stereotypes, and the local stories that inspire Louisiana graphic tees." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/louisiana-humor` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/louisiana-humor` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Louisiana Humor",
          description: "Louisiana sayings, Cajun humor, stereotypes, and stories explained.",
          url: `${ORIGIN}/louisiana-humor`,
          about: { "@type": "Place", name: "Louisiana" },
          author: { "@type": "Organization", name: "Second Line Clothing" },
          publisher: { "@type": "Organization", name: "Second Line Clothing", url: ORIGIN },
          mainEntityOfPage: `${ORIGIN}/louisiana-humor`,
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
            { "@type": "ListItem", position: 3, name: "Louisiana Humor", item: `${ORIGIN}/louisiana-humor` },
          ],
        }),
      },
    ],
  }),
  component: LouisianaHumor,
});

function LouisianaHumor() {
  const humorProducts = PRODUCTS.filter((p) => /lowlife|swamp|play stupid|cortana|barry/i.test(p.name)).slice(0, 4);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">Louisiana Culture</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
          Louisiana Humor
        </h1>
        <p className="mt-4 text-lg text-muted-foreground italic">If you have to explain a Louisiana joke, you're already losing.</p>

        <div className="mt-10 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Louisiana sayings</h2>
            <p className="mt-3">"Where y'at." "Making groceries." "Geaux." "Cher." "Pass a good time." "Lagniappe." "Fixin' to." "Down the bayou." Louisiana has its own vocabulary, and the way people use it doubles as a sense of humor. Half the jokes are in the word choice. The other half are in the delivery.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Louisiana stereotypes (and the truth underneath)</h2>
            <p className="mt-3">Every state lives with stereotypes; Louisiana lives with louder ones. Alligators in the backyard, hurricanes by name, a politician scandal a month, and a population that treats Mardi Gras as a religious calendar. Locals lean into all of it. The trick is that most stereotypes about Louisiana are exaggerated versions of something that's actually true — which is exactly why they're funny.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Cajun humor</h2>
            <p className="mt-3">Cajun humor is its own dialect. Boudreaux and Thibodeaux jokes, hunting-camp stories that got bigger every year they were told, and a comfort with self-deprecation that translates badly outside South Louisiana. Cajun humor doesn't punch down — it punches sideways, usually at the storyteller themselves.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Local stories that become shirts</h2>
            <p className="mt-3">A bayou chase that ended badly. A Saturday at Tiger Stadium that became a family legend. A mall that wasn't supposed to be that important but absolutely was. The flight school that, allegedly, taught more than just flying. Louisiana humor works on Louisiana graphic tees because the source material is endless and most of it is already common knowledge in the right zip code.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide text-white">Why it matters</h2>
            <p className="mt-3">Humor is how Louisiana culture gets passed down without becoming a museum exhibit. A funny shirt that lands with a local accomplishes something a serious one can't: it tells you somebody who actually lives here designed it. That's the bar Second Line Clothing is trying to hit on every humor-driven drop.</p>
          </section>
        </div>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Shop humor-leaning tees</h2>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3">
            {humorProducts.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm">
          More context: <Link to="/louisiana" className="text-primary underline underline-offset-4">Louisiana Culture Hub</Link> · <Link to="/louisiana-streetwear" className="text-primary underline underline-offset-4">Louisiana Streetwear</Link>
        </p>
      </article>
      <SiteFooter />
    </div>
  );
}
