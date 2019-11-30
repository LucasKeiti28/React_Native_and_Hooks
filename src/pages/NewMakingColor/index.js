import React, { useState } from "react";
import { View, Text } from "react-native";

import ColorCount from "../../components/ColorCount";

const COLOR_INCREMENT = 15;

export default function NewMakingColor() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue,
    // change === +15, -15

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <ColorCount
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCount
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCount
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />

      <Text>COLOR: RGB({`${red}, ${green}, ${blue}`})</Text>

      <View
        style={{
          width: "100%",
          height: 300,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
}
