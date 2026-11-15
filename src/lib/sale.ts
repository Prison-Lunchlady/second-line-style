// Shopify automatic discount gid://shopify/DiscountAutomaticNode/1680774562086 (site displays it; Shopify applies it).
export const SALE_START_MS = Date.UTC(2026, 10, 15, 6, 0, 0); // Nov 15 2026 00:00 America/Chicago
export const SALE_END_MS = Date.UTC(2026, 11, 1, 5, 59, 59, 999); // Nov 30 2026 23:59:59 America/Chicago
export const SALE_PERCENT = 15;

export function isSaleLive(now: number = Date.now()) {
  return now >= SALE_START_MS && now <= SALE_END_MS;
}
