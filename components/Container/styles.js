import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
    container: {
      width: Dimensions.get("window").width,
      height: 120,
      padding: 10,
      paddingBottom:30,
      backgroundColor: "white",
    },
    title: {
      textAlign: "center",
      marginBottom: 15,
    }
  });