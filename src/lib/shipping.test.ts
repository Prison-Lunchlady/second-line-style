import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { shippingProgress } from "./shipping";

describe("US standard free shipping threshold", () => {
  test("$149.99 still requires one cent", () => {
    const result = shippingProgress([{ price: 149.99, qty: 1 }]);
    assert.equal(result.subtotalCents, 14999);
    assert.equal(result.remainingCents, 1);
    assert.equal(result.unlocked, false);
    assert.ok(result.percent < 100);
  });
  test("$150 qualifies", () => {
    assert.deepEqual(shippingProgress([{ price: 30, qty: 5 }]), {
      subtotalCents: 15000, remainingCents: 0, unlocked: true, percent: 100,
    });
  });
  test("amounts above $150 have capped progress", () => {
    const result = shippingProgress([{ price: 54, qty: 3 }]);
    assert.equal(result.remainingCents, 0);
    assert.equal(result.unlocked, true);
    assert.equal(result.percent, 100);
  });
  test("sum merchandise prices in cents rather than floating dollars", () => {
    assert.equal(shippingProgress([{ price: 29.99, qty: 5 }, { price: 0.05, qty: 1 }]).subtotalCents, 15000);
  });
});