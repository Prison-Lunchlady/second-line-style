import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import slMonogramWhite from "@/assets/SL_logo_white.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Line Clothing — Born from the streets of Louisiana" },
      { name: "description", content: "New Orleans–inspired streetwear rooted in Louisiana culture and second line tradition. Bold tees, hoodies, and gear." },
      { property: "og:title", content: "Second Line Clothing" },
      { property: "og:description", content: "Born from the streets of Louisiana. Streetwear rooted in New Orleans second line culture." },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  { name: "Louisiana Lowlife Tee", shopifyId: "product-component-1779926175640" },
  { name: "Women's Lowlife Crop Top", shopifyId: "product-component-1779926207875" },
  { name: "Straitjacket Tee", shopifyId: "product-component-1779926229305" },
  { name: "BRCC Dropout Tee", shopifyId: "product-component-1779926255322" },
  { name: "Duffy Circa 2008 Tee", shopifyId: "product-component-1779926288210" },
  { name: "NOLA Nuke Tee", shopifyId: "product-component-1779926312939" },
  { name: "Cortana Mall Tee", shopifyId: "product-component-1779926333820" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '72px', width: 'auto' }} />
          </a>
          <ul className="flex items-center gap-6 sm:gap-8 text-sm font-semibold tracking-widest uppercase">
            <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.5 0.2 300 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.82 0.14 85 / 0.35), transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <img
            src={slMonogramWhite}
            alt="Second Line Clothing"
            className="mx-auto w-[85%] sm:w-[600px] h-auto"
          />
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground italic max-w-xl mx-auto">
            Born from the streets of Louisiana.
          </p>
          <a
            href="#shop"
            className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            Shop Now
          </a>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* Shop */}
      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            THE <span className="text-primary">DROP</span>
          </h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors p-4"
            >
              <div id={p.shopifyId} />
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-y border-border bg-card">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, oklch(0.5 0.2 300 / 0.6), transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            THE <span className="text-primary">STORY</span>
          </h2>
          <div className="mt-3 mb-8 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
            Second Line Clothing was built on Louisiana culture, memory, and the spirit of the second line. We make gear for people who know where they're from and aren't afraid to show it.
          </p>
          <p className="mt-6 text-xl sm:text-2xl font-bold text-primary tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Born in Louisiana. Made for the streets.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Contact form submission placeholder
          }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <textarea
            required
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '48px', width: 'auto' }} />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 hover:text-primary transition-colors"
            >
              {/* TikTok glyph */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19.6 6.3a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.2H11v13.2a2.8 2.8 0 1 1-2-2.7V9.3a5.9 5.9 0 1 0 5 5.9V9.7a8.3 8.3 0 0 0 5 1.6V8.1a5.5 5.5 0 0 1-1.4-1.8z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} Second Line Clothing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
