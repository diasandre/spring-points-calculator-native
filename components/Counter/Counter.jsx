import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { IconButton, Colors } from "react-native-paper";

const Counter = ({
  initialValue,
  label = null,
  plus = 0.50,
  percentage = false,
}) => {
  const [count, setCounter] = useState(initialValue);

  const formatToPercentage = (value) => `${Number(value).toFixed(2) * 100}%`;

  const formatToText = (value) =>
    label ? `${Number(value).toFixed(1)} ${label}` : value;

  const onAdd = () => setCounter(count + plus);
  const onRemove = () => setCounter(count - plus);

  return (
    <View style={styles.container}>
      <IconButton
        color={Colors.black}
        icon="minus-circle-outline"
        size={20}
        onPress={onRemove}
      />
      <Text style={styles.count}>
        {percentage ? formatToPercentage(count) : formatToText(count)}
      </Text>
      <IconButton
        color={Colors.black}
        icon="plus-circle-outline"
        size={20}
        onPress={onAdd}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  count: {
    width: 100,
    textAlign: "center",
  },
});
