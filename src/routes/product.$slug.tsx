import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { productDescription, productImages } from "@/lib/seo";
import { getProductBySlug, PRODUCTS, EXTRAS_PRODUCTS, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { ImageLightbox } from "@/components/ImageLightbox";
import { altForProduct } from "@/lib/image-alt";
import { COMMUNITY_PHOTOS } from "@/lib/community";

const ORIGIN = "https://second-line-clothing.com";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) {
      return { meta: [{ title: "Item not found, Second Line Clothing" }, { name: "robots", content: "noindex, follow" }] };
    }
    const url = `${ORIGIN}/product/${p.slug}`;
    const title = `${p.name} | Second Line Clothing`;
    const description = productDescription(p);
    const snippet = description.length > 160 ? `${description.slice(0, 157).replace(/\s+\S*$/, "")}…` : description;
    const image = p.image.startsWith("http") ? p.image : `${ORIGIN}${p.image}`;
    return {
      meta: [
        { title },
        { name: "description", content: snippet },

        { property: "og:title", content: title },
        { property: "og:description", content: snippet },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: snippet },
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
            image: [...productImages(p), ...COMMUNITY_PHOTOS.filter(photo => photo.slug === p.slug).map(photo => `${ORIGIN}/media/${photo.file}`)],
            description,
            sku: p.slug,
            category: p.collection === "hats" ? "Hats" : p.collection === "extras" ? "Graphic Apparel" : "Louisiana Apparel",
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
              { "@type": "ListItem", position: 2, name: p.collection === "hats" ? "Hats" : p.collection === "extras" ? "Extras" : "Louisiana Graphic Tees", item: p.collection === "hats" ? `${ORIGIN}/hats` : p.collection === "extras" ? `${ORIGIN}/extras` : `${ORIGIN}/#shop` },
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
      <p className="text-xs font-bold tracking-widest uppercase text-primary">Limited Release, Available Until 6/30</p>
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
  const related = (p.collection === "hats" ? PRODUCTS : p.collection === "extras" ? EXTRAS_PRODUCTS : PRODUCTS).filter(item => item.slug !== p.slug).slice(0, 3);
  const [selectedVariantId, setSelectedVariantId] = useState(p.variants[0].id);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [userPicked, setUserPicked] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

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
        <ImageLightbox
          images={p.gallery?.length ? [currentImage, ...p.gallery] : selectedVariant.back ? [selectedVariant.image, selectedVariant.back] : [currentImage]}
          alt={altForProduct(p, selectedVariant.label)}
          onClose={() => setLightboxOpen(false)}
        />
      )}
      {sizeGuideOpen && p.sizeGuideImage && (
        <ImageLightbox src={p.sizeGuideImage} alt={`${p.name} front and back view`} onClose={() => setSizeGuideOpen(false)} />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 w-full">
        <Link to={p.collection === "hats" ? "/hats" : p.collection === "extras" ? "/extras" : "/"} hash={p.collection ? undefined : "shop"} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="h-4 w-4" /> {p.collection === "hats" ? "Back to Hats" : p.collection === "extras" ? "Back to Extras" : "Back to Louisiana Graphic Tees"}
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 w-full flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-border cursor-zoom-in bg-card" onClick={() => setLightboxOpen(true)}>
            <img
              src={currentImage}
              alt={altForProduct(p, selectedVariant.label)}
              className={`w-full h-full ${p.wideImage ? "object-contain" : "object-cover"} hover:scale-105 transition-transform duration-500`}
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

            <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">{productDescription(p)}</p>

            <div className="mt-8 space-y-3">
              <label htmlFor="variant" className="block text-xs font-bold tracking-widest uppercase text-white">
                {p.variants[0].label.includes("/") ? "Color / Size" : "Size"}
              </label>
              <select
                id="variant"
                value={selectedVariantId}
                onChange={(e) => {
                  setSelectedVariantId(e.target.value);
                  setUserPicked(true);
                }}
                aria-label={`Select option for ${p.name}`}
                className="w-full px-3 py-3 bg-input border border-border rounded-sm text-foreground focus:outline-none focus:border-primary"
              >
                {p.variants.map((v) => (
                  <option key={v.id} value={v.id}>{v.label}</option>
                ))}
              </select>
              {p.sizeGuideImage && (
                <button
                  type="button"
                  onClick={() => setSizeGuideOpen(true)}
                  className="text-xs font-bold tracking-widest uppercase text-primary hover:brightness-110 underline underline-offset-4"
                >
                  View Size Guide
                </button>
              )}
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
        {p.gallery?.length && <section className="mt-10 grid sm:grid-cols-2 gap-5" aria-label="Product mockups">{p.gallery.map((src, i) => <button key={src} onClick={() => setLightboxOpen(true)} className="bg-card border border-border rounded-sm overflow-hidden cursor-zoom-in"><img src={src} alt={`${p.name}, product mockup ${i + 2}`} loading="lazy" className="w-full aspect-square object-contain" /></button>)}</section>}
        {COMMUNITY_PHOTOS.some(photo => photo.slug === p.slug) && <section className="mt-12 border-t border-border pt-8">
          <h2 className="text-xl font-bold uppercase">From the community</h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl">
            {COMMUNITY_PHOTOS.filter(photo => photo.slug === p.slug).map(photo => <figure key={photo.file}>
              <a href={`/media/${photo.file}`} aria-label={`View full photo: ${photo.alt}`}><img src={`/media/${photo.file}`} alt={photo.alt} width="960" height="1700" loading="lazy" className="w-full aspect-[9/16] object-contain bg-card rounded-sm" /></a>
              <figcaption className="mt-2 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>)}
          </div>
        </section>}
        <section className="mt-16 border-t border-border pt-8" aria-label="More from this collection">
          <h2 className="text-xl font-bold uppercase">{p.collection === "extras" ? "More from Extras" : "More Louisiana Graphic Tees"}</h2>
          <ul className="mt-4 flex flex-wrap gap-6">
            {related.map(item => <li key={item.slug}><Link to="/product/$slug" params={{ slug: item.slug }} className="text-primary underline underline-offset-4">{item.name}</Link></li>)}
          </ul>
        </section>
      </section>

      <SiteFooter />
    </div>
  );
}

