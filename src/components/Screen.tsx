import { PropsWithChildren } from "react";
import { Box, BoxProps } from "./Box";

export function Screen({ children, ...boxPops }: PropsWithChildren & BoxProps) {
  return (
    // boxPros => serve em caso de descrever ou adicionar outras estilizações
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxPops}
    >
      {children}
    </Box>
  );
}
