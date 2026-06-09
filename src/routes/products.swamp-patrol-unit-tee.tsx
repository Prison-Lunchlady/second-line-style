import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingCart, Instagram, ArrowLeft, Check } from "lucide-react";
import slMonogramWhite from "@/assets/SL_logo_white.png";
import swampPatrolAsset from "@/assets/swamp_patrol_unit_mockup.png.asset.json";
import { ImageLightbox } from "@/components/ImageLightbox";

const SHOPIFY_URL = "https://second-line-clothing.myshopify.com/products/swamp-patrol-unit-tee";
const PRODUCT_IMAGE = swampPatrolAsset.url;
const PRODUCT_NAME = "Play Stupid Games, Win Stupid Prizes | Swamp Patrol Unit Tee";
const PRODUCT_PRICE = 25;

export const Route = createFileRoute("/products/swamp-patrol-unit-tee")({
  head: () => ({
    meta: [
      { title: "Play Stupid Games Win Stupid Prizes Shirt | Second Line Clothing" },
      { name: "description", content: "Louisiana-inspired Swamp Patrol Unit graphic tee featuring a humorous bayou chase design. Available exclusively from Second Line Clothing." },
      { property: "og:title", content: "Play Stupid Games Win Stupid Prizes Shirt | Second Line Clothing" },
      { property: "og:description", content: "Louisiana-inspired Swamp Patrol Unit graphic tee featuring a humorous bayou chase design. Available exclusively from Second Line Clothing." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "https://secondlineclothing.haiglerdigital.com/products/swamp-patrol-unit-tee" },
      { property: "og:image", content: PRODUCT_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Play Stupid Games Win Stupid Prizes Shirt | Second Line Clothing" },
      { name: "twitter:description", content: "Louisiana-inspired Swamp Patrol Unit graphic tee featuring a humorous bayou chase design." },
      { name: "twitter:image", content: PRODUCT_IMAGE },
    ],
    links: [
      { rel: "canonical", href: "https://secondlineclothing.haiglerdigital.com/products/swamp-patrol-unit-tee" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUCT_NAME,
          image: PRODUCT_IMAGE,
          description: "Louisiana-inspired Swamp Patrol Unit graphic tee featuring a humorous bayou chase design.",
          brand: {
            "@type": "Brand",
            name: "Second Line Clothing",
          },
          offers: {
            "@type": "Offer",
            url: "https://secondlineclothing.haiglerdigital.com/products/swamp-patrol-unit-tee",
            price: PRODUCT_PRICE,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "Second Line Clothing",
            },
          },
        }),
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {lightboxOpen && (
        <ImageLightbox src={PRODUCT_IMAGE} alt={PRODUCT_NAME} onClose={() => setLightboxOpen(false)} />
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '72px', width: 'auto' }} />
          </Link>
          <ul className="flex items-center gap-6 sm:gap-8 text-sm font-semibold tracking-widest uppercase">
            <li><Link to="/" className="hover:text-primary transition-colors">Shop</Link></li>
            <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border cursor-zoom-in bg-card" onClick={() => setLightboxOpen(true)}>
            <img
              src={PRODUCT_IMAGE}
              alt={PRODUCT_NAME}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              width={800}
              height={1067}
              fetchPriority="high"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Louisiana Humor</span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              Play Stupid Games, Win Stupid Prizes
            </h1>
            <p className="mt-1 text-lg text-muted-foreground font-medium">Swamp Patrol Unit Tee</p>
            <p className="mt-4 text-3xl font-bold text-primary">${PRODUCT_PRICE}</p>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>Some lessons are learned the hard way.</p>
              <p>
                The Swamp Patrol Unit Tee is a Louisiana-inspired graphic featuring a bayou chase gone wrong,
                complete with a hungry gator and a reminder that bad decisions often come with consequences.
              </p>
              <p>
                Printed on a comfortable unisex tee with a structured fit, this shirt is built for boat launches,
                bait shops, camp weekends, crawfish boils, and anywhere else common sense occasionally takes a day off.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-sm font-bold tracking-widest uppercase text-white">Features</h2>
              <ul className="mt-3 space-y-2">
                {[
                  "Full-color back graphic",
                  "Small Second Line Clothing chest logo",
                  "Unisex classic fit",
                  "Durable everyday wear",
                  "Designed in Louisiana",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Perfect For */}
            <div className="mt-8">
              <h2 className="text-sm font-bold tracking-widest uppercase text-white">Perfect For</h2>
              <ul className="mt-3 space-y-2">
                {[
                  "Fishing trips",
                  "Camp weekends",
                  "Boat launches",
                  "Bait shops",
                  "Crawfish boils",
                  "Louisiana outdoor culture",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand Statement */}
            <div className="mt-8 p-5 bg-card border border-border rounded-sm">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Second Line Clothing exists for the real Louisiana. Not the tourist version.
              </p>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                Real people. Real places. Real culture.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SHOPIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                <ShoppingCart className="h-5 w-5" />
                Buy on Shopify
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              You will be redirected to our Shopify store to complete your purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '48px', width: 'auto' }} />
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/second_line_clothing?igsh=MXE3YXFxc3F1MHFnaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/profile.php?id=61590223002408" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@second.line.cloth?_r=1&_t=ZP-96p7n3aqZR9" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M19.6 6.3a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.2H11v13.2a2.8 2.8 0 1 1-2-2.7V9.3a5.9 5.9 0 1 0 5 5.9V9.7a8.3 8.3 0 0 0 5 1.6V8.1a5.5 5.5 0 0 1-1.4-1.8z"/></svg>
            </a>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">© {new Date().getFullYear()} Second Line Clothing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
