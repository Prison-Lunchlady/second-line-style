// Force TypeScript to load the `declare module '@tanstack/router-core'`
// augmentation from start-client-core so that `server: { handlers: {...} }`
// is recognized on createFileRoute() options in server route files.
import "@tanstack/start-client-core/dist/esm/serverRoute.js";