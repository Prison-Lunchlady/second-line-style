import { createFileRoute, notFound } from "@tanstack/react-router";
import { CityHubPage, buildCityHead } from "@/components/CityHubPage";
import { getCityHubBySlug } from "@/lib/cities";

const SLUG = "shreveport";
const city = getCityHubBySlug(SLUG)!;

export const Route = createFileRoute("/shreveport")({
  head: () => buildCityHead(city),
  component: () => {
    if (!city) throw notFound();
    return <CityHubPage city={city} />;
  },
});
