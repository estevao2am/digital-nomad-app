import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { Text } from "@/src/components/Text";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <Text variant="title28">Barcelona</Text>
      <FlatList data={cityPreviewList} renderItem={renderItem} />
    </Screen>
  );
}
