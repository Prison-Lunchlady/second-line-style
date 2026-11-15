import { isSaleLive } from "@/lib/sale";
import lsu from "@/assets/lsu_lowlife_front_model.png.asset.json";
import raising from "@/assets/raising_hell_black_back.png.asset.json";
import woods from "@/assets/br_woods_tee.png.asset.json";
import homeAlone from "@/assets/home-alone-black-tee.jpeg.asset.json";

const PHOTOS = [
  { src: lsu.url, alt: "LSU Lowlife Tee worn by a model", fit: "object-cover" },
  { src: raising.url, alt: "Raising Hell black tee back graphic", fit: "object-cover" },
  { src: woods.url, alt: "BR Woods Tee worn by a model", fit: "object-cover" },
  { src: homeAlone.url, alt: "Home Alone in Baton Rouge black tee, front and back", fit: "object-contain" },
];

export function SaleHero() {
  if (!isSaleLive()) return null;
  return (
    <section aria-labelledby="sale-heading" className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sale">LIVE NOW • ENDS NOV 30</p>
          <h2 id="sale-heading" className="mt-3 text-4xl sm:text-5xl font-black uppercase leading-none">EARLY BLACK FRIDAY SALE</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-black text-primary">15% OFF STOREWIDE</p>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest">AUTOMATIC AT CHECKOUT • NO CODE NEEDED</p>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-sale">FREE US SHIPPING ON ORDERS $150+</p>
          <p className="mt-3 text-xs text-muted-foreground">November 15–30, 2026. Free shipping applies to eligible US standard shipping on a subtotal of $150+ after discounts, before tax.</p>
          <a href="#shop" className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-sm hover:brightness-110">SHOP THE SALE</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PHOTOS.map((p) => (
            <img key={p.src} src={p.src} alt={p.alt} loading="lazy" decoding="async" className={`w-full h-40 sm:h-56 ${p.fit} bg-background rounded-sm border border-border`} />
          ))}
        </div>
      </div>
    </section>
  );
}
