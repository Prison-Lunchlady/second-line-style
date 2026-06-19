import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS } from "@/lib/products";

const BASE_URL = "https://secondlineclothing.haiglerdigital.com";

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

export const Route = createFileRoute("/image-sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PRODUCTS.map((p) => {
          const images = Array.from(
            new Set([p.image, p.coverImage, ...p.variants.map((v) => v.image)].filter(Boolean) as string[]),
          );
          const imageTags = images
            .map((img) => {
              const loc = escapeXml(toAbsolute(img));
              const title = escapeXml(p.name);
              const caption = escapeXml(p.description ?? `${p.name} — Louisiana graphic tee by Second Line Clothing`);
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
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
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