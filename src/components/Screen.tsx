import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  scrollable = false,
  ...boxPops
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const Container = scrollable ? ScrollView : View;
  return (
    // boxPros => serve em caso de descrever ou adicionar outras estilizações
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxPops}
    >
      <Container bounces={false} showsVerticalScrollIndicator={false}>
        {children}
      </Container>
    </Box>
  );
}
