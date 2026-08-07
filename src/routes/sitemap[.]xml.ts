import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PRODUCTS, EXTRAS_PRODUCTS } from "@/lib/products";
import { BLOG_POSTS } from "@/lib/blog";
import { CITY_HUBS } from "@/lib/cities";

const BASE_URL = "https://secondlineclothing.haiglerdigital.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/louisiana", changefreq: "monthly", priority: "0.9" },
          { path: "/louisiana-humor", changefreq: "monthly", priority: "0.7" },
          { path: "/louisiana-streetwear", changefreq: "monthly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          { path: "/extras", changefreq: "monthly", priority: "0.5" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...[...PRODUCTS, ...EXTRAS_PRODUCTS].map((p) => ({
            path: `/product/${p.slug}`,
            changefreq: "weekly",
            priority: "0.8",
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly",
            priority: "0.6",
          })),
          ...CITY_HUBS.map((c) => ({
            path: `/${c.slug}`,
            changefreq: "monthly",
            priority: "0.7",
          })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
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