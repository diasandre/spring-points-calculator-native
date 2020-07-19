import React, { useState, useEffect } from "react";
import { FlatList, View, Dimensions, StyleSheet } from "react-native";
import CardComponent from "../CardComponent";
import { Button, Title } from "react-native-paper";
import { calculate } from "../../helpers/calculatePointsHelper";
import { ContextProvider } from "./Context";

const defaultItem = () => {
  return {
    id: Number(Math.random() * 100).toFixed(0),
    name: "randomPerson",
    daysOfWork: 5,
    numberOfPointsByDay: 3,
    discount: 0.3,
  };
};

const Container = () => {
  const [values, setValues] = useState([defaultItem()]);
  const [points, setPoints] = useState(calculate(values));

  const onAdd = () => setValues([...values, defaultItem()]);

  const updateItem = (updatedValue) => {
    const indexToUpdate = values.findIndex(
      (item) => updatedValue.id == item.id
    );
    setValues([
      ...values.slice(0, indexToUpdate),
      {
        ...values[indexToUpdate],
        ...updatedValue,
      },
      ...values.slice(indexToUpdate + 1, values.length),
    ]);
  };

  const removeItem = (id) => {
    const indexToUpdate = values.findIndex(
      (item) => id == item.id
    );
    setValues([
      ...values.slice(0, indexToUpdate),
      ...values.slice(indexToUpdate + 1, values.length),
    ]);
  };

  useEffect(() => {
    setPoints(calculate(values));
  }, [values]);

  const context = {
    values,
    updateItem,
    removeItem
  };

  return (
    <>
      <ContextProvider value={context}>
        <FlatList
          data={values}
          renderItem={({ item }) => <CardComponent key={item.id} item={item} />}
        />
        <View style={styles.container}>
          <Title>{points}</Title>
          <Button icon="account-plus" mode="contained" onPress={onAdd} />
        </View>
      </ContextProvider>
    </>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 100,
    padding: 10,
    backgroundColor: "white",
  },
});
