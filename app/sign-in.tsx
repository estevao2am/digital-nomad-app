import { useAuthSignIn } from "@/src/domain/auth/operations/useAuthSugnIn";
import { Screen } from "@/src/ui/components/Screen";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signIng } = useAuthSignIn();

  function handleSingIn() {
    signIng({ email, password });
  }

  return (
    <Screen>
      <SafeAreaView>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Seu Email"
          style={styles.input}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Sua password"
        />
        <Button title="Entrar" onPress={handleSingIn} />
      </SafeAreaView>
      {/* */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#FFF",
    borderWidth: 1,
    height: 60,
    color: "#fff",
    fontSize: 20,
    marginVertical: 16,
  },
});
