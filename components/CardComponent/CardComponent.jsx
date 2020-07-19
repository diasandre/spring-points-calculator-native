import React, { useContext } from "react";
import { Card, IconButton, Avatar } from "react-native-paper";
import { View } from "react-native";
import Counter from "../Counter";
import { Context } from "../Container/Context";
import styles from "./styles";

const CardComponent = ({ item }) => {
  const title = `${item.name} ${item.id}`;
  const { removeItem } = useContext(Context);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title={title}
          left={(props) => (
            <Avatar.Icon {...props} icon="account" />
          )}
          right={(props) => (
            <IconButton
              {...props}
              icon="delete"
              onPress={() => removeItem(item.id)}
            />
          )}
        />
        <Card.Content>
          <Counter
            data={{
              id: item.id,
              initialValue: item.daysOfWork,
              field: "daysOfWork",
            }}
            label="days"
          />
          <Counter
            id={item.id}
            data={{
              id: item.id,
              initialValue: item.numberOfPointsByDay,
              field: "numberOfPointsByDay",
            }}
            label="points"
          />
          <Counter
            id={item.id}
            data={{
              id: item.id,
              initialValue: item.discount,
              field: "discount",
            }}
            plus={0.05}
            percentage
          />
        </Card.Content>
      </Card>
    </View>
  );
};

export default CardComponent;
