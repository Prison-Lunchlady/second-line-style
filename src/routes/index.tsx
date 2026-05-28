import { createFileRoute } from "@tanstack/react-router";
import { Instagram, ShoppingCart, X, Trash2 } from "lucide-react";
import { useState } from "react";
import slMonogramWhite from "@/assets/SL_logo_white.png";
import nukeMockup from "@/assets/nuke_mockup.png";
import cortanaMockup from "@/assets/cortana_mockup.png";
import duffyMockup from "@/assets/duffy_mockup.png";
import brccMockup from "@/assets/brcc_dropout_mockup.png";
import straitjacketMockup from "@/assets/strait_jacket_mockup.png";
import womensCropMockup from "@/assets/womens_crop_top_mockup.png";
import lowlifeMockup from "@/assets/lowlife_mockup.png";
import carlottaMockup from "@/assets/carlotta_mockup.png";

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
  {
    name: "Louisiana Lowlife Tee", price: 28, image: lowlifeMockup,
    variants: [
      { label: "XS", id: "53251612541222" }, { label: "S", id: "53251612573990" },
      { label: "M", id: "53251612606758" }, { label: "L", id: "53251612639526" },
      { label: "XL", id: "53251612672294" }, { label: "2XL", id: "53251612705062" },
      { label: "3XL", id: "53251612737830" }, { label: "4XL", id: "53251612770598" },
      { label: "5XL", id: "53251612803366" },
    ]
  },
  {
    name: "Women's Lowlife Crop Top", price: 30, image: womensCropMockup,
    variants: [
      { label: "XS", id: "53251619127590" }, { label: "S", id: "53251619160358" },
      { label: "M", id: "53251619193126" }, { label: "L", id: "53251619225894" },
      { label: "XL", id: "53251619258662" },
    ]
  },
  {
    name: "Straitjacket Tee", price: 36, image: straitjacketMockup,
    variants: [
      { label: "XS", id: "53251656548646" }, { label: "S", id: "53251656581414" },
      { label: "M", id: "53251656614182" }, { label: "L", id: "53251656646950" },
      { label: "XL", id: "53251656679718" }, { label: "2XL", id: "53251656712486" },
    ]
  },
  {
    name: "BRCC Dropout Tee", price: 24, image: brccMockup,
    variants: [
      { label: "S", id: "53251669262630" }, { label: "M", id: "53251669295398" },
      { label: "L", id: "53251669328166" }, { label: "XL", id: "53251669360934" },
      { label: "2XL", id: "53251669393702" }, { label: "3XL", id: "53251669426470" },
      { label: "4XL", id: "53251669459238" }, { label: "5XL", id: "53251669492006" },
    ]
  },
  {
    name: "Duffy Circa 2008 Tee", price: 24, image: duffyMockup,
    variants: [
      { label: "S", id: "53251712680230" }, { label: "M", id: "53251712712998" },
      { label: "L", id: "53251712745766" }, { label: "XL", id: "53251712778534" },
      { label: "2XL", id: "53251712811302" }, { label: "3XL", id: "53251712844070" },
      { label: "4XL", id: "53251712876838" }, { label: "5XL", id: "53251712909606" },
    ]
  },
  {
    name: "NOLA Nuke Tee", price: 26, image: nukeMockup,
    variants: [
      { label: "Black / S", id: "53251726901542" }, { label: "Black / M", id: "53251726934310" },
      { label: "Black / L", id: "53251726967078" }, { label: "Black / XL", id: "53251726999846" },
      { label: "Black / 2XL", id: "53251727032614" }, { label: "Black / 3XL", id: "53251727065382" },
      { label: "Purple / S", id: "53251727163686" }, { label: "Purple / M", id: "53251727196454" },
      { label: "Purple / L", id: "53251727229222" }, { label: "Purple / XL", id: "53251727261990" },
      { label: "Purple / 2XL", id: "53251727294758" }, { label: "Purple / 3XL", id: "53251727327526" },
      { label: "Turf Green / S", id: "53251727360294" }, { label: "Turf Green / M", id: "53251727393062" },
      { label: "Turf Green / L", id: "53251727425830" }, { label: "Turf Green / XL", id: "53251727458598" },
      { label: "Turf Green / 2XL", id: "53251727491366" }, { label: "Turf Green / 3XL", id: "53251727524134" },
    ]
  },
  {
    name: "Cortana Mall Tee", price: 24, image: cortanaMockup,
    variants: [
      { label: "Black / S", id: "53251740860710" }, { label: "Black / M", id: "53251740893478" },
      { label: "Black / L", id: "53251740926246" }, { label: "Black / XL", id: "53251740959014" },
      { label: "Black / 2XL", id: "53251740991782" }, { label: "Black / 3XL", id: "53251741024550" },
      { label: "Black / 4XL", id: "53251741057318" }, { label: "Black / 5XL", id: "53251741090086" },
      { label: "Navy / S", id: "53251741122854" }, { label: "Navy / M", id: "53251741155622" },
      { label: "Navy / L", id: "53251741188390" }, { label: "Navy / XL", id: "53251741221158" },
      { label: "Navy / 2XL", id: "53251741253926" }, { label: "Navy / 3XL", id: "53251741286694" },
      { label: "Navy / 4XL", id: "53251741319462" }, { label: "Navy / 5XL", id: "53251741352230" },
    ]
  },
  {
    name: "Carlotta St. Block Party Tee", price: 28, image: carlottaMockup,
    variants: [
      { label: "Sport Grey / S", id: "53252407230758" }, { label: "Sport Grey / M", id: "53252407263526" },
      { label: "Sport Grey / L", id: "53252407296294" }, { label: "Sport Grey / XL", id: "53252407329062" },
      { label: "Sport Grey / 2XL", id: "53252407361830" }, { label: "Sport Grey / 3XL", id: "53252407394598" },
      { label: "Sport Grey / 4XL", id: "53252407427366" }, { label: "Sport Grey / 5XL", id: "53252407460134" },
      { label: "Sand / S", id: "53252407492902" }, { label: "Sand / M", id: "53252407525670" },
      { label: "Sand / L", id: "53252407558438" }, { label: "Sand / XL", id: "53252407591206" },
      { label: "Sand / 2XL", id: "53252407623974" }, { label: "Sand / 3XL", id: "53252407656742" },
      { label: "White / S", id: "53252407689510" }, { label: "White / M", id: "53252407722278" },
      { label: "White / L", id: "53252407755046" }, { label: "White / XL", id: "53252407787814" },
      { label: "White / 2XL", id: "53252407820582" }, { label: "White / 3XL", id: "53252407853350" },
      { label: "White / 4XL", id: "53252407886118" }, { label: "White / 5XL", id: "53252407918886" },
    ]
  },
];

