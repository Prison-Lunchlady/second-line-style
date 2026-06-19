import { createFileRoute, notFound } from "@tanstack/react-router";
import { CityHubPage, buildCityHead } from "@/components/CityHubPage";
import { getCityHubBySlug } from "@/lib/cities";

const SLUG = "natchitoches";
const city = getCityHubBySlug(SLUG)!;

export const Route = createFileRoute("/natchitoches")({
  head: () => buildCityHead(city),
  component: () => {
    if (!city) throw notFound();
    return <CityHubPage city={city} />;
  },
});
