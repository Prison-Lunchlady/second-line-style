import { Link } from "@tanstack/react-router";
import { isSaleLive } from "@/lib/sale";

export function SaleStrip() {
  if (!isSaleLive()) return null;
  return (
    <div role="region" aria-label="Early Black Friday sale" className="bg-background border-b border-sale text-foreground">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest">
        <span className="text-sale">EARLY BLACK FRIDAY SALE</span>
        <span className="text-primary">15% OFF STOREWIDE</span>
        <span>LIVE NOW • ENDS NOV 30</span>
        <span className="hidden md:inline text-muted-foreground">AUTOMATIC AT CHECKOUT • NO CODE NEEDED</span>
        <Link to="/" hash="shop" className="text-primary underline underline-offset-4">SHOP THE SALE</Link>
      </div>
    </div>
  );
}
