import React from "react";
import { Text } from "react-native";

import ImageDetails from "../../components/ImageDetails";

import { Container } from "./styles";

export default function ImageScreen() {
  return (
    <Container>
      <ImageDetails
        title="Forest"
        imageScore="8"
        imageSource={require("../../assets/images/forest.jpg")}
      />
      <ImageDetails
        title="Beach"
        imageScore="7"
        imageSource={require(`../../assets/images/beach.jpg`)}
      />
      <ImageDetails
        title="Mountain"
        imageScore="9"
        imageSource={require(`../../assets/images/mountain.jpg`)}
      />
    </Container>
  );
}
