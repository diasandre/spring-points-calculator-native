import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Container from "./components/Container";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <PaperProvider>
        <Container />
      </PaperProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
  },
});
