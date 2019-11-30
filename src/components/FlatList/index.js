import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

// import { Container } from './styles';

const friends = [
  {
    name: "friend 1",
    age: 25
  },
  {
    name: "friend 2",
    age: 26
  },
  {
    name: "friend 3",
    age: 27
  },
  {
    name: "friend 4",
    age: 28
  },
  {
    name: "friend 5",
    age: 29
  }
];

export default function FlatListComponent() {
  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item, index }) => (
        <View style={styles.tableRow}>
          <Text>
            {index}: {item.name} - Age {item.age}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  tableRow: {
    borderWidth: 1,
    borderColor: "#DDD",
    width: 300,
    height: 50,

    padding: 10,

    justifyContent: "center"
  }
});
