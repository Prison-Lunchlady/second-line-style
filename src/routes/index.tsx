import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CommunityGallery } from "@/components/CommunityGallery";
import { PRODUCTS, HAT_PRODUCTS } from "@/lib/products";
import { collectionSchema } from "@/lib/seo";
import { ProductCard } from "@/components/ProductCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Louisiana Streetwear & Clothing Brand | Second Line Clothing" },
      { name: "description", content: "Discover Second Line Clothing, a Louisiana clothing line rooted in Baton Rouge. Shop original streetwear, graphic tees, and designs inspired by local culture." },

      { property: "og:title", content: "Louisiana Streetwear & Clothing Brand | Second Line Clothing" },
      { name: "twitter:title", content: "Louisiana Streetwear & Clothing Brand | Second Line Clothing" },
      { property: "og:description", content: "Discover Second Line Clothing, a Louisiana clothing line rooted in Baton Rouge. Shop original streetwear, graphic tees, and designs inspired by local culture." },
      { name: "twitter:description", content: "Discover Second Line Clothing, a Louisiana clothing line rooted in Baton Rouge. Shop original streetwear, graphic tees, and designs inspired by local culture." },
      { property: "og:url", content: "https://second-line-clothing.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://second-line-clothing.com/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(collectionSchema("Louisiana Graphic Tees & Apparel", "/", PRODUCTS)),
    }],
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">Baton Rouge roots. Louisiana stories.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05]">Louisiana Streetwear &amp; Clothing Brand</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">A Louisiana clothing line rooted in Baton Rouge. Original graphic tees inspired by the neighborhoods, local humor, and stories we grew up with.</p>
            <div className="flex flex-wrap gap-4 mt-7 items-center">
              <a href="#shop" className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase rounded-sm hover:brightness-110">Shop the collection</a>
              <Link to="/our-story" className="text-primary font-semibold underline underline-offset-4">Watch our story</Link>
            </div>
          </div>
          <figure className="relative">
            <img src="/media/barry-seal-shirt-outdoors.webp" srcSet="/media/barry-seal-shirt-outdoors-480.webp 480w, /media/barry-seal-shirt-outdoors.webp 960w" sizes="(min-width: 768px) 45vw, 100vw" alt="White Barry Seal Flight School tee worn outdoors, showing the Baton Rouge back graphic" width="960" height="1694" className="w-full h-[400px] sm:h-[500px] object-cover object-[50%_65%] rounded-sm" fetchPriority="high" decoding="async" />
            <figcaption className="mt-3 text-sm text-muted-foreground">Worn in the wild. <Link to="/product/$slug" params={{slug: "barry-seal-flight-school-tee"}} className="text-primary underline underline-offset-4">Shop the Flight School design</Link></figcaption>
          </figure>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>THE <span className="text-primary">DROP</span></h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>

        <div className="mb-20 grid md:grid-cols-2 gap-8 items-center border-b border-border pb-12">
          <div className="max-w-sm mx-auto w-full"><ProductCard p={HAT_PRODUCTS[0]} /></div>
          <div><p className="text-primary text-xs font-bold uppercase tracking-widest">New drop: Squealer Season</p><h3 className="mt-3 text-3xl sm:text-4xl font-black uppercase">Big whistle.<br />Questionable alibi.</h3><p className="mt-4 text-muted-foreground max-w-md">For the duck camp's loudest member. And the bird. Meet our Squealer Season Snapback Rope Cap in black and light grey.</p><Link to="/hats" className="mt-6 inline-block text-primary font-bold underline underline-offset-4">Shop Hats</Link></div>
        </div>
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Original Second Line Collection <span className="text-primary">(Baton Rouge)</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        </div>

        <div>
          <div className="mb-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>EXTRAS</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Original graphics and limited designs outside our Louisiana collections.</p>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/extras"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm border border-border bg-transparent text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View All Extras
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CommunityGallery />

      <section id="about" className="relative border-y border-border bg-card">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 50%, oklch(0.5 0.2 300 / 0.6), transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>OUR LOUISIANA <span className="text-primary">CLOTHING LINE</span></h2>
          <div className="mt-3 mb-8 h-0.5 w-24 mx-auto bg-secondary" />
          <Link to="/our-story" className="group block max-w-sm mx-auto mb-8 rounded-sm overflow-hidden border border-border">
            <img src="/media/founder-introduction.jpg" alt="The founder of Second Line Clothing introduces the brand" width="720" height="1280" loading="lazy" decoding="async" className="w-full h-72 object-cover object-top" />
            <span className="block p-4 bg-primary text-primary-foreground font-bold">▶ Watch the founder’s story · 1:27</span>
          </Link>
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">Second Line Clothing is a Louisiana lifestyle and culture brand. We design graphic tees and apparel that celebrate the culture, humor, history, people, and places that make Louisiana unique, from the bayou to the block. Collection 001 is Baton Rouge inspired; future limited collections will represent cities, towns, and traditions from across the state.</p>
          <p className="mt-6 text-xl sm:text-2xl font-bold text-primary tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Louisiana pride. Limited drops. Made for the streets.</p>
          <p className="mt-6 text-sm"><Link to="/louisiana-streetwear" className="text-primary underline underline-offset-4">Explore our Louisiana streetwear influences</Link> or <Link to="/about" className="text-primary underline underline-offset-4">meet the Louisiana clothing brand behind the designs</Link>.</p>
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

