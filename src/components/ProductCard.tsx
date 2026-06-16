import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ p }: { p: Product }) {
  const { addToCart } = useCart();
  const [selectedVariantId, setSelectedVariantId] = useState(p.variants[0].id);
  const [added, setAdded] = useState(false);
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
    <article className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors">
      <Link to="/product/$slug" params={{ slug: p.slug }} className="block aspect-[3/4] overflow-hidden" aria-label={`View ${p.name}`}>
        <img src={currentImage} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </Link>
      <div className="p-4 sm:p-5">
        <Link to="/product/$slug" params={{ slug: p.slug }} className="block hover:text-primary transition-colors">
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide leading-tight text-white hover:text-primary">{p.name}</h3>
        </Link>
        <p className="mt-2 text-primary font-bold text-lg">${p.price}</p>
        <select
          value={selectedVariantId}
          onChange={(e) => { setSelectedVariantId(e.target.value); setUserPicked(true); }}
          aria-label={`Select size for ${p.name}`}
          className="mt-3 w-full px-3 py-2 bg-input border border-border rounded-sm text-foreground text-sm focus:outline-none focus:border-primary"
        >
          {p.variants.map((v) => (
            <option key={v.id} value={v.id}>{v.label}</option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className={`mt-3 w-full py-2.5 font-bold text-xs tracking-widest uppercase rounded-sm transition-all ${added ? "bg-green-600 text-white" : "bg-primary text-primary-foreground hover:brightness-110"}`}
        >
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}