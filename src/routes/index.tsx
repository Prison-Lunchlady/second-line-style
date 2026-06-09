import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, ShoppingCart, X, Trash2 } from "lucide-react";
import { useState } from "react";
import slMonogramWhite from "@/assets/SL_logo_white.png";
import nukeMockup from "@/assets/nuke_mockup.png";
import nukeBlack from "@/assets/nuke_black.png";
import nukeGreen from "@/assets/nuke_green.png";
import cortanaBlack from "@/assets/cortana_black.png";
import cortanaNavy from "@/assets/cortana_navy.png";
import duffyMockup from "@/assets/duffy_mockup.png";
import brccMockup from "@/assets/brcc_dropout_mockup.png";
import straitjacketMockup from "@/assets/strait_jacket_mockup.png";
import womensCropMockup from "@/assets/womens_crop_top_mockup.png";
import lowlifeMockup from "@/assets/lowlife_mockup.png";
import lowlifePurpleGoldAsset from "@/assets/lowlife_purple_gold.png.asset.json";
import carlottaMockup from "@/assets/carlotta_mockup.png";
import carlottaGrey from "@/assets/carlotta_grey.png";
import carlottaSand from "@/assets/carlotta_sand.png";
import barrySealMockup from "@/assets/barry_seal_mockup.png";
import barrySealGrey from "@/assets/barry_seal_grey.png";
import barrySealBlack from "@/assets/barry_seal_black.png";
import swampPatrolAsset from "@/assets/swamp_patrol_unit_mockup.png.asset.json";
import { ImageLightbox } from "@/components/ImageLightbox";

