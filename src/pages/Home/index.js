import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// import { Container } from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Study</Text>

      <Button
        title="Go To Component"
        onPress={() => {
          navigation.navigate("Component");
        }}
      />

      <Button
        title="Go To List"
        onPress={() => {
          navigation.navigate("FlatList");
        }}
      />

      <Button
        title="Go To Image Screen"
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      />

      <Button
        title="Go To Class Counter"
        onPress={() => {
          navigation.navigate("CounterClass");
        }}
      />

      <Button
        title="Go To Functional Counter"
        onPress={() => {
          navigation.navigate("CounterFunctional");
        }}
      />

      <Button
        title="Go To Functional Color"
        onPress={() => {
          navigation.navigate("Color");
        }}
      />

      <Button
        title="Go To Functional Making Color"
        onPress={() => {
          navigation.navigate("MakingColor");
        }}
      />

      <Button
        title="Go To Functional Making Color with Reusable Component"
        onPress={() => {
          navigation.navigate("NewMakingColor");
        }}
      />

      <Button
        title="Go To Functional Making Color with Reducer"
        onPress={() => {
          navigation.navigate("ReducerMakingColor");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    top: 30
  }
});
