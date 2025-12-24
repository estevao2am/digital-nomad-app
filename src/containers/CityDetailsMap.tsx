import { useTheme } from "@shopify/restyle";
import React from "react";
import MapView from "react-native-maps";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { City } from "../types";

type CityDetailsMapProps = Pick<City, "location">;

export function CityDetailsMap({ location }: CityDetailsMapProps) {
  const { borderRadii } = useTheme();
  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>

      <MapView
        style={{
          width: "100%",
          height: 200,
          borderRadius: borderRadii.default,
        }}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0321,
        }}
      />
    </Box>
  );
}
