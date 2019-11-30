import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { Container } from "./styles";

export default function ImageDetails({ title, imageScore, imageSource }) {
  console.log(imageSource);
  return (
    <View>
      <Image source={imageSource} />
      <Text>Title: {title}</Text>
      <Text>Image Score: {imageScore}</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   image: {
//     width: 100,
//     height: 100
//   }
// });
