import React from "react";
import { View, Text, Button } from "react-native";

export default function ColorCount({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={` INCREASE ${color}`} onPress={() => onIncrease()} />
      <Button title={` DECREASE ${color}`} onPress={() => onDecrease()} />
    </View>
  );
}
