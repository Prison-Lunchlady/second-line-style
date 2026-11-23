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

// Verified: Printful 50/50 synced including all 104 new variants; all eight Shopify products active and published to Online Store.
export const fulfilledEditions = new Set<string>(["504-tee", "504-hoodie", "318-tee", "318-hoodie", "337-tee", "337-hoodie", "985-tee", "985-hoodie"]);
export const editionVariants: Record<string, Record<string, { id: string; price: number }>> = {
  "504-tee": {
    "Black / S": { id: "54604685541670", price: 29 },
    "Black / M": { id: "54604685574438", price: 29 },
    "Black / L": { id: "54604685607206", price: 29 },
    "Black / XL": { id: "54604685639974", price: 29 },
    "Black / 2XL": { id: "54604685672742", price: 30 },
    "Black / 3XL": { id: "54604685705510", price: 32 },
    "Black / 4XL": { id: "54604685738278", price: 36 },
    "Black / 5XL": { id: "54604685771046", price: 36 },
    "White / S": { id: "54604685803814", price: 29 },
    "White / M": { id: "54604685836582", price: 29 },
    "White / L": { id: "54604685869350", price: 29 },
    "White / XL": { id: "54604685902118", price: 29 },
    "White / 2XL": { id: "54604685934886", price: 30 },
    "White / 3XL": { id: "54604685967654", price: 32 },
    "White / 4XL": { id: "54604686000422", price: 36 },
    "White / 5XL": { id: "54604686033190", price: 36 },
  },
  "504-hoodie": {
    "Black / S": { id: "54604686065958", price: 54 },
    "Black / M": { id: "54604686098726", price: 54 },
    "Black / L": { id: "54604686131494", price: 54 },
    "Black / XL": { id: "54604686164262", price: 54 },
    "Black / 2XL": { id: "54604686197030", price: 58 },
    "White / S": { id: "54604686229798", price: 54 },
    "White / M": { id: "54604686262566", price: 54 },
    "White / L": { id: "54604686295334", price: 54 },
    "White / XL": { id: "54604686328102", price: 54 },
    "White / 2XL": { id: "54604686360870", price: 58 },
  },
  "318-tee": {
    "Black / S": { id: "54604686393638", price: 29 },
    "Black / M": { id: "54604686426406", price: 29 },
    "Black / L": { id: "54604686459174", price: 29 },
    "Black / XL": { id: "54604686491942", price: 29 },
    "Black / 2XL": { id: "54604686524710", price: 30 },
    "Black / 3XL": { id: "54604686557478", price: 32 },
    "Black / 4XL": { id: "54604686590246", price: 36 },
    "Black / 5XL": { id: "54604686623014", price: 36 },
    "White / S": { id: "54604686655782", price: 29 },
    "White / M": { id: "54604686688550", price: 29 },
    "White / L": { id: "54604686721318", price: 29 },
    "White / XL": { id: "54604686754086", price: 29 },
    "White / 2XL": { id: "54604686786854", price: 30 },
    "White / 3XL": { id: "54604686819622", price: 32 },
    "White / 4XL": { id: "54604686852390", price: 36 },
    "White / 5XL": { id: "54604686885158", price: 36 },
  },
  "318-hoodie": {
    "Black / S": { id: "54604686917926", price: 54 },
    "Black / M": { id: "54604686950694", price: 54 },
    "Black / L": { id: "54604686983462", price: 54 },
    "Black / XL": { id: "54604687016230", price: 54 },
    "Black / 2XL": { id: "54604687048998", price: 58 },
    "White / S": { id: "54604687081766", price: 54 },
    "White / M": { id: "54604687114534", price: 54 },
    "White / L": { id: "54604687147302", price: 54 },
    "White / XL": { id: "54604687180070", price: 54 },
    "White / 2XL": { id: "54604687212838", price: 58 },
  },
  "337-tee": {
    "Black / S": { id: "54604687245606", price: 29 },
    "Black / M": { id: "54604687278374", price: 29 },
    "Black / L": { id: "54604687311142", price: 29 },
    "Black / XL": { id: "54604687343910", price: 29 },
    "Black / 2XL": { id: "54604687376678", price: 30 },
    "Black / 3XL": { id: "54604687409446", price: 32 },
    "Black / 4XL": { id: "54604687442214", price: 36 },
    "Black / 5XL": { id: "54604687474982", price: 36 },
    "White / S": { id: "54604687507750", price: 29 },
    "White / M": { id: "54604687540518", price: 29 },
    "White / L": { id: "54604687573286", price: 29 },
    "White / XL": { id: "54604687606054", price: 29 },
    "White / 2XL": { id: "54604687638822", price: 30 },
    "White / 3XL": { id: "54604687671590", price: 32 },
    "White / 4XL": { id: "54604687704358", price: 36 },
    "White / 5XL": { id: "54604687737126", price: 36 },
  },
  "337-hoodie": {
    "Black / S": { id: "54604688752934", price: 54 },
    "Black / M": { id: "54604688785702", price: 54 },
    "Black / L": { id: "54604688818470", price: 54 },
    "Black / XL": { id: "54604688851238", price: 54 },
    "Black / 2XL": { id: "54604688884006", price: 58 },
    "White / S": { id: "54604688916774", price: 54 },
    "White / M": { id: "54604688949542", price: 54 },
    "White / L": { id: "54604688982310", price: 54 },
    "White / XL": { id: "54604689015078", price: 54 },
    "White / 2XL": { id: "54604689047846", price: 58 },
  },
  "985-tee": {
    "Black / S": { id: "54604689080614", price: 29 },
    "Black / M": { id: "54604689113382", price: 29 },
    "Black / L": { id: "54604689146150", price: 29 },
    "Black / XL": { id: "54604689178918", price: 29 },
    "Black / 2XL": { id: "54604689211686", price: 30 },
    "Black / 3XL": { id: "54604689244454", price: 32 },
    "Black / 4XL": { id: "54604689277222", price: 36 },
    "Black / 5XL": { id: "54604689309990", price: 36 },
    "White / S": { id: "54604689342758", price: 29 },
    "White / M": { id: "54604689375526", price: 29 },
    "White / L": { id: "54604689408294", price: 29 },
    "White / XL": { id: "54604689441062", price: 29 },
    "White / 2XL": { id: "54604689473830", price: 30 },
    "White / 3XL": { id: "54604689506598", price: 32 },
    "White / 4XL": { id: "54604689539366", price: 36 },
    "White / 5XL": { id: "54604689572134", price: 36 },
  },
  "985-hoodie": {
    "Black / S": { id: "54604689604902", price: 54 },
    "Black / M": { id: "54604689637670", price: 54 },
    "Black / L": { id: "54604689670438", price: 54 },
    "Black / XL": { id: "54604689703206", price: 54 },
    "Black / 2XL": { id: "54604689735974", price: 58 },
    "White / S": { id: "54604689768742", price: 54 },
    "White / M": { id: "54604689801510", price: 54 },
    "White / L": { id: "54604689834278", price: 54 },
    "White / XL": { id: "54604689867046", price: 54 },
    "White / 2XL": { id: "54604689899814", price: 58 },
  },
};
