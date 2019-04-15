import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./Screens/SplashScreen";
import Menu from "./Screens/Menu";
import Module from "./Screens/Module";
import quiz from "./Screens/quiz";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Menu: { screen: Menu },
  Module: { screen: Module },
  quiz: { screen: quiz }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
