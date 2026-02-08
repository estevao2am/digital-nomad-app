import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useAppTheme } from "../theme/useAppTheme";
import { Box, BoxProps } from "./Box";
import { IconButton } from "./IconButton";

type SearchInputProps = {} & Pick<
  TextInputProps,
  "value" | "onChangeText" | "placeholder"
>;

export function SearchInput({
  value,
  onChangeText,
  placeholder,
}: SearchInputProps) {
  const { colors, textVariants } = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  function onPressIconButton() {
    if (value!.length > 0) {
      onChangeText?.("");
    }
  }

  return (
    <Box
      {...boxStyle}
      style={{ borderColor: isFocused ? colors.primary : colors.gray1 }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)} // clicar por dentro
        onBlur={() => setIsFocused(false)} // quando clicar por fora do elemento
        style={{
          ...textVariants.title16,
          color: colors.text,
          height: "100%",
          width: "100%",
          flexShrink: 1, // 100% tamanho menos o que não esta disponivel
        }}
      />
      <IconButton
        iconName={value!.length > 0 ? "Close" : "Search-outline"}
        onPress={onPressIconButton}
      />
    </Box>
  );
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  paddingLeft: "s16",
  padding: "s8",
  justifyContent: "space-between",
  backgroundColor: "gray1",
  height: 70,
  alignItems: "center",
  borderRadius: "rounded",
  borderWidth: 2,
};
