export const FREE_SHIPPING_THRESHOLD_CENTS = 15_000;
export const SHIPPING_OFFER_SESSION_KEY = "slc_shipping_offer_seen_v1";

export function shippingProgress(items: readonly { price: number; qty: number }[]) {
  const subtotalCents = items.reduce((sum, item) => sum + Math.round(item.price * 100) * item.qty, 0);
  const remainingCents = Math.max(0, FREE_SHIPPING_THRESHOLD_CENTS - subtotalCents);
  return {
    subtotalCents,
    remainingCents,
    unlocked: subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS,
    percent: Math.min(100, Math.max(0, subtotalCents / FREE_SHIPPING_THRESHOLD_CENTS * 100)),
  };
}

export function shippingDollars(cents: number) {
  return (cents / 100).toFixed(2).replace(/\.00$/, "");
}