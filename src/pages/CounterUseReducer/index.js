import React, { useReducer } from "react";
import { SafeAreaView, Text, Button, StyleSheet } from "react-native";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_VALUE":
      return { ...state, value: state.value + action.payload };
    case "DECREASE_VALUE":
      return { ...state, value: state.value - action.payload };
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
        onPress={() => dispatch({ type: "INCREASE_VALUE", payload: 1 })}
      />
      <Button
        title="DECREASE BUTTON"
        onPress={() => dispatch({ type: "DECREASE_VALUE", payload: -1 })}
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
