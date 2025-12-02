import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">;

export function CityDetailsInfo({
  name,
  country,
  description,
}: CityDetailsInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title28" marginBottom="s4">
        {name}
      </Text>
      <Text variant="text18" marginBottom="s4">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  );
}
