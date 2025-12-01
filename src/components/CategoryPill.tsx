import { Category, CategoryCode } from "../types";
import { IconName } from "./Icon";
import { Pill, PillProps } from "./Pill";

type CategoryPillProps = {
  category: Category;
} & Pick<PillProps, "active" | "onPress">;
export function CategoryPill({ category, ...pillProps }: CategoryPillProps) {
  return (
    <Pill
      iconName={categoryIconMap[category.code]}
      label={category.name}
      {...pillProps}
    />
  );
}

// mapeando os icones com os seus nomes
const categoryIconMap: Record<CategoryCode, IconName> = {
  ADVENTURE: "Adventure",
  BEACH: "Beach",
  CULTURE: "Culture",
  GASTRONOMY: "Gastronomy",
  HISTORY: "History",
  LUXURY: "Luxury",
  NATURE: "Nature",
  URBAN: "Urban",
  SHOPPING: "Shopping",
  FAVORITE: "Star",
};
