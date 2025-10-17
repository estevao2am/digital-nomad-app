import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { useAppTheme } from "@/src/components/theme/useAppTheme";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

export default function HomeScreen() {
  const { spacing } = useAppTheme();

  // Navegar com a lista a cima quando clicar no icon
  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />;
  }

  return (
    <Screen>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={{ gap: spacing.padding }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
