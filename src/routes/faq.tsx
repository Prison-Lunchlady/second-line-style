import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { SITE_FAQS } from "@/lib/faq";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Second Line Clothing | Louisiana Apparel" },
      { name: "description", content: "Answers about Second Line Clothing, a Louisiana lifestyle apparel brand: what we are, where we're based, why Louisiana apparel is unique, and what's coming next." },
      { property: "og:title", content: "Second Line Clothing FAQ" },
      { property: "og:description", content: "Common questions about a Louisiana apparel brand: who we are, where we're based, limited releases, and upcoming city collections." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/faq` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SITE_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: ORIGIN },
            { "@type": "ListItem", position: 2, name: "FAQ", item: `${ORIGIN}/faq` },
          ],
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <p className="text-xs tracking-widest uppercase text-muted-foreground">FAQ</p>
        <h1 className="mt-2 text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
          Frequently Asked
        </h1>

        <div className="mt-10 space-y-6">
          {SITE_FAQS.map((f) => (
            <section key={f.q} className="border-b border-border pb-5">
              <h2 className="text-lg font-bold text-white">{f.q}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.a}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm">
          More: <Link to="/about" className="text-primary underline">About</Link> · <Link to="/louisiana" className="text-primary underline">Louisiana Culture Hub</Link> · <Link to="/blog" className="text-primary underline">Journal</Link>
        </p>
      </article>
      <SiteFooter />
    </div>
  );
}
