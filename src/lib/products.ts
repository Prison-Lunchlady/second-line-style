import nukeMockupAsset from "@/assets/nuke_mockup.png.asset.json";
import nukeBlackAsset from "@/assets/nuke_black.png.asset.json";
import nukeGreenAsset from "@/assets/nuke_green.png.asset.json";
import cortanaBlackAsset from "@/assets/cortana_black.png.asset.json";
import cortanaNavyAsset from "@/assets/cortana_navy.png.asset.json";
import duffyMockupAsset from "@/assets/duffy_mockup.png.asset.json";
import brccMockupAsset from "@/assets/brcc_dropout_mockup.png.asset.json";
import straitjacketMockupAsset from "@/assets/strait_jacket_mockup.png.asset.json";
import carlottaMockupAsset from "@/assets/carlotta_mockup.png.asset.json";
import carlottaGreyAsset from "@/assets/carlotta_grey.png.asset.json";
import carlottaSandAsset from "@/assets/carlotta_sand.png.asset.json";
import barrySealMockupAsset from "@/assets/barry_seal_mockup.png.asset.json";
import barrySealGreyAsset from "@/assets/barry_seal_grey.png.asset.json";
import barrySealBlackAsset from "@/assets/barry_seal_black.png.asset.json";
import swampPatrolAsset from "@/assets/swamp_patrol_unit_mockup.png.asset.json";
import swampPatrolWhiteAsset from "@/assets/swamp_patrol_unit_white.png.asset.json";
import swampPatrolLimitedAsset from "@/assets/swamp_patrol_unit_limited.png.asset.json";
import redHotSermonAsset from "@/assets/red_hot_sermon_mockup.png.asset.json";
import redHotSermonFrontBackAsset from "@/assets/fafo_red_hot_sermon_front_back.png.asset.json";
import raisingHellBlackFrontAsset from "@/assets/raising_hell_black_front.png.asset.json";
import raisingHellBlackBackAsset from "@/assets/raising_hell_black_back.png.asset.json";
import raisingHellGreyFrontAsset from "@/assets/raising_hell_grey_front.jpg.asset.json";
import raisingHellGreyBackAsset from "@/assets/raising_hell_grey_back.jpg.asset.json";
import brWoodsAsset from "@/assets/br_woods_tee.png.asset.json";
import pierBlackAsset from "@/assets/pier_black.png.asset.json";
import pierGreyAsset from "@/assets/pier_grey.png.asset.json";
import knucklesFrontAsset from "@/assets/knuckles_front_model.png.asset.json";
import knucklesBackAsset from "@/assets/knuckles_back_model.png.asset.json";
import cernFrontAsset from "@/assets/cern_front_model.png.asset.json";
import cernBackAsset from "@/assets/cern_back_model.png.asset.json";
import lsuLowlifeFrontAsset from "@/assets/lsu_lowlife_front_model.png.asset.json";
import lsuLowlifeBackAsset from "@/assets/lsu_lowlife_back_model.png.asset.json";

const swampPatrolUnit = swampPatrolAsset.url;
const swampPatrolUnitWhite = swampPatrolWhiteAsset.url;
const swampPatrolLimited = swampPatrolLimitedAsset.url;
const nukeMockup = nukeMockupAsset.url;
const nukeBlack = nukeBlackAsset.url;
const nukeGreen = nukeGreenAsset.url;
const cortanaBlack = cortanaBlackAsset.url;
const cortanaNavy = cortanaNavyAsset.url;
const duffyMockup = duffyMockupAsset.url;
const brccMockup = brccMockupAsset.url;
const straitjacketMockup = straitjacketMockupAsset.url;
const carlottaMockup = carlottaMockupAsset.url;
const carlottaGrey = carlottaGreyAsset.url;
const carlottaSand = carlottaSandAsset.url;
const barrySealMockup = barrySealMockupAsset.url;
const barrySealGrey = barrySealGreyAsset.url;
const barrySealBlack = barrySealBlackAsset.url;
const redHotSermon = redHotSermonAsset.url;
const redHotSermonFrontBack = redHotSermonFrontBackAsset.url;
const raisingHellBlackFront = raisingHellBlackFrontAsset.url;
const raisingHellBlackBack = raisingHellBlackBackAsset.url;
const raisingHellGreyFront = raisingHellGreyFrontAsset.url;
const raisingHellGreyBack = raisingHellGreyBackAsset.url;
const brWoods = brWoodsAsset.url;
const pierBlack = pierBlackAsset.url;
const pierGrey = pierGreyAsset.url;
const knucklesFront = knucklesFrontAsset.url;
const knucklesBack = knucklesBackAsset.url;
const cernFront = cernFrontAsset.url;
const cernBack = cernBackAsset.url;
const lsuLowlifeFront = lsuLowlifeFrontAsset.url;
const lsuLowlifeBack = lsuLowlifeBackAsset.url;

