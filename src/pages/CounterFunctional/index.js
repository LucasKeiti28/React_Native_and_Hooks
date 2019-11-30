import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";

// import { Container } from './styles';

export default function CounterFunctional() {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>COUNTER</Text>
      <Text style={styles.text}>{counter}</Text>

      <Button title="INCREASE" onPress={() => setCounter(counter + 1)} />
      <Button title="DECREASE" onPress={() => setCounter(counter - 1)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 100
  }
});
