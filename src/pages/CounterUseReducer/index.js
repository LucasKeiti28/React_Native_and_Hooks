import React, { useReducer } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

// import { Container } from './styles';

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_VALUE":
      return { value: state.value + 1 };
    case "DECREASE_VALUE":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <SafeAreaView style={styles.view}>
      <Text style={styles.text}>{state.value}</Text>

      <Button
        title="INCREASE BUTTON"
        onPress={() => dispatch({ type: "INCREASE_VALUE" })}
      />
      <Button
        title="DECREASE BUTTON"
        onPress={() => dispatch({ type: "DECREASE_VALUE" })}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
