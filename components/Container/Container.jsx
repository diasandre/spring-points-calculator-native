import React, { useState } from "react";
import { FlatList } from "react-native";
import CardComponent from "../CardComponent";
import { Button } from "react-native-paper";

var id = 0;

const defaultItem = {
  id: id++,
  name: "user 1",
  daysOfWork: 0,
  numberOfPointsByDay: 0,
  discount: 0.7,
};

const Container = () => {
  const [values, setValues] = useState([defaultItem]);

  const onAdd = () => setValues([...values, defaultItem]);

  return (
    <>
      <FlatList
        data={values}
        renderItem={({ item }) => <CardComponent key={item.id} item={item} />}
      />
      <Button icon="account-plus" mode="contained" onPress={onAdd} />
    </>
  );
};

export default Container;