export type Variant = { label: string; id: string; image: string; back?: string };
export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  variants: Variant[];
  coverImage?: string;
  availableUntil?: number;
  sizeGuideImage?: string;
  collection?: "extras";
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
    name: "LSU Lowlife Tee", price: 30, image: lsuLowlifeFront,
    description: "Some people clean up for game day. Some of us show up exactly how we are.\n\nThe  Lowlife Tee was made for the ones raised on Louisiana heat, Saturday night chaos, loud tailgates, bad decisions, and stories that somehow get better every year. Purple and gold may run through the city, but this one is for the people who never needed permission to belong.\n\nWear it like a warning. Wear it like a badge. Either way, they already know where you're from.",
    variants: [
      { label: "S", id: "53610195058982", image: lsuLowlifeFront, back: lsuLowlifeBack },
      { label: "M", id: "53610195091750", image: lsuLowlifeFront, back: lsuLowlifeBack },
      { label: "L", id: "53610195124518", image: lsuLowlifeFront, back: lsuLowlifeBack },
      { label: "XL", id: "53610195157286", image: lsuLowlifeFront, back: lsuLowlifeBack },
      { label: "2XL", id: "53610195190054", image: lsuLowlifeFront, back: lsuLowlifeBack },
      { label: "3XL", id: "53610195222822", image: lsuLowlifeFront, back: lsuLowlifeBack },
    ],
  },
  {
    name: "The Pier Tee", price: 30, image: pierBlack,
    description: "Before smartphones, before every move got posted, there was The Pier.\n\nFor generations, this abandoned stretch over the Mississippi was Baton Rouge's legendary underground hangout. People went out there to drink, fish, spray paint, explore, and disappear from the rest of the city for a while. It was dangerous, illegal, covered in graffiti, and unforgettable.\n\nBuilt in 1926, The Pier would have turned 100 years old this year.\n\nThis tee is a tribute to the people who climbed out there, crossed the missing panels, left their mark, and turned a forgotten structure into Baton Rouge folklore.\n\nThe Pier is gone.\n\nThe legend isn't.\n\nBR PIER 1926–2020\n\nCollection 001: Baton Rouge\n\nSecond Line Clothing",
    variants: [
      { label: "Black / S", id: "53516081103142", image: pierBlack },
      { label: "Black / M", id: "53516081135910", image: pierBlack },
      { label: "Black / L", id: "53516081168678", image: pierBlack },
      { label: "Black / XL", id: "53516081201446", image: pierBlack },
      { label: "Black / 2XL", id: "53516081234214", image: pierBlack },
      { label: "Black / 3XL", id: "53516081266982", image: pierBlack },
      { label: "Black / 4XL", id: "53516081299750", image: pierBlack },
      { label: "Black / 5XL", id: "53516081332518", image: pierBlack },
      { label: "Sport Grey / S", id: "53516081365286", image: pierGrey },
      { label: "Sport Grey / M", id: "53516081398054", image: pierGrey },
      { label: "Sport Grey / L", id: "53516081430822", image: pierGrey },
      { label: "Sport Grey / XL", id: "53516081463590", image: pierGrey },
      { label: "Sport Grey / 2XL", id: "53516081496358", image: pierGrey },
      { label: "Sport Grey / 3XL", id: "53516081529126", image: pierGrey },
      { label: "Sport Grey / 4XL", id: "53516081561894", image: pierGrey },
      { label: "Sport Grey / 5XL", id: "53516081594662", image: pierGrey },
    ],
  },
  {
    name: "BR Woods Tee", price: 30, image: brWoods,
    description: "Baton Rouge in a wrapper everybody recognizes.\n\nA local remix of a corner-store classic, made for the city that stays loud, moves different, and never needs an introduction.",
    variants: [
      { label: "S", id: "53488951984422", image: brWoods },
      { label: "M", id: "53488952017190", image: brWoods },
      { label: "L", id: "53488952049958", image: brWoods },
      { label: "XL", id: "53488952082726", image: brWoods },
      { label: "2XL", id: "53488952115494", image: brWoods },
      { label: "3XL", id: "53488952148262", image: brWoods },
      { label: "4XL", id: "53488952181030", image: brWoods },
      { label: "5XL", id: "53488952213798", image: brWoods },
    ],
  },
  {
    name: "Raising Hell", price: 28, image: raisingHellBlackBack,
    coverImage: raisingHellBlackBack,
    description: "Raising Hell | Baton Rouge Collection\n\nSome things just make sense if you're from Baton Rouge.\n\nInspired by the city that built icons, started trends, and created a culture all its own, the Raising Hell tee is packed with hometown references without saying a word. From the classic color palette to the unmistakable phrase \"All The Way Dummy,\" this design is a tribute to the people who know exactly where it came from.\n\nPrinted on premium cotton with a bold front graphic and a clean Second Line chest logo, this shirt was made for those who carry Baton Rouge pride wherever they go.\n\nIf you're from the 225, you don't need it explained. You already get it.",
    variants: [
      { label: "Black / S", id: "53424231153958", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / M", id: "53424231186726", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / L", id: "53424231219494", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / XL", id: "53424231252262", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / 2XL", id: "53424231285030", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / 3XL", id: "53424231317798", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / 4XL", id: "53424231350566", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Black / 5XL", id: "53424231383334", image: raisingHellBlackBack, back: raisingHellBlackFront },
      { label: "Sport Grey / S", id: "53424231416102", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / M", id: "53424231448870", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / L", id: "53424231481638", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / XL", id: "53424231514406", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / 2XL", id: "53424231547174", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / 3XL", id: "53424231579942", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / 4XL", id: "53424231612710", image: raisingHellGreyBack, back: raisingHellGreyFront },
      { label: "Sport Grey / 5XL", id: "53424231645478", image: raisingHellGreyBack, back: raisingHellGreyFront },
    ],
  },
  {
    name: "Louisiana Lowlife Tee", price: 30, image: lowlifeMockup,
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
    name: "FAFO Red Hot Sermon Incoming Tee", price: 25, image: redHotSermon,
    sizeGuideImage: redHotSermonFrontBack,
    description: "Some headlines deserve a commemorative T-shirt. Inspired by one of the wildest Louisiana news stories in recent memory, the FAFO – Red Hot Sermon Incoming tee turns an unforgettable moment into a vintage fight poster worthy of the main event. Premium heather gray unisex tee with a large front graphic and small Second Line Clothing logo on the upper back. Designed in Louisiana.",
    variants: [
      { label: "Sport Grey / S", id: "53395387154726", image: redHotSermon },
      { label: "Sport Grey / M", id: "53395387187494", image: redHotSermon },
      { label: "Sport Grey / L", id: "53395387220262", image: redHotSermon },
      { label: "Sport Grey / XL", id: "53395387253030", image: redHotSermon },
      { label: "Sport Grey / 2XL", id: "53395387285798", image: redHotSermon },
      { label: "Sport Grey / 3XL", id: "53395387318566", image: redHotSermon },
      { label: "Sport Grey / 4XL", id: "53395387351334", image: redHotSermon },
      { label: "Sport Grey / 5XL", id: "53395387384102", image: redHotSermon },
    ],
  },
  {
    name: "Play Stupid Games, Win Stupid Prizes | Swamp Patrol Unit Tee", price: 30, image: swampPatrolUnit,
    coverImage: swampPatrolLimited,
    availableUntil: new Date(2026, 6, 1, 0, 0, 0).getTime(),
    description: "Some lessons are learned the hard way. A Louisiana-inspired graphic tee featuring a bayou chase gone wrong.",
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
    name: "LOWLIFE Purple & Gold Tee", price: 30, image: lowlifePurpleGold,
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
    name: "Women's Lowlife Crop Top", price: 40, image: womensCropMockup,
    variants: [
      { label: "XS", id: "53251619127590", image: womensCropMockup },
      { label: "S", id: "53251619160358", image: womensCropMockup },
      { label: "M", id: "53251619193126", image: womensCropMockup },
      { label: "L", id: "53251619225894", image: womensCropMockup },
      { label: "XL", id: "53251619258662", image: womensCropMockup },
    ],
  },
  {
    name: "Straitjacket Tee", price: 38, image: straitjacketMockup,
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
    name: "BRCC Dropout Tee", price: 30, image: brccMockup,
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
    name: "Duffy Circa 2008 Tee", price: 30, image: duffyMockup,
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
    name: "NOLA Nuke Tee", price: 30, image: nukeBlack,
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
    name: "Cortana Mall Tee", price: 30, image: cortanaBlack,
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
    name: "Carlotta St. Block Party Tee", price: 30, image: carlottaMockup,
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
    name: "Barry Seal Flight School Tee", price: 30, image: barrySealGrey,
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
    name: "Barry Seal Flight School Black Tee", price: 30, image: barrySealBlack,
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

const ALL_PRODUCTS: Product[] = RAW.map((p) => ({ ...p, slug: slugify(p.name) }));

export function isProductAvailable(p: Product, now: number = Date.now()): boolean {
  return p.availableUntil == null || now < p.availableUntil;
}

export const PRODUCTS: Product[] = ALL_PRODUCTS.filter((p) => isProductAvailable(p));

export function getProductBySlug(slug: string): Product | undefined {
  return [...PRODUCTS, ...EXTRAS_PRODUCTS].find((p) => p.slug === slug);
}

/* ---------------------------------------------------------------------------
 * EXTRAS COLLECTION
 * ---------------------------------------------------------------------------
 * Products shown on /extras only. They never appear on the homepage, city
 * pages, or Louisiana collections.
 *
 * To add a new Extras product, append an object with this exact shape:
 *
 *   {
 *     name: "My New Tee",                 // slug is generated from this
 *     price: 30,                          // USD, number only
 *     image: myTeeAsset.url,              // default/primary display image
 *     coverImage: myTeeAsset.url,         // optional card cover image
 *     description: "Long product copy...",
 *     collection: "extras",
 *     variants: [
 *       // `id` is the Printify/Shopify variant id used by cart + checkout
 *       { label: "Black / S", id: "1234567890", image: myTeeAsset.url },
 *       { label: "Black / M", id: "1234567891", image: myTeeAsset.url },
 *     ],
 *   }
 *
 * 1. Add the image asset import at the top of this file (same as the others).
 * 2. Paste the object into EXTRAS_RAW below.
 * That's it — the /extras grid, product detail page, and checkout all work.
 * ------------------------------------------------------------------------- */
const EXTRAS_RAW: Omit<Product, "slug">[] = [];

export const EXTRAS_PRODUCTS: Product[] = EXTRAS_RAW.map((p) => ({
  ...p,
  slug: slugify(p.name),
})).filter((p) => isProductAvailable(p));