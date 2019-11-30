import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

// import { Container } from './styles';

randomRGB = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default function Color() {
  const [colors, setColors] = useState([]);

  console.log(colors);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={{ width: "100%", height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
