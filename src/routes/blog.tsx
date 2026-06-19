import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { BLOG_POSTS } from "@/lib/blog";
import { PRODUCTS } from "@/lib/products";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Louisiana Culture, Style & Stories | Second Line Clothing" },
      {
        name: "description",
        content:
          "Stories, culture, and inspiration behind Second Line Clothing — a Louisiana lifestyle apparel brand. Read about Louisiana graphic tees, Louisiana style, and the people behind the drops.",
      },
      { property: "og:title", content: "Journal — Louisiana Culture & Style | Second Line Clothing" },
      { property: "og:description", content: "Stories and inspiration behind Louisiana graphic tees and apparel from Second Line Clothing." },
      { property: "og:url", content: `${ORIGIN}/blog` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Second Line Clothing Journal",
          url: `${ORIGIN}/blog`,
          publisher: { "@type": "Organization", name: "Second Line Clothing", url: ORIGIN },
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${ORIGIN}/blog/${p.slug}`,
            datePublished: p.date,
            description: p.description,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const featured = PRODUCTS.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 w-full flex-1">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            THE <span className="text-primary">JOURNAL</span>
          </h1>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Stories, culture, and inspiration behind Louisiana graphic tees and apparel — straight from a Louisiana lifestyle brand.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read</p>
              <h2 className="mt-3 text-xl font-bold leading-tight text-white">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{post.description}</p>
              <Link to="/blog/$slug" params={{ slug: post.slug }} className="mt-4 inline-block text-xs font-bold tracking-widest uppercase text-primary hover:brightness-110">
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>From the Drop</h2>
          <p className="mt-2 text-sm text-muted-foreground">Louisiana graphic tees featured in our latest collection.</p>
          <ul className="mt-4 grid sm:grid-cols-3 gap-4">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link to="/product/$slug" params={{ slug: p.slug }} className="block text-sm text-primary hover:brightness-110 underline underline-offset-4">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <SiteFooter />
    </div>
  );
}
