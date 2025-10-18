import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { useAppTheme } from "@/src/components/theme/useAppTheme";
import { CityFilter } from "@/src/containers/CityFilter";
import { cityPreviewList } from "@/src/data/cities";
import { CityPreview } from "@/src/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

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
        // paddingTop => espaçamento de cima devido o ios e android
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cityPreviewList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<CityFilter />}
      />
    </Screen>
  );
}
