import { HOME_ALONE_PRODUCTS, type HomeAloneGarment } from "./home-alone-area-codes";

/** Permanent server redirect; URL.search retains area, variant, and tracking parameters verbatim. */
export function homeAlonePermanentRedirect(request: Request, garment: HomeAloneGarment): Response {
  const url = new URL(request.url);
  return new Response(null, {
    status: 308,
    headers: { Location: `/product/${HOME_ALONE_PRODUCTS[garment].slug}${url.search}` },
  });
}
