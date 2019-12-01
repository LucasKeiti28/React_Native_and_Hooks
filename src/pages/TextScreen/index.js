import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// import { Container } from './styles';

export default function TextScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        // onChangeText={newValue => setName(newValue)}
        onChangeText={setName}
      />
      <Text>My name is: {name}</Text>
      {name.length <= 5 ? (
        <Text style={styles.warn}>
          The name must be more than 5 characters.
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "#000",
    borderWidth: 1,
    padding: 5
  },
  warn: {
    color: "rgb(256,0,0)"
  }
});
