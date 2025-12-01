import { Box } from "@/src/components/Box";
import { CityCard } from "@/src/components/CityCard";
import { Screen } from "@/src/components/Screen";
import { useAppTheme } from "@/src/components/theme/useAppTheme";
import { CityFilter } from "@/src/containers/CityFilter";
import { categories } from "@/src/data/categories";
import { useCities } from "@/src/data/useCities";
import { useDebounce } from "@/src/hooks/useDebounce";
import { CityPreview } from "@/src/types";
import { useScrollToTop } from "@react-navigation/native";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [cityName, setCityName] = useState("");
  const debouncedCityName = useDebounce(cityName); // Manter o nome da cidade sem debounce por enquanto
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const { cityPreviewList } = useCities({
    name: debouncedCityName,
    categoryId: selectedCategoryId,
  }); // Filtrar por nome da cidade

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
