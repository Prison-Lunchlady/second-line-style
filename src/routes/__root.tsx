import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Second Line Clothing" },
      { name: "description", content: "Second Line Clothing - street wear born from the streets of Louisiana" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Second Line Clothing" },
      { property: "og:description", content: "Second Line Clothing - street wear born from the streets of Louisiana" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Second Line Clothing" },
      { name: "twitter:description", content: "Second Line Clothing - street wear born from the streets of Louisiana" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/fkxVQFBXkMMhWxhFGgwVSGQKnIw2/social-images/social-1779918298062-logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/fkxVQFBXkMMhWxhFGgwVSGQKnIw2/social-images/social-1779918298062-logo.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) { if (window.ShopifyBuy.UI) { ShopifyBuyInit(); } else { loadScript(); } } else { loadScript(); }
  function loadScript() { var script = document.createElement('script'); script.async = true; script.src = scriptURL; (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script); script.onload = ShopifyBuyInit; }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({ domain: 'xrxem1-qq.myshopify.com', storefrontAccessToken: 'a211558bd14db7c4ca1349b870789407' });
    var opts = { "product": { "styles": { "button": { ":hover": { "background-color": "#d89500" }, "background-color": "#f0a500", ":focus": { "background-color": "#d89500" } } }, "text": { "button": "Add to cart" } }, "modalProduct": { "contents": { "img": false, "imgWithCarousel": true, "button": false, "buttonWithQuantity": true }, "styles": { "button": { ":hover": { "background-color": "#d89500" }, "background-color": "#f0a500", ":focus": { "background-color": "#d89500" } } }, "text": { "button": "Add to cart" } }, "cart": { "styles": { "button": { ":hover": { "background-color": "#d89500" }, "background-color": "#f0a500", ":focus": { "background-color": "#d89500" } } }, "text": { "total": "Subtotal", "button": "Checkout" } }, "toggle": { "styles": { "toggle": { "background-color": "#f0a500", ":hover": { "background-color": "#d89500" }, ":focus": { "background-color": "#d89500" } } } } };
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', { id: '10558726865190', node: document.getElementById('product-component-1779926175640'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558782341414', node: document.getElementById('product-component-1779926207875'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558762058022', node: document.getElementById('product-component-1779926229305'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558681841958', node: document.getElementById('product-component-1779926255322'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558773166374', node: document.getElementById('product-component-1779926288210'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558716838182', node: document.getElementById('product-component-1779926312939'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
      ui.createComponent('product', { id: '10558685413670', node: document.getElementById('product-component-1779926333820'), moneyFormat: '%24%7B%7Bamount%7D%7D', options: opts });
    });
  }
})();
        `}} />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
