import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import slMonogramWhite from "@/assets/SL_logo_white.png";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { openCart, totalItems } = useCart();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: "72px", width: "auto" }} />
        </Link>
        <ul className="flex items-center gap-6 sm:gap-8 text-sm font-semibold tracking-widest uppercase">
          <li><Link to="/" hash="shop" className="hover:text-primary transition-colors">Shop</Link></li>
          <li><Link to="/extras" className="hover:text-primary transition-colors">Extras</Link></li>
          <li><Link to="/" hash="about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link to="/" hash="contact" className="hover:text-primary transition-colors">Contact</Link></li>
          <li>
            <button onClick={openCart} aria-label={`Open cart${totalItems > 0 ? ` (${totalItems} items)` : ""}`} className="relative hover:text-primary transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}