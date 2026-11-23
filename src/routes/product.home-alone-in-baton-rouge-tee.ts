import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { homeAlonePermanentRedirect } from "@/lib/home-alone-redirect";

export const Route = createFileRoute("/product/home-alone-in-baton-rouge-tee")({
  server: {
    handlers: {
      GET: async ({ request }) => homeAlonePermanentRedirect(request, "tee"),
      HEAD: async ({ request }) => homeAlonePermanentRedirect(request, "tee"),
    },
  },
});
