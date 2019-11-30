import React, { Component } from "react";

import { View, Button, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrease = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>COUNTER:</Text>
        <Text>{this.state.counter}</Text>

        <Button
          title="Increase"
          onPress={() => {
            this.increase();
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            this.decrease();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center"
  }
});
