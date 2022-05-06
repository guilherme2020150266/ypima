import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("O botão foi clicado!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>O primeiro APP a gente nunca esquece!</Text>
      <Button title="Clique se você concorda" onPress={handlePress} color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
  },
});
