import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { green } from "ansi-colors";

// import { Container } from './styles';

export default function MakingColor() {
  const [red, setRed] = useState(1);
  const [green, setGreen] = useState(1);
  const [blue, setBlue] = useState(1);

  return (
    <View>
      <View style={styles.button}>
        <Button title="MORE RED" onPress={() => setRed(red + 10)} />
        <Button
          title="LESS RED"
          onPress={() => {
            if (red >= 10) {
              return setRed(red - 10);
            }
            return red;
          }}
        />
      </View>

      <View style={styles.button}>
        <Button title="MORE GREEN" onPress={() => setGreen(green + 10)} />
        <Button
          title="LESS GREEN"
          onPress={() => {
            if (green >= 10) {
              return setGreen(green - 10);
            }
            return green;
          }}
        />
      </View>

      <View style={styles.button}>
        <Button title="MORE BLUE" onPress={() => setBlue(blue + 10)} />
        <Button
          title="LESS BLUE"
          onPress={() => {
            if (blue >= 10) {
              return setBlue(blue - 10);
            }
            return blue;
          }}
        />
      </View>

      <Text style={styles.text}>
        COLOR: RGB(${red}, ${green}, ${blue})
      </Text>

      <View
        style={{
          width: "90%",
          height: "50%",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          margin: 20
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(0,0,255,0.2)",
    borderColor: "rgb(0,0,255)",
    borderWidth: 1,
    margin: 10
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold"
  }
});
