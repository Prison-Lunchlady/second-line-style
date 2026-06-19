import { createFileRoute, notFound } from "@tanstack/react-router";
import { CityHubPage, buildCityHead } from "@/components/CityHubPage";
import { getCityHubBySlug } from "@/lib/cities";

const SLUG = "baton-rouge";
const city = getCityHubBySlug(SLUG)!;

export const Route = createFileRoute("/baton-rouge")({
  head: () => buildCityHead(city),
  component: () => {
    if (!city) throw notFound();
    return <CityHubPage city={city} />;
  },
});
