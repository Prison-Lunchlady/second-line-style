import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { homeAlonePermanentRedirect } from "@/lib/home-alone-redirect";

export const Route = createFileRoute("/product/home-alone-in-baton-rouge-hoodie")({
  server: {
    handlers: {
      GET: async ({ request }) => homeAlonePermanentRedirect(request, "hoodie"),
      HEAD: async ({ request }) => homeAlonePermanentRedirect(request, "hoodie"),
    },
  },
});
