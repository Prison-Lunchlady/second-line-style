import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { getProductBySlug, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { ImageLightbox } from "@/components/ImageLightbox";
import { altForProduct } from "@/lib/image-alt";

const ORIGIN = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) {
      return { meta: [{ title: "Item not found — Second Line Clothing" }] };
    }
    const url = `${ORIGIN}/product/${p.slug}`;
    const title = `${p.name} | Louisiana Graphic Tee — Second Line Clothing`;
    const description = p.description
      ? `${p.description} Louisiana graphic tee from Second Line Clothing.`
      : `${p.name} — a Louisiana graphic tee from Second Line Clothing. Louisiana-inspired apparel celebrating the culture, humor, and lifestyle of the bayou state.`;
    const image = p.image.startsWith("http") ? p.image : `${ORIGIN}${p.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: `${p.name}, Louisiana graphic tee, Louisiana apparel, Louisiana clothing, Louisiana streetwear, Southern graphic tee` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            image,
            description,
            sku: p.slug,
            category: "Louisiana Apparel",
            brand: {
              "@type": "Brand",
              name: "Second Line Clothing",
              url: ORIGIN,
            },
            offers: {
              "@type": "Offer",
              url,
              price: p.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              seller: { "@type": "Organization", name: "Second Line Clothing" },
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
              { "@type": "ListItem", position: 2, name: "Shop", item: `${ORIGIN}/#shop` },
              { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ProductPage,
});

function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <CartDrawer />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">Item not found</h1>
          <p className="mt-3 text-muted-foreground">We couldn't find that product. It may have moved or sold out.</p>
          <Link to="/" hash="shop" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:brightness-110 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Countdown({ endsAt }: { endsAt: number }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const remaining = Math.max(0, endsAt - now);
  if (remaining === 0) return null;
  const s = Math.floor(remaining / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const cell = (v: number, label: string) => (
    <div className="flex flex-col items-center px-3 py-2 bg-background/60 rounded-sm min-w-[60px]">
      <span className="text-2xl sm:text-3xl font-black text-primary tabular-nums leading-none">{v.toString().padStart(2, "0")}</span>
      <span className="mt-1 text-[10px] tracking-widest uppercase text-muted-foreground">{label}</span>
    </div>
  );
  return (
    <div className="mt-6 p-4 bg-card border border-primary/40 rounded-sm">
      <p className="text-xs font-bold tracking-widest uppercase text-primary">Limited Release — Available Until 6/30</p>
      <div className="mt-3 flex gap-2 sm:gap-3">
        {cell(days, "Days")}
        {cell(hours, "Hours")}
        {cell(minutes, "Mins")}
        {cell(seconds, "Secs")}
      </div>
      <p className="mt-3 text-xs text-muted-foreground italic">No restocks. No reruns. Once the patrol stands down, this shirt retires.</p>
    </div>
  );
}

function ProductPage() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  const { addToCart } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(p.variants[0].id);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [userPicked, setUserPicked] = useState(false);

  const selectedVariant = p.variants.find((v) => v.id === selectedVariantId) || p.variants[0];
  const currentImage = !userPicked && p.coverImage ? p.coverImage : selectedVariant.image;

  const handleAdd = () => {
    addToCart({
      id: selectedVariantId,
      name: p.name,
      variant: selectedVariant.label,
      price: p.price,
      image: currentImage,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <CartDrawer />
      {lightboxOpen && (
        <ImageLightbox src={currentImage} alt={altForProduct(p, selectedVariant.label)} onClose={() => setLightboxOpen(false)} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 w-full">
        <Link to="/" hash="shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border cursor-zoom-in bg-card" onClick={() => setLightboxOpen(true)}>
            <img
              src={currentImage}
              alt={altForProduct(p, selectedVariant.label)}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              width={800}
              height={1067}
              fetchPriority="high"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              {p.name}
            </h1>
            <p className="mt-4 text-3xl font-bold text-primary">${p.price}</p>

            {p.availableUntil && <Countdown endsAt={p.availableUntil} />}

            {p.description && (
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.description}</p>
            )}

            <div className="mt-8 space-y-3">
              <label htmlFor="variant" className="block text-xs font-bold tracking-widest uppercase text-white">
                {p.variants[0].label.includes("/") ? "Color / Size" : "Size"}
              </label>
              <select
                id="variant"
                value={selectedVariantId}
                onChange={(e) => { setSelectedVariantId(e.target.value); setUserPicked(true); }}
                aria-label={`Select option for ${p.name}`}
                className="w-full px-3 py-3 bg-input border border-border rounded-sm text-foreground focus:outline-none focus:border-primary"
              >
                {p.variants.map((v) => (
                  <option key={v.id} value={v.id}>{v.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAdd}
              className={`mt-6 w-full py-4 font-bold text-sm tracking-widest uppercase rounded-sm transition-all flex items-center justify-center gap-2 ${added ? "bg-green-600 text-white" : "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20"}`}
            >
              {added ? (<><Check className="h-5 w-5" /> Added to Cart</>) : "Add to Cart"}
            </button>

            <div className="mt-8 p-5 bg-card border border-border rounded-sm">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Second Line Clothing exists for the real Louisiana. Not the tourist version.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
