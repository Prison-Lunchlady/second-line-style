import { describe, expect, test } from "bun:test";
import { shippingProgress } from "./shipping";

describe("US standard free shipping threshold", () => {
  test("$149.99 still requires one cent", () => {
    const result = shippingProgress([{ price: 149.99, qty: 1 }]);
    expect(result.subtotalCents).toBe(14999);
    expect(result.remainingCents).toBe(1);
    expect(result.unlocked).toBe(false);
    expect(result.percent).toBeLessThan(100);
  });
  test("$150 qualifies", () => {
    expect(shippingProgress([{ price: 30, qty: 5 }])).toEqual({
      subtotalCents: 15000, remainingCents: 0, unlocked: true, percent: 100,
    });
  });
  test("amounts above $150 have capped progress", () => {
    const result = shippingProgress([{ price: 54, qty: 3 }]);
    expect(result.remainingCents).toBe(0);
    expect(result.unlocked).toBe(true);
    expect(result.percent).toBe(100);
  });
  test("sum merchandise prices in cents rather than floating dollars", () => {
    expect(shippingProgress([{ price: 29.99, qty: 5 }, { price: 0.05, qty: 1 }]).subtotalCents).toBe(15000);
  });
});