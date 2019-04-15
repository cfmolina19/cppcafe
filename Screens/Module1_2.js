import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Asset from "../components/Module1_2";
import { Constants } from "expo";
import { Localization } from "expo";
import i18n from "i18n-js";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#D2691E",
    padding: 0
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

class Module1_2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Module 1</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Module1_3")}
          title="Next"
        />

        <Card>
          <Asset />
        </Card>
      </View>
    );
  }
}
export default Module1_2;
