import React from "react";
import { Card, IconButton, Avatar } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

const paddingSize = 10;
const width = Dimensions.get("window").width - paddingSize * 2;

const CardComponent = ({ item }) => (
  <View style={styles.container}>
    <Card>
      <Card.Title
        title={item.name}
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />
    </Card>
  </View>
);

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    width,
    marginTop: 10,
    paddingRight: paddingSize,
    paddingLeft: paddingSize,
  },
  title: {
    color: "#000",
  },
});
