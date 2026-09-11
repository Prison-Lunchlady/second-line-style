import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BRAND_VIDEO } from "@/lib/community";
import { SITE_ORIGIN } from "@/lib/seo";

export const Route = createFileRoute("/video-sitemap.xml")({
  server: { handlers: { GET: async () => new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url><loc>${SITE_ORIGIN}/our-story</loc><video:video>
    <video:thumbnail_loc>${BRAND_VIDEO.thumbnailUrl[0]}</video:thumbnail_loc>
    <video:title>${BRAND_VIDEO.name}</video:title>
    <video:description>${BRAND_VIDEO.description}</video:description>
    <video:content_loc>${BRAND_VIDEO.contentUrl}</video:content_loc>
    <video:duration>87</video:duration>
    <video:publication_date>${BRAND_VIDEO.uploadDate}</video:publication_date>
  </video:video></url>
</urlset>`, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } }
  ) } },
});
