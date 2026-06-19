import { createFileRoute, notFound } from "@tanstack/react-router";
import { CityHubPage, buildCityHead } from "@/components/CityHubPage";
import { getCityHubBySlug } from "@/lib/cities";

const SLUG = "monroe";
const city = getCityHubBySlug(SLUG)!;

export const Route = createFileRoute("/monroe")({
  head: () => buildCityHead(city),
  component: () => {
    if (!city) throw notFound();
    return <CityHubPage city={city} />;
  },
});
