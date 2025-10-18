import { useState } from "react";
import { Box } from "../components/Box";
import { SearchInput } from "../components/SearchInput";

export function CityFilter() {
  const [name, setName] = useState("");
  return (
    <Box>
      <SearchInput
        value={name}
        onChangeText={setName}
        placeholder="Qual é o seu proximo destino ?"
      />
    </Box>
  );
}
