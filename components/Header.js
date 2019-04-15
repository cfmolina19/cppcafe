import React from "react";
import { Text } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 24, textAlign: "right", padding: 32 }}>
        <Text style={{ color: "green" }}>{this.props.correct} ✓ </Text>
        <Text style={{ color: "red" }}>{this.props.wrong} ✗ </Text>
        <Text style={{ color: "blue" }} onPress={this.props.onClear}>
          ↻
        </Text>
      </Text>
    );
  }
}
