import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextValue = {
  cart: CartItem[];
  cartOpen: boolean;
  totalItems: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "slc_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setCart(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart, hydrated]);

  const value = useMemo<CartContextValue>(() => ({
    cart,
    cartOpen,
    totalItems: cart.reduce((s, i) => s + i.qty, 0),
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    addToCart: (item) => {
      setCart((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i);
        return [...prev, item];
      });
      setCartOpen(true);
    },
    removeFromCart: (id) => setCart((prev) => prev.filter((i) => i.id !== id)),
    updateQty: (id, qty) => setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i)),
  }), [cart, cartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}