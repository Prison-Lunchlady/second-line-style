import { ShoppingCart, X, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { cart, cartOpen, closeCart, removeFromCart, updateQty } = useCart();
  if (!cartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const checkoutUrl = cart.length > 0
    ? `https://second-line-clothing.myshopify.com/cart/${cart.map((i) => `${i.id}:${i.qty}`).join(",")}`
    : "#";

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/60" onClick={closeCart} />
      <div className="relative w-full max-w-md bg-background border-l border-border flex flex-col h-full shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-lg font-black uppercase tracking-widest text-white">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-muted-foreground hover:text-white transition-colors">
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
                    <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="w-6 h-6 bg-card border border-border rounded text-white text-sm hover:border-primary">-</button>
                    <span className="text-white text-sm w-6 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 bg-card border border-border rounded text-white text-sm hover:border-primary">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name} from cart`} className="text-muted-foreground hover:text-red-400 transition-colors flex-shrink-0">
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
            <button onClick={closeCart} className="block w-full py-3 border border-border text-white font-bold text-sm tracking-widest uppercase rounded-sm hover:border-primary transition-all text-center">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}