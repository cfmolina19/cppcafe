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
  title: {
    margin: 24,
    fontSize: 24,
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
  all: {
    pages: 8
  },
  en: {
    sel: "english",
    title: "Module 1 - Introduction"
  },
  pt: {
    sel: "portuguese",
    title: "Módulo 1 - Introdução"
  },
  es: {
    sel: "spanish",
    title: "Module 1 - Introducción"
  }
};

class Module1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this._NextPage = this._NextPage.bind(this);
    this._LastPage = this._LastPage.bind(this);
  }

  _NextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }

  _LastPage() {
    this.setState({
      page: this.state.page - 1
    });
  }

  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "notpassing");

    let lastPageBtn;
    let nextPageBtn;
    let quizBtn;

    if (this.state.page > 1) {
      lastPageBtn = <Button title="Last Page" onPress={this._LastPage} />;
    }
    if (this.state.page < lang.all.pages) {
      nextPageBtn = <Button title="Next Page" onPress={this._NextPage} />;
    }
    if (this.state.page == lang.all.pages) {
      quizBtn = (
        <Button
          onPress={() => this.props.navigation.navigate("quiz")}
          title="Quiz"
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{lang[propLang].title}</Text>

        <Card>
          <Asset lang={propLang} page={this.state.page} />
        </Card>

        {lastPageBtn}
        {nextPageBtn}
        {quizBtn}
      </View>
    );
  }
}
export default Module1;
