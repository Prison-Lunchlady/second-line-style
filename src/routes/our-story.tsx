import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CartDrawer } from "@/components/CartDrawer";
import { BRAND_VIDEO } from "@/lib/community";
import { FOUNDER_TRANSCRIPT } from "@/lib/founder-transcript";

const title = "Our Founder’s Story: Louisiana Clothing | Second Line Clothing";
const description = "Watch the founder introduce Second Line Clothing and the Louisiana culture behind the brand, starting with Baton Rouge.";
export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: "https://second-line-clothing.com/our-story" }, { property: "og:type", content: "video.other" }, { property: "og:image", content: BRAND_VIDEO.thumbnailUrl[0] }, { name: "twitter:title", content: title }, { name: "twitter:description", content: description }, { name: "twitter:image", content: BRAND_VIDEO.thumbnailUrl[0] }],
    links: [{ rel: "canonical", href: "https://second-line-clothing.com/our-story" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(BRAND_VIDEO) }],
  }),
  component: Story,
});

function Story() {
  return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><CartDrawer />
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <p className="text-xs uppercase tracking-widest text-primary">From the founder · 1 min 27 sec</p>
      <h1 className="mt-3 mb-6 text-3xl sm:text-5xl font-black">THE STORY BEHIND SECOND LINE</h1>
      <div className="grid md:grid-cols-[minmax(0,380px)_1fr] gap-8 items-center">
        <video controls playsInline preload="metadata" poster="/media/founder-introduction.jpg" width="720" height="1280" aria-label="The founder introduces Second Line Clothing" className="w-full max-h-[650px] aspect-[9/16] bg-black rounded-sm">
          <source src="/media/founder-introduction.mp4" type="video/mp4" />
          <track kind="captions" src="/media/founder-introduction.en.vtt" srcLang="en" label="English" />
          <a href="/media/founder-introduction.mp4">Watch the founder introduction</a>
        </video>
        <div><h2 className="text-2xl font-bold">Louisiana culture. In our own words.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">Brad, the founder and owner of Second Line Clothing, grew up in Baton Rouge. His passion for streetwear became a Louisiana culture project: collections inspired by the people, places, and stories locals remember.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">In this introduction, he shares his plan to visit communities, talk with local people, explore businesses and landmarks, and turn those discoveries into limited clothing collections. Baton Rouge is the starting point.</p>
          <Link to="/" hash="shop" className="inline-block mt-6 bg-primary text-primary-foreground px-6 py-3 font-bold rounded-sm">Shop the Baton Rouge collection</Link>
          <p className="mt-5"><Link to="/about" className="text-primary underline underline-offset-4">More about our Louisiana clothing line</Link></p>
        </div>
      </div>
      <section className="mt-12 max-w-3xl border-t border-border pt-8">
        <h2 className="text-2xl font-bold">Read the video transcript</h2>
        <p className="mt-3 text-sm text-muted-foreground">Brad’s original brand introduction, recorded ahead of the first Baton Rouge drop.</p>
        <p className="mt-5 leading-relaxed text-muted-foreground">{FOUNDER_TRANSCRIPT}</p>
      </section>
    </main><SiteFooter /></div>;
}
