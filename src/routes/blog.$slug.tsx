import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { BLOG_POSTS, getPostBySlug, type BlogPost } from "@/lib/blog";
import { PRODUCTS } from "@/lib/products";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found — Second Line Clothing" }] };
    const url = `${ORIGIN}/blog/${post.slug}`;
    const title = `${post.title} | Second Line Clothing Journal`;
    return {
      meta: [
        { title },
        { name: "description", content: post.description },
        { property: "og:title", content: title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            url,
            author: { "@type": "Organization", name: "Second Line Clothing" },
            publisher: {
              "@type": "Organization",
              name: "Second Line Clothing",
              logo: { "@type": "ImageObject", url: "https://storage.googleapis.com/gpt-engineer-file-uploads/fkxVQFBXkMMhWxhFGgwVSGQKnIw2/social-images/social-1779918298062-logo.webp" },
            },
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
              { "@type": "ListItem", position: 2, name: "Journal", item: `${ORIGIN}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-black uppercase">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary underline">Back to Journal</Link>
      </div>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const featured = PRODUCTS.slice(0, 3);
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <CartDrawer />
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 w-full flex-1">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>
        <header className="mt-6">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.readMinutes} min read
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.description}</p>
        </header>
        <div className="mt-8 space-y-5 text-foreground leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">Shop the drop</h2>
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

        {related.length > 0 && (
          <section className="mt-10 border-t border-border pt-8">
            <h2 className="text-lg font-bold uppercase tracking-wide text-white">Keep reading</h2>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link to="/blog/$slug" params={{ slug: r.slug }} className="text-sm text-primary hover:brightness-110 underline underline-offset-4">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <SiteFooter />
    </div>
  );
}