const lowlifePurpleGold = lowlifePurpleGoldAsset.url;
const swampPatrolUnit = swampPatrolAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Second Line Clothing — Born from the streets of Louisiana" },
      { name: "description", content: "New Orleans–inspired streetwear rooted in Louisiana culture and second line tradition. Bold tees, hoodies, and gear." },
      { property: "og:title", content: "Second Line Clothing — Louisiana Streetwear" },
      { property: "og:description", content: "Born from the streets of Louisiana. Streetwear rooted in New Orleans second line culture." },
      { property: "og:url", content: "https://secondlineclothing.haiglerdigital.com/" },
    ],
    links: [
      { rel: "canonical", href: "https://secondlineclothing.haiglerdigital.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: PRODUCTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              offers: {
                "@type": "Offer",
                price: p.price,
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const PRODUCTS = [
  {
    name: "Louisiana Lowlife Tee", price: 28, image: lowlifeMockup,
    variants: [
      { label: "XS", id: "53251612541222", image: lowlifeMockup },
      { label: "S", id: "53251612573990", image: lowlifeMockup },
      { label: "M", id: "53251612606758", image: lowlifeMockup },
      { label: "L", id: "53251612639526", image: lowlifeMockup },
      { label: "XL", id: "53251612672294", image: lowlifeMockup },
      { label: "2XL", id: "53251612705062", image: lowlifeMockup },
      { label: "3XL", id: "53251612737830", image: lowlifeMockup },
      { label: "4XL", id: "53251612770598", image: lowlifeMockup },
      { label: "5XL", id: "53251612803366", image: lowlifeMockup },
    ]
  },
  {
    name: "Play Stupid Games, Win Stupid Prizes | Swamp Patrol Unit Tee", price: 25, image: swampPatrolUnit,
    slug: "swamp-patrol-unit-tee",
  },
  {
    name: "LOWLIFE Purple & Gold Tee", price: 25, image: lowlifePurpleGold,
    variants: [
      { label: "S", id: "53299623461158", image: lowlifePurpleGold },
      { label: "M", id: "53299623493926", image: lowlifePurpleGold },
      { label: "L", id: "53299623526694", image: lowlifePurpleGold },
      { label: "XL", id: "53299623559462", image: lowlifePurpleGold },
      { label: "2XL", id: "53299623592230", image: lowlifePurpleGold },
      { label: "3XL", id: "53299623624998", image: lowlifePurpleGold },
    ]
  },
  {
    name: "Women's Lowlife Crop Top", price: 30, image: womensCropMockup,
    variants: [
      { label: "XS", id: "53251619127590", image: womensCropMockup },
      { label: "S", id: "53251619160358", image: womensCropMockup },
      { label: "M", id: "53251619193126", image: womensCropMockup },
      { label: "L", id: "53251619225894", image: womensCropMockup },
      { label: "XL", id: "53251619258662", image: womensCropMockup },
    ]
  },
  {
    name: "Straitjacket Tee", price: 36, image: straitjacketMockup,
    variants: [
      { label: "XS", id: "53251656548646", image: straitjacketMockup },
      { label: "S", id: "53251656581414", image: straitjacketMockup },
      { label: "M", id: "53251656614182", image: straitjacketMockup },
      { label: "L", id: "53251656646950", image: straitjacketMockup },
      { label: "XL", id: "53251656679718", image: straitjacketMockup },
      { label: "2XL", id: "53251656712486", image: straitjacketMockup },
    ]
  },
  {
    name: "BRCC Dropout Tee", price: 24, image: brccMockup,
    variants: [
      { label: "S", id: "53251669262630", image: brccMockup },
      { label: "M", id: "53251669295398", image: brccMockup },
      { label: "L", id: "53251669328166", image: brccMockup },
      { label: "XL", id: "53251669360934", image: brccMockup },
      { label: "2XL", id: "53251669393702", image: brccMockup },
      { label: "3XL", id: "53251669426470", image: brccMockup },
      { label: "4XL", id: "53251669459238", image: brccMockup },
      { label: "5XL", id: "53251669492006", image: brccMockup },
    ]
  },
  {
    name: "Duffy Circa 2008 Tee", price: 24, image: duffyMockup,
    variants: [
      { label: "S", id: "53251712680230", image: duffyMockup },
      { label: "M", id: "53251712712998", image: duffyMockup },
      { label: "L", id: "53251712745766", image: duffyMockup },
      { label: "XL", id: "53251712778534", image: duffyMockup },
      { label: "2XL", id: "53251712811302", image: duffyMockup },
      { label: "3XL", id: "53251712844070", image: duffyMockup },
      { label: "4XL", id: "53251712876838", image: duffyMockup },
      { label: "5XL", id: "53251712909606", image: duffyMockup },
    ]
  },
  {
    name: "NOLA Nuke Tee", price: 26, image: nukeBlack,
    variants: [
      { label: "Black / S", id: "53251726901542", image: nukeBlack },
      { label: "Black / M", id: "53251726934310", image: nukeBlack },
      { label: "Black / L", id: "53251726967078", image: nukeBlack },
      { label: "Black / XL", id: "53251726999846", image: nukeBlack },
      { label: "Black / 2XL", id: "53251727032614", image: nukeBlack },
      { label: "Black / 3XL", id: "53251727065382", image: nukeBlack },
      { label: "Purple / S", id: "53251727163686", image: nukeMockup },
      { label: "Purple / M", id: "53251727196454", image: nukeMockup },
      { label: "Purple / L", id: "53251727229222", image: nukeMockup },
      { label: "Purple / XL", id: "53251727261990", image: nukeMockup },
      { label: "Purple / 2XL", id: "53251727294758", image: nukeMockup },
      { label: "Purple / 3XL", id: "53251727327526", image: nukeMockup },
      { label: "Turf Green / S", id: "53251727360294", image: nukeGreen },
      { label: "Turf Green / M", id: "53251727393062", image: nukeGreen },
      { label: "Turf Green / L", id: "53251727425830", image: nukeGreen },
      { label: "Turf Green / XL", id: "53251727458598", image: nukeGreen },
      { label: "Turf Green / 2XL", id: "53251727491366", image: nukeGreen },
      { label: "Turf Green / 3XL", id: "53251727524134", image: nukeGreen },
    ]
  },
  {
    name: "Cortana Mall Tee", price: 24, image: cortanaBlack,
    variants: [
      { label: "Black / S", id: "53251740860710", image: cortanaBlack },
      { label: "Black / M", id: "53251740893478", image: cortanaBlack },
      { label: "Black / L", id: "53251740926246", image: cortanaBlack },
      { label: "Black / XL", id: "53251740959014", image: cortanaBlack },
      { label: "Black / 2XL", id: "53251740991782", image: cortanaBlack },
      { label: "Black / 3XL", id: "53251741024550", image: cortanaBlack },
      { label: "Black / 4XL", id: "53251741057318", image: cortanaBlack },
      { label: "Black / 5XL", id: "53251741090086", image: cortanaBlack },
      { label: "Navy / S", id: "53251741122854", image: cortanaNavy },
      { label: "Navy / M", id: "53251741155622", image: cortanaNavy },
      { label: "Navy / L", id: "53251741188390", image: cortanaNavy },
      { label: "Navy / XL", id: "53251741221158", image: cortanaNavy },
      { label: "Navy / 2XL", id: "53251741253926", image: cortanaNavy },
      { label: "Navy / 3XL", id: "53251741286694", image: cortanaNavy },
      { label: "Navy / 4XL", id: "53251741319462", image: cortanaNavy },
      { label: "Navy / 5XL", id: "53251741352230", image: cortanaNavy },
    ]
  },
  {
    name: "Carlotta St. Block Party Tee", price: 28, image: carlottaMockup,
    variants: [
      { label: "Sport Grey / S", id: "53252407230758", image: carlottaGrey },
      { label: "Sport Grey / M", id: "53252407263526", image: carlottaGrey },
      { label: "Sport Grey / L", id: "53252407296294", image: carlottaGrey },
      { label: "Sport Grey / XL", id: "53252407329062", image: carlottaGrey },
      { label: "Sport Grey / 2XL", id: "53252407361830", image: carlottaGrey },
      { label: "Sport Grey / 3XL", id: "53252407394598", image: carlottaGrey },
      { label: "Sport Grey / 4XL", id: "53252407427366", image: carlottaGrey },
      { label: "Sport Grey / 5XL", id: "53252407460134", image: carlottaGrey },
      { label: "Sand / S", id: "53252407492902", image: carlottaSand },
      { label: "Sand / M", id: "53252407525670", image: carlottaSand },
      { label: "Sand / L", id: "53252407558438", image: carlottaSand },
      { label: "Sand / XL", id: "53252407591206", image: carlottaSand },
      { label: "Sand / 2XL", id: "53252407623974", image: carlottaSand },
      { label: "Sand / 3XL", id: "53252407656742", image: carlottaSand },
      { label: "White / S", id: "53252407689510", image: carlottaMockup },
      { label: "White / M", id: "53252407722278", image: carlottaMockup },
      { label: "White / L", id: "53252407755046", image: carlottaMockup },
      { label: "White / XL", id: "53252407787814", image: carlottaMockup },
      { label: "White / 2XL", id: "53252407820582", image: carlottaMockup },
      { label: "White / 3XL", id: "53252407853350", image: carlottaMockup },
      { label: "White / 4XL", id: "53252407886118", image: carlottaMockup },
      { label: "White / 5XL", id: "53252407918886", image: carlottaMockup },
    ]
  },
  {
    name: "Barry Seal Flight School Tee", price: 24, image: barrySealGrey,
    variants: [
      { label: "Sport Grey / S", id: "53264102129958", image: barrySealGrey },
      { label: "Sport Grey / M", id: "53264102162726", image: barrySealGrey },
      { label: "Sport Grey / L", id: "53264102195494", image: barrySealGrey },
      { label: "Sport Grey / XL", id: "53264102228262", image: barrySealGrey },
      { label: "Sport Grey / 2XL", id: "53264102261030", image: barrySealGrey },
      { label: "Sport Grey / 3XL", id: "53264102293798", image: barrySealGrey },
      { label: "Sport Grey / 4XL", id: "53264102326566", image: barrySealGrey },
      { label: "Sport Grey / 5XL", id: "53264102359334", image: barrySealGrey },
      { label: "White / S", id: "53264102392102", image: barrySealMockup },
      { label: "White / M", id: "53264102424870", image: barrySealMockup },
      { label: "White / L", id: "53264102457638", image: barrySealMockup },
      { label: "White / XL", id: "53264102490406", image: barrySealMockup },
      { label: "White / 2XL", id: "53264102523174", image: barrySealMockup },
      { label: "White / 3XL", id: "53264102555942", image: barrySealMockup },
      { label: "White / 4XL", id: "53264102588710", image: barrySealMockup },
      { label: "White / 5XL", id: "53264102621478", image: barrySealMockup },
    ]
  },
  {
    name: "Barry Seal Flight School Black Tee", price: 24, image: barrySealBlack,
    variants: [
      { label: "S", id: "53264108749094", image: barrySealBlack },
      { label: "M", id: "53264108781862", image: barrySealBlack },
      { label: "L", id: "53264108814630", image: barrySealBlack },
      { label: "XL", id: "53264108847398", image: barrySealBlack },
      { label: "2XL", id: "53264108880166", image: barrySealBlack },
      { label: "3XL", id: "53264108912934", image: barrySealBlack },
      { label: "4XL", id: "53264108945702", image: barrySealBlack },
      { label: "5XL", id: "53264108978470", image: barrySealBlack },
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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if ("slug" in p) {
    return (
      <article className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary transition-colors">
        {lightboxOpen && (
          <ImageLightbox src={p.image} alt={p.name} onClose={() => setLightboxOpen(false)} />
        )}
        <div className="aspect-[3/4] overflow-hidden cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
          <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4 sm:p-5">
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide leading-tight text-white">{p.name}</h3>
          <p className="mt-2 text-primary font-bold text-lg">${p.price}</p>
          <Link
            to="/products/$slug"
            params={{ slug: p.slug }}
            className="mt-3 block w-full py-2.5 font-bold text-xs tracking-widest uppercase rounded-sm transition-all bg-primary text-primary-foreground hover:brightness-110 text-center"
          >
            View Product
          </Link>
        </div>
      </article>
    );
  }

  const [selectedVariantId, setSelectedVariantId] = useState(p.variants[0].id);
  const [added, setAdded] = useState(false);

  const selectedVariant = p.variants.find(v => v.id === selectedVariantId) || p.variants[0];
  const currentImage = selectedVariant.image;

  const handleAdd = () => {
    onAddToCart({
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
      {lightboxOpen && (
        <ImageLightbox src={currentImage} alt={p.name} onClose={() => setLightboxOpen(false)} />
      )}
      <div className="aspect-[3/4] overflow-hidden cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
        <img src={currentImage} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-base font-bold uppercase tracking-wide leading-tight text-white">{p.name}</h3>
        <p className="mt-2 text-primary font-bold text-lg">${p.price}</p>
        <select
          value={selectedVariantId}
          onChange={(e) => setSelectedVariantId(e.target.value)}
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
          <button onClick={onClose} aria-label="Close cart" className="text-muted-foreground hover:text-white transition-colors">
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
                <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name} from cart`} className="text-muted-foreground hover:text-red-400 transition-colors flex-shrink-0">
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
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm hover:brightness-110 transition-all text-center">
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
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, item];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id: string, qty: number) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={removeFromCart} onQtyChange={updateQty} />}

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
              <button onClick={() => setCartOpen(true)} aria-label={`Open cart${totalItems > 0 ? ` (${totalItems} items)` : ""}`} className="relative hover:text-primary transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, oklch(0.5 0.2 300 / 0.5), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.82 0.14 85 / 0.35), transparent 55%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-center">
          <h1 className="sr-only">Second Line Clothing — Born from the streets of Louisiana</h1>
          <img src={slMonogramWhite} alt="Second Line Clothing" className="mx-auto w-[85%] sm:w-[600px] h-auto" />
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground italic max-w-xl mx-auto">Born from the streets of Louisiana.</p>
          <a href="#shop" className="inline-block mt-10 px-10 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase rounded-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20">Shop Now</a>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      <section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>THE <span className="text-primary">DROP</span></h2>
          <div className="mt-3 h-0.5 w-24 mx-auto bg-secondary" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => <ProductCard key={p.name} p={p} onAddToCart={addToCart} />)}
        </div>
      </section>

      <section id="about" className="relative border-y border-border bg-card">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 70% 50%, oklch(0.5 0.2 300 / 0.6), transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: "var(--font-display)" }}>THE <span className="text-primary">STORY</span></h2>
          <div className="mt-3 mb-8 h-0.5 w-24 mx-auto bg-secondary" />
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">Second Line Clothing was built on Louisiana culture, memory, and the spirit of the second line. We make gear for people who know where they're from and aren't afraid to show it.</p>
          <p className="mt-6 text-xl sm:text-2xl font-bold text-primary tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Born in Louisiana. Made for the streets.</p>
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
