/** Verified Shopify CDN previews. The non-225 editions are not purchasable
 * until their Printful variants have been synced and tested. */
export type HomeAloneAreaCode = "225" | "504" | "318" | "337" | "985";
export type HomeAloneGarment = "tee" | "hoodie";
export type HomeAloneColor = "Black" | "White";
export type HomeAloneAltCode = Exclude<HomeAloneAreaCode, "225">;

export const HOME_ALONE_EDITIONS: Array<{ code: HomeAloneAreaCode; name: string; label: string }> = [
  { code: "225", name: "Baton Rouge", label: "Baton Rouge (225)" },
  { code: "504", name: "New Orleans", label: "New Orleans (504)" },
  { code: "318", name: "the 318", label: "North Louisiana (318)" },
  { code: "337", name: "the 337", label: "Acadiana (337)" },
  { code: "985", name: "the 985", label: "Northshore & Bayou (985)" },
];

export const HOME_ALONE_PREVIEW_IMAGES: Record<HomeAloneAltCode, Record<HomeAloneGarment, Record<HomeAloneColor, string>>> = {
  "318": {
    "tee": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-318-tee-black-front-approved.png?v=1795312720",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-318-tee-white-front-approved.png?v=1795312727"
    },
    "hoodie": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-318-hoodie-black-front-approved.png?v=1795312733",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-318-hoodie-white-front-approved.png?v=1795312739"
    }
  },
  "337": {
    "tee": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-337-tee-black-front-approved.png?v=1795312746",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-337-tee-white-front-approved.png?v=1795312752"
    },
    "hoodie": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-337-hoodie-black-front-approved.png?v=1795312758",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-337-hoodie-white-front-approved.png?v=1795312828"
    }
  },
  "504": {
    "tee": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-504-tee-black-front-approved.png?v=1795312695",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-504-tee-white-front-approved.png?v=1795312701"
    },
    "hoodie": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-504-hoodie-black-front-approved.png?v=1795312707",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-504-hoodie-white-front-approved.png?v=1795312713"
    }
  },
  "985": {
    "tee": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-985-tee-black-front-approved.png?v=1795312770",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-985-tee-white-front-approved.png?v=1795312777"
    },
    "hoodie": {
      "Black": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-985-hoodie-black-front-approved.png?v=1795312784",
      "White": "https://cdn.shopify.com/s/files/1/1019/7594/9606/files/home-alone-985-hoodie-white-front-approved.png?v=1795312791"
    }
  }
};

export function isHomeAloneAreaCode(v: string | null): v is HomeAloneAreaCode {
  return HOME_ALONE_EDITIONS.some((x) => x.code === v);
}

export function getHomeAlonePreview(code: HomeAloneAreaCode, garment: HomeAloneGarment, color: HomeAloneColor): string | null {
  return code === "225" ? null : HOME_ALONE_PREVIEW_IMAGES[code][garment][color];
}
