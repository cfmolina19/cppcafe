import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Asset from "./components/Asset";
import { Constants } from "expo";
import { Card } from "react-native-paper";
import { DrawerNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import SplashScreen from "./Screens/SplashScreen";
import HomeScreen from "./Screens/HomeScreen";
import Module1 from "./Screens/Module1";
import quiz from "./Screens/quiz";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppNavigator = StackNavigator({
  SplashScreen: { screen: SplashScreen },
  HomeScreen: { screen: HomeScreen },
  Module1: { screen: Module1 },
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
