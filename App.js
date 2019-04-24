import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./Screens/SplashScreen";
import Menu from "./Screens/Menu";
import Module from "./Screens/Module";
import Quiz from "./Screens/Quiz";
import About from "./Screens/About";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  Menu: { screen: Menu },
  Module: { screen: Module },
  Quiz: { screen: Quiz },
  About: { screen: About }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
