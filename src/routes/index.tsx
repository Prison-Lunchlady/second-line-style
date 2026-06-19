import { createFileRoute } from "@tanstack/react-router";
import slMonogramWhite from "@/assets/SL_logo_white.png";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louisiana Graphic Tees & Apparel | Second Line Clothing" },
      { name: "description", content: "Louisiana-inspired graphic tees and apparel celebrating the culture, humor, history, people, and places that make Louisiana unique." },
      { name: "keywords", content: "Louisiana graphic tee, Louisiana apparel, Louisiana clothing, Louisiana streetwear, Southern graphic tee, Louisiana culture, Louisiana lifestyle brand" },
      { property: "og:title", content: "Louisiana Graphic Tees & Apparel | Second Line Clothing" },
      { property: "og:description", content: "Louisiana-inspired graphic tees and apparel celebrating the culture, humor, history, people, and places that make Louisiana unique." },
      { property: "og:url", content: "https://secondlineclothing.haiglerdigital.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://secondlineclothing.haiglerdigital.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Louisiana Graphic Tees & Apparel",
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              brand: { "@type": "Brand", name: "Second Line Clothing" },
              url: `https://secondlineclothing.haiglerdigital.com/product/${p.slug}`,
              offers: {
                "@type": "Offer",
                price: p.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CartDrawer />
      <SiteHeader />

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, oklch(0.5 0.2 300 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.82 0.14 85 / 0.35), transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <h1 className="sr-only">Second Line Clothing — Born from the streets of Louisiana</h1>
          <img src={slMonogramWhite} alt="Second Line Clothing" className="mx-auto w-[85%] sm:w-[600px] h-auto" />
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground italic max-w-xl mx-auto">Louisiana culture, lifestyle, and humor — on every shirt. Limited collection releases, born from the streets of Louisiana.</p>
          <a href="#shop" className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">Shop Now</a>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>THE <span className="text-primary">DROP</span></h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section id="about" className="relative border-y border-border bg-card">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 50%, oklch(0.5 0.2 300 / 0.6), transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>THE <span className="text-primary">STORY</span></h2>
          <div className="mt-3 mb-8 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">Second Line Clothing is a Louisiana lifestyle and culture brand. We design graphic tees and apparel that celebrate the culture, humor, history, people, and places that make Louisiana unique — from the bayou to the block. Collection 001 is Baton Rouge inspired; future limited collections will represent cities, towns, and traditions from across the state.</p>
          <p className="mt-6 text-xl sm:text-2xl font-bold text-primary tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Louisiana pride. Limited drops. Made for the streets.</p>
        </div>
      </section>

      <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>GET IN <span className="text-primary">TOUCH</span></h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const email = (form.elements.namedItem("email") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            const subject = encodeURIComponent(`Contact from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:contact@haiglerdigital.com?subject=${subject}&body=${body}`;
          }}
        >
          <input name="name" type="text" required placeholder="Name" aria-label="Your name" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input name="email" type="email" required placeholder="Email" aria-label="Your email address" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <textarea name="message" required rows={5} placeholder="Message" aria-label="Your message" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all">Send Message</button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
