import React, { useState, useContext } from "react";
import { Text, View } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import { Context } from "../Container/Context";
import styles from "./styles";

const Counter = ({
  data: { id, initialValue, field },
  label = null,
  plus = 0.5,
  percentage = false,
}) => {
  const [count, setCounter] = useState(initialValue);
  const { updateItem } = useContext(Context);

  const formatToPercentage = (value) => `${Number(value).toFixed(2) * 100}%`;

  const formatToText = (value) =>
    label ? `${Number(value).toFixed(1)} ${label}` : value;

  const updateValue = (newValue) => {
    setCounter(newValue);
    var item = {
      id,
    };

    item[field] = newValue;
    updateItem({ ...item });
  };

  const onAdd = () => updateValue(count + plus);
  const onRemove = () => updateValue(count - plus);

  return (
    <View style={styles.container}>
      <Text style={styles.field}>{field}</Text>
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
