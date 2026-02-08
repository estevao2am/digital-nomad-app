import { useCategoryFindAll } from "@/src/domain/category/operations/useCategoryFindAll";
import { useCityFindAll } from "@/src/domain/city/operations/useCityFindAll";
import { CityFilter } from "@/src/ui/containers/CityFilter";
import { useDebounce } from "@/src/utils/hooks/useDebounce";

import { CityPreview } from "@/src/types";
import { Box } from "@/src/ui/components/Box";
import { CityCard } from "@/src/ui/components/CityCard";
import { Screen } from "@/src/ui/components/Screen";
import { useAppTheme } from "@/src/ui/theme/useAppTheme";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { ListRenderItemInfo } from "react-native";
import Animated, { FadingTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [cityName, setCityName] = useState("");
  const debouncedCityName = useDebounce(cityName); // Manter o nome da cidade sem debounce por enquanto
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const { data: cities } = useCityFindAll({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  }); // Filtrar por nome da cidade

  const { data: categories } = useCategoryFindAll();
  // Navegar com a lista a cima quando clicar no icon
  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />
      </Box>
    );
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <Animated.FlatList
        itemLayoutAnimation={FadingTransition.duration(500)}
        ref={flatListRef}
        // paddingTop => espaçamento de cima devido o ios e android
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </Screen>
  );
}
