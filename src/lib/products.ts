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
import lowlifeGreyAsset from "@/assets/lowlife_grey_model.png.asset.json";
import carlottaMockup from "@/assets/carlotta_mockup.png";
import carlottaGrey from "@/assets/carlotta_grey.png";
import carlottaSand from "@/assets/carlotta_sand.png";
import barrySealMockup from "@/assets/barry_seal_mockup.png";
import barrySealGrey from "@/assets/barry_seal_grey.png";
import barrySealBlack from "@/assets/barry_seal_black.png";
import swampPatrolAsset from "@/assets/swamp_patrol_unit_mockup.png.asset.json";
import swampPatrolWhiteAsset from "@/assets/swamp_patrol_unit_white.png.asset.json";
import swampPatrolLimitedAsset from "@/assets/swamp_patrol_unit_limited.png.asset.json";

const lowlifePurpleGold = lowlifePurpleGoldAsset.url;
const lowlifeGrey = lowlifeGreyAsset.url;
const swampPatrolUnit = swampPatrolAsset.url;
const swampPatrolUnitWhite = swampPatrolWhiteAsset.url;
const swampPatrolLimited = swampPatrolLimitedAsset.url;

export type Variant = { label: string; id: string; image: string };
export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  variants: Variant[];
  coverImage?: string;
  availableUntil?: number;
};

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[|/]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const RAW: Omit<Product, "slug">[] = [
  {
    name: "Louisiana Lowlife Tee", price: 25, image: lowlifeMockup,
    variants: [
      { label: "Black / S", id: "53342808047910", image: lowlifeMockup },
      { label: "Black / M", id: "53342808080678", image: lowlifeMockup },
      { label: "Black / L", id: "53342808113446", image: lowlifeMockup },
      { label: "Black / XL", id: "53342808146214", image: lowlifeMockup },
      { label: "Black / 2XL", id: "53342808178982", image: lowlifeMockup },
      { label: "Black / 3XL", id: "53342808211750", image: lowlifeMockup },
      { label: "Black / 4XL", id: "53342808244518", image: lowlifeMockup },
      { label: "Black / 5XL", id: "53342808277286", image: lowlifeMockup },
      { label: "Sport Grey / S", id: "53342808310054", image: lowlifeGrey },
      { label: "Sport Grey / M", id: "53342808342822", image: lowlifeGrey },
      { label: "Sport Grey / L", id: "53342808375590", image: lowlifeGrey },
      { label: "Sport Grey / XL", id: "53342808408358", image: lowlifeGrey },
      { label: "Sport Grey / 2XL", id: "53342808441126", image: lowlifeGrey },
      { label: "Sport Grey / 3XL", id: "53342808473894", image: lowlifeGrey },
      { label: "Sport Grey / 4XL", id: "53342808506662", image: lowlifeGrey },
      { label: "Sport Grey / 5XL", id: "53342808539430", image: lowlifeGrey },
    ],
  },
  {
    name: "Play Stupid Games, Win Stupid Prizes | Swamp Patrol Unit Tee", price: 28, image: swampPatrolUnit,
    coverImage: swampPatrolLimited,
    availableUntil: new Date(2026, 6, 1, 0, 0, 0).getTime(),
    description: "Some lessons are learned the hard way. A Louisiana-inspired graphic tee featuring a bayou chase gone wrong — built for boat launches, bait shops, crawfish boils, and anywhere common sense takes a day off.",
    variants: [
      { label: "Graphite Heather / S", id: "53321989259558", image: swampPatrolUnit },
      { label: "Graphite Heather / M", id: "53321989292326", image: swampPatrolUnit },
      { label: "Graphite Heather / L", id: "53321989325094", image: swampPatrolUnit },
      { label: "Graphite Heather / XL", id: "53321989357862", image: swampPatrolUnit },
      { label: "Graphite Heather / 2XL", id: "53321989390630", image: swampPatrolUnit },
      { label: "Graphite Heather / 3XL", id: "53321989423398", image: swampPatrolUnit },
      { label: "White / S", id: "53321989456166", image: swampPatrolUnitWhite },
      { label: "White / M", id: "53321989488934", image: swampPatrolUnitWhite },
      { label: "White / L", id: "53321989521702", image: swampPatrolUnitWhite },
      { label: "White / XL", id: "53321989554470", image: swampPatrolUnitWhite },
      { label: "White / 2XL", id: "53321989587238", image: swampPatrolUnitWhite },
      { label: "White / 3XL", id: "53321989620006", image: swampPatrolUnitWhite },
    ],
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
    ],
  },
  {
    name: "Women's Lowlife Crop Top", price: 30, image: womensCropMockup,
    variants: [
      { label: "XS", id: "53251619127590", image: womensCropMockup },
      { label: "S", id: "53251619160358", image: womensCropMockup },
      { label: "M", id: "53251619193126", image: womensCropMockup },
      { label: "L", id: "53251619225894", image: womensCropMockup },
      { label: "XL", id: "53251619258662", image: womensCropMockup },
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
];

export const PRODUCTS: Product[] = RAW.map((p) => ({ ...p, slug: slugify(p.name) }));

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}