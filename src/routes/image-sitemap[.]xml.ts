import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS, EXTRAS_PRODUCTS, HAT_PRODUCTS } from "@/lib/products";
import { COMMUNITY_PHOTOS } from "@/lib/community";

const BASE_URL = "https://second-line-clothing.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsolute(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function toCrawlableImageUrl(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed || /^data:/i.test(trimmed) || trimmed.includes("data:image")) return null;

  const absoluteUrl = toAbsolute(trimmed);
  if (!/^https:\/\//i.test(absoluteUrl) || absoluteUrl.includes("data:image")) return null;
  if (!/\.(?:avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i.test(absoluteUrl)) return null;

  return absoluteUrl;
}

export const Route = createFileRoute("/image-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = [...PRODUCTS, ...EXTRAS_PRODUCTS, ...HAT_PRODUCTS].map((p) => {
          const images = Array.from(
            new Set([p.image, p.coverImage, ...p.variants.flatMap((v) => [v.image, v.back])].filter(Boolean) as string[]),
          )
            .map(toCrawlableImageUrl)
            .filter(Boolean) as string[];
          if (images.length === 0) return "";
          const imageTags = images
            .map((img) => {
              const loc = escapeXml(img);
              const title = escapeXml(p.name);
              const caption = escapeXml(p.description ?? `${p.name} by Second Line Clothing`);
              return [
                `    <image:image>`,
                `      <image:loc>${loc}</image:loc>`,
                `      <image:title>${title}</image:title>`,
                `      <image:caption>${caption}</image:caption>`,
                `    </image:image>`,
              ].join("\n");
            })
            .join("\n");
          return [
            `  <url>`,
            `    <loc>${BASE_URL}/product/${p.slug}</loc>`,
            imageTags,
            `  </url>`,
          ].join("\n");
        }).filter(Boolean);

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `<url><loc>${BASE_URL}/</loc>${COMMUNITY_PHOTOS.map(photo => `<image:image><image:loc>${BASE_URL}/media/${photo.file}</image:loc></image:image>`).join("")}</url>`,
          `<url><loc>${BASE_URL}/our-story</loc><image:image><image:loc>${BASE_URL}/media/founder-introduction.jpg</image:loc></image:image></url>`,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
