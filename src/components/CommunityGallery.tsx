import { Link } from "@tanstack/react-router";
import { COMMUNITY_PHOTOS } from "@/lib/community";

export function CommunityGallery() {
  return <section id="community" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 scroll-mt-24">
    <div className="max-w-2xl mb-8">
      <p className="text-xs uppercase tracking-widest text-primary font-bold">Worn & shared</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-black">SECOND LINE IN THE WILD</h2>
      <p className="mt-4 text-muted-foreground">Our Louisiana graphics, worn and shared by the people who make the brand part of their day. Explore the shirts behind these community photos.</p>
    </div>
    <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 pb-4">
      {COMMUNITY_PHOTOS.map(photo => <figure key={photo.file} className="min-w-0 w-[72%] shrink-0 snap-start sm:w-auto">
        <a href={`/media/${photo.file}`} aria-label={`View full photo: ${photo.alt}`} className="block rounded-sm overflow-hidden bg-card border border-border">
          <img src={`/media/${photo.file}`} alt={photo.alt} width="960" height="1700" loading="lazy" decoding="async" className="aspect-[9/16] w-full object-contain" />
        </a>
        <figcaption className="mt-3 text-sm text-muted-foreground">{photo.caption}
          {photo.slug && <Link to="/product/$slug" params={{ slug: photo.slug }} className="block mt-2 text-primary underline underline-offset-4">Shop the design</Link>}
        </figcaption>
      </figure>)}
    </div>
    <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {[{file:"community-barry-seal",title:"Flight School in the wild",text:"A community clip featuring the Barry Seal Flight School tee."},{file:"community-carlotta",title:"The community shares the drop",text:"Carlotta Street and Second Line designs in a community story."}].map(clip => <figure key={clip.file}>
        <video controls playsInline preload="none" poster={`/media/${clip.file}.jpg`} aria-label={clip.title} width="720" height="1280" className="w-full max-h-[520px] aspect-[9/16] bg-black rounded-sm">
          <source src={`/media/${clip.file}.mp4`} type="video/mp4" />
          <a href={`/media/${clip.file}.mp4`}>Watch {clip.title}</a>
        </video>
        <figcaption className="mt-3"><h3 className="font-bold">{clip.title}</h3><p className="text-sm text-muted-foreground mt-1">{clip.text}</p></figcaption>
      </figure>)}
    </div>
  </section>;
}