type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  qty: number;
};

function ProductCard({ p, onAddToCart }: { p: typeof PRODUCTS[0]; onAddToCart: (item: CartItem) => void }) {
  const [selectedVariant, setSelectedVariant] = useState(p.variants[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const selectedLabel = p.variants.find(v => v.id === selectedVariant)?.label || "";

  const handleAdd = () => {
    onAddToCart({
      id: selectedVariant,
      name: p.name,
      variant: selectedLabel,
      price: p.price,
      image: p.image,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors">
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-pointer" onClick={() => setLightboxOpen(false)}>
          <img src={p.image} alt={p.name} className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-primary">&times;</button>
        </div>
      )}
      <div className="aspect-[3/4] overflow-hidden cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide leading-tight text-white">{p.name}</h3>
        <p className="mt-2 text-primary font-bold text-lg">${p.price}</p>
        <select
          value={selectedVariant}
          onChange={(e) => setSelectedVariant(e.target.value)}
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

function CartDrawer({ cart, onClose, onRemove, onQtyChange }: {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onQtyChange: (id: string, qty: number) => void;
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const checkoutUrl = cart.length > 0
    ? `https://second-line-clothing.myshopify.com/cart/${cart.map(i => `${i.id}:${i.qty}`).join(",")}`
    : "#";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md bg-background border-l border-border flex flex-col h-full shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-black uppercase tracking-widest text-white">Your Cart</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
            <ShoppingCart className="h-16 w-16 opacity-30" />
            <p className="text-sm uppercase tracking-widest">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-border pb-4">
                <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded-sm flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold uppercase text-white leading-tight">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.variant}</p>
                  <p className="text-primary font-bold mt-1">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onQtyChange(item.id, Math.max(1, item.qty - 1))} className="w-6 h-6 bg-card border border-border rounded text-white text-sm hover:border-primary">-</button>
                    <span className="text-white text-sm w-6 text-center">{item.qty}</span>
                    <button onClick={() => onQtyChange(item.id, item.qty + 1)} className="w-6 h-6 bg-card border border-border rounded text-white text-sm hover:border-primary">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-muted-foreground hover:text-red-400 transition-colors flex-shrink-0">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="px-6 py-4 border-t border-border space-y-3">
            <div className="flex justify-between text-white font-bold text-lg">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:brightness-110 transition-all text-center"
            >
              Checkout
            </a>
            <button onClick={onClose} className="block w-full py-3 border border-border text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-primary transition-all text-center">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, item];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onQtyChange={updateQty} />}

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '72px', width: 'auto' }} />
          </a>
          <ul className="flex items-center gap-6 sm:gap-8 text-sm font-semibold tracking-widest uppercase">
            <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li>
              <button onClick={() => setCartOpen(true)} className="relative hover:text-primary transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, oklch(0.5 0.2 300 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.82 0.14 85 / 0.35), transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <img src={slMonogramWhite} alt="Second Line Clothing" className="mx-auto w-[85%] sm:w-[600px] h-auto" />
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground italic max-w-xl mx-auto">Born from the streets of Louisiana.</p>
          <a href="#shop" className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">Shop Now</a>
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
            <ProductCard key={p.name} p={p} onAddToCart={addToCart} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative border-y border-border bg-card">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 50%, oklch(0.5 0.2 300 / 0.6), transparent 60%)" }} />
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
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" required placeholder="Name" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <input type="email" required placeholder="Email" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          <textarea required rows={5} placeholder="Message" className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: '48px', width: 'auto' }} />
          </div>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19.6 6.3a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.2H11v13.2a2.8 2.8 0 1 1-2-2.7V9.3a5.9 5.9 0 1 0 5 5.9V9.7a8.3 8.3 0 0 0 5 1.6V8.1a5.5 5.5 0 0 1-1.4-1.8z"/>
              </svg>
            </a>
          </div>
          <p className="text-xs text-muted-foreground tracking-wide">© {new Date().getFullYear()} Second Line Clothing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
