import { SITE_ORIGIN } from "./seo";
import { FOUNDER_TRANSCRIPT } from "./founder-transcript";

export const COMMUNITY_PHOTOS = [
  { file: "barry-seal-shirt-outdoors.webp", alt: "Back of the white Barry Seal Flight School tee worn outside a house", caption: "Barry Seal Flight School, out in the world.", slug: "barry-seal-flight-school-tee" },
  { file: "barry-seal-community-fit.webp", alt: "Community story showing the back graphic on a grey Barry Seal Flight School tee", caption: "A closer look at the Flight School fit.", slug: "barry-seal-flight-school-tee" },
  { file: "carlotta-community-story.webp", alt: "Community post featuring the Carlotta St. Block Party tee and a purple Second Line shirt", caption: "Carlotta Street and Second Line, shared by the community.", slug: "carlotta-st-block-party-tee" },
  { file: "second-line-community-selfie.webp", alt: "Community selfie showing the Second Line Clothing chest logo on a grey shirt", caption: "Second Line in everyday rotation." },
  { file: "barry-seal-community-detail.webp", alt: "Close-up community photo of the Barry Seal Flight School airplane graphic", caption: "The Flight School details, up close.", slug: "barry-seal-flight-school-tee" },
];

export const BRAND_VIDEO = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "@id": `${SITE_ORIGIN}/our-story#video`,
  name: "The story behind Second Line Clothing",
  description: "The founder introduces Second Line Clothing, a Louisiana culture and clothing project beginning with Baton Rouge.",
  thumbnailUrl: [`${SITE_ORIGIN}/media/founder-introduction.jpg`],
  contentUrl: `${SITE_ORIGIN}/media/founder-introduction.mp4`,
  uploadDate: "2026-09-10T22:00:00-05:00",
  duration: "PT1M27S",
  inLanguage: "en",
  transcript: FOUNDER_TRANSCRIPT,
};
