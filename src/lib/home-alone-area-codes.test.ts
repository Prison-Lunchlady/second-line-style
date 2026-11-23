import { describe, test } from "node:test";
import assert from "node:assert/strict";
import fallProducts from "./fall-products.json";
import {
  editionVariants,
  getHomeAloneEditionName,
  getHomeAloneGarment,
  HOME_ALONE_EDITIONS,
  HOME_ALONE_PRODUCTS,
} from "./home-alone-area-codes";
import { homeAlonePermanentRedirect } from "./home-alone-redirect";

describe("Home Alone in the Boot storefront routes", () => {
  test("recognizes both new product slugs", () => {
    assert.equal(getHomeAloneGarment("home-alone-in-the-boot-tee"), "tee");
    assert.equal(getHomeAloneGarment("home-alone-in-the-boot-hoodie"), "hoodie");
    assert.equal(getHomeAloneGarment("home-alone-in-baton-rouge-tee"), null);
  });

  test("uses broad storefront names and exact edition-specific cart names", () => {
    assert.equal(HOME_ALONE_PRODUCTS.tee.name, "Home Alone in the Boot Tee");
    assert.equal(HOME_ALONE_PRODUCTS.hoodie.name, "Home Alone in the Boot Hoodie");
    assert.equal(getHomeAloneEditionName("225", "tee"), "Home Alone in Baton Rouge Tee");
    assert.equal(getHomeAloneEditionName("504", "hoodie"), "Home Alone in New Orleans Hoodie");
    assert.equal(getHomeAloneEditionName("318", "tee"), "Home Alone in the 318 Tee");
    assert.equal(getHomeAloneEditionName("337", "hoodie"), "Home Alone in the 337 Hoodie");
    assert.equal(getHomeAloneEditionName("985", "tee"), "Home Alone in the 985 Tee");
  });

  test("keeps all five area codes", () => {
    assert.deepEqual(HOME_ALONE_EDITIONS.map((edition) => edition.code), ["225", "504", "318", "337", "985"]);
  });

  test("old tee URL redirects permanently with every query parameter", () => {
    const response = homeAlonePermanentRedirect(
      new Request("https://second-line-clothing.com/product/home-alone-in-baton-rouge-tee?area=337&variant=White%20%2F%202XL&utm_source=newsletter"),
      "tee",
    );
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "/product/home-alone-in-the-boot-tee?area=337&variant=White%20%2F%202XL&utm_source=newsletter");
  });

  test("old hoodie URL redirects permanently without inventing a query string", () => {
    const response = homeAlonePermanentRedirect(
      new Request("https://second-line-clothing.com/product/home-alone-in-baton-rouge-hoodie"),
      "hoodie",
    );
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), "/product/home-alone-in-the-boot-hoodie");
  });
});

describe("Home Alone variant preservation", () => {
  test("retains 130 unique variant IDs across both products and all five editions", () => {
    const baseProducts = fallProducts.filter((product) => product.name === HOME_ALONE_PRODUCTS.tee.name || product.name === HOME_ALONE_PRODUCTS.hoodie.name);
    assert.equal(baseProducts.length, 2);
    const baseIds = baseProducts.flatMap((product) => product.variants.map((variant) => variant.id));
    const alternateIds = Object.values(editionVariants).flatMap((variants) => Object.values(variants).map((variant) => variant.id));
    const allIds = [...baseIds, ...alternateIds];
    assert.equal(baseIds.length, 26);
    assert.equal(alternateIds.length, 104);
    assert.equal(allIds.length, 130);
    assert.equal(new Set(allIds).size, 130);
  });
});
