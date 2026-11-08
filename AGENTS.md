# Architecture
- Keep shipping eligibility arithmetic in the browser-safe shipping module, using integer cents; the local cart cannot observe Shopify checkout discounts.
- Render the session-scoped shipping dialog only on the homepage using Radix focus management; preserve Shopify checkout links and cart storage.