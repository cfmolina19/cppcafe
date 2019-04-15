import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Asset from "../components/Mod1Cont";
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

// Mod 1 - Introduction
// Hello, World!
// Mod 2 -
// Variables and Types
// If statements
// Mod 3
// Arrays
// Strings
// Mod 4 - Loops
// For loops
// While loops

const lang = {
  en: {
    sel: "english",
    title: "Module One - Introduction",
    pg1: "en 1st Page Content",
    pg2: "en 2nd Page Content"
  },
  pt: {
    sel: "portuguese",
    pg1: "pt 1st Page Content",
    pg2: "pt 2nd Page Content"
  },
  es: {
    sel: "spanish",
    pg1: "spa 1st Page Content",
    pg2: "spa 2nd Page Content"
  }
};

class Module1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "notpassing");

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Module 1: {lang[propLang].title}</Text>
        {/* <Button
          onPress={() => this.props.navigation.navigate("Module1_2")}
          title="Next"
        /> */}

        <Card>
          <Asset lang={propLang} />
        </Card>
      </View>
    );
  }
}
export default Module1;
