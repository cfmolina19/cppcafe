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
import Module1_2 from "./Screens/Module1_2";
import Module1_3 from "./Screens/Module1_3";
import Module1_4 from "./Screens/Module1_4";
import Module1_5 from "./Screens/Module1_5";
import Module1_6 from "./Screens/Module1_6";
import Module1_7 from "./Screens/Module1_7";
import Module1_8 from "./Screens/Module1_8";
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
  Module1_2: { screen: Module1_2 },
  Module1_3: { screen: Module1_3 },
  Module1_4: { screen: Module1_4 },
  Module1_5: { screen: Module1_5 },
  Module1_6: { screen: Module1_6 },
  Module1_7: { screen: Module1_7 },
  Module1_8: { screen: Module1_8 },
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
