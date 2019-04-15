import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Mod1Cont from "../components/Mod1Cont";
import Mod2Cont from "../components/Mod1Cont";
import { Constants } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#D2691E",
    padding: 10
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});

const lang = {
  all: {
    pages: 8
  },
  en: {
    sel: "english",
    title: {
      1: "Module 1 - Introduction",
      2: "Module 2 - Data Types, Variables, Conditional Statements",
      3: "Module 3 - Arrays, Strings",
      4: "Module 4 - Loops"
    }
  },
  pt: {
    sel: "portuguese",
    title: {
      1: "Module 1 - Introduction",
      2: "Module 2 - Data Types, Variables, Conditional Statements",
      3: "Module 3 - Arrays, Strings",
      4: "Module 4 - Loops"
    }
  },
  es: {
    sel: "spanish",
    title: {
      1: "Module 1 - Introduction",
      2: "Module 2 - Data Types, Variables, Conditional Statements",
      3: "Module 3 - Arrays, Strings",
      4: "Module 4 - Loops"
    }
  }
};

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
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
        <Text style={styles.title}>
          {lang[propLang].title[this.state.module]}
        </Text>

        <Card style={{ flex: 1 }}>
          <Mod1Cont lang={propLang} page={this.state.page} />
        </Card>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View style={{ flex: 3 }}>{lastPageBtn}</View>
          <View style={{ flex: 3, paddingLeft: 10, PaddingRight: 10 }}>
            {quizBtn}
          </View>
          <View style={{ flex: 3 }}>{nextPageBtn}</View>
        </View>
      </View>
    );
  }
}
export default Module;
