import { CITY_PAGES } from "@/lib/cityData";
import { buildCityPageMetadata } from "@/lib/seo";
import UmzugCityTemplate from "@/components/templates/UmzugCityTemplate";

const city = CITY_PAGES.weinheim;

export const metadata = buildCityPageMetadata(city);

export default function Page() {
  return <UmzugCityTemplate city={city} />;
}
