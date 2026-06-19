export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  body: string[]; // paragraphs (may include simple markdown-style bold via **)
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "louisiana-culture-through-graphic-tees",
    title: "Louisiana Culture Through Graphic Tees",
    description:
      "How Louisiana graphic tees translate food, music, neighborhoods, and inside jokes into wearable culture you can spot from a block away.",
    date: "2026-06-01",
    readMinutes: 5,
    body: [
      "Louisiana isn't a backdrop. It's a way of moving through the world — the way a brass band can turn a sidewalk into a parade, the way a po-boy order doubles as a personality test, the way every small town has a story bigger than its zip code. A Louisiana graphic tee, done right, doesn't decorate that culture. It carries it.",
      "Graphic apparel works because it compresses meaning. A single image, a phrase, a color choice — and somebody two blocks away nods because they get it. In Louisiana, that shorthand runs deep: the parish you grew up in, the team you scream for, the bayou your uncle still won't talk about. The shirt is the punchline; the wearer is the setup.",
      "At Second Line Clothing we treat every drop like a piece of the larger Louisiana story. Some shirts lean into humor. Some lean into pride. Some lean into the weird, specific lore that only makes sense if you've lived it. All of them are built for people who don't need the joke explained.",
      "If you're new to Louisiana streetwear, start with what you recognize. If you've been here your whole life, look closer — the details are for you.",
    ],
  },
  {
    slug: "why-louisiana-has-its-own-style",
    title: "Why Louisiana Has Its Own Style",
    description:
      "Climate, history, food, and music collide to give Louisiana its own visual vocabulary — and why Louisiana apparel doesn't look like anywhere else.",
    date: "2026-06-05",
    readMinutes: 6,
    body: [
      "Ask ten people what Louisiana style looks like and you'll get ten answers — Mardi Gras beads, fishing camp camo, Sunday best in a second line, a faded LSU tee that's older than the kid wearing it. The point isn't that one of them is right. The point is that all of them are.",
      "Louisiana grew up at the intersection of French, Spanish, African, Caribbean, and Southern American culture, and the wardrobe followed. The climate makes you practical. The food makes you generous. The music makes you loud. The history makes you stubborn. Put all of that on a shirt and you don't get minimalism — you get something with a story.",
      "That's why a Louisiana graphic tee can be funny and serious at the same time. Why a Southern graphic tee from here doesn't feel like a Southern graphic tee from anywhere else. Why Louisiana streetwear has more in common with a neighborhood mural than a runway.",
      "Collection 001 is Baton Rouge inspired. Future collections will pull from across the state — different cities, different towns, different traditions. Same brand, same Louisiana, more of the story.",
    ],
  },
  {
    slug: "the-stories-behind-louisiana-graphic-apparel",
    title: "The Stories Behind Louisiana Graphic Apparel",
    description:
      "Every graphic on a Louisiana tee starts somewhere — a memory, a place, a joke. Here's how we turn local lore into apparel.",
    date: "2026-06-10",
    readMinutes: 5,
    body: [
      "Good graphic apparel earns the shirt. A logo slapped on a blank is decoration; a story printed on a blank is a conversation. Every Second Line Clothing piece starts with a story — usually a small one, often local enough that you have to be from here to catch it on the first look.",
      "We sit with the idea before we draw it. Where does it come from? Who tells it? What does it sound like when somebody tells it wrong? The graphic is built to reward the people who already know, and intrigue the people who don't. If a stranger asks about your shirt, the answer should be worth telling.",
      "That's the bar for Louisiana graphic apparel: it should feel like something you found, not something you bought. The best compliments we get aren't 'cool shirt' — they're 'where'd you hear about that?'",
      "Read more in our Journal as we break down the references behind each drop.",
    ],
  },
  {
    slug: "the-inspiration-behind-second-line-clothing",
    title: "The Inspiration Behind Second Line Clothing",
    description:
      "What a second line really is, why we named a Louisiana apparel brand after it, and how that idea shapes every collection we drop.",
    date: "2026-06-15",
    readMinutes: 6,
    body: [
      "A second line, at its most literal, is the group of people who follow the main line of a New Orleans parade — friends, family, neighbors, strangers who decided this is their parade now. It's participation, not spectatorship. You join, you dance, you carry the moment forward.",
      "We named the brand Second Line Clothing because that's the posture we wanted Louisiana apparel to take. Not standing on the sidelines of culture. Not selling a tourist version. Following the people who actually live here, and turning what they care about into something they can wear.",
      "That's why every collection is intentional. Collection 001 leans Baton Rouge because that's where this started. The next ones will move — different cities, towns, traditions, and the small Louisiana details that don't show up on postcards. Same Louisiana lifestyle brand, deeper bench.",
      "If you're reading this, consider yourself in the second line.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
