import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Mod1Cont from "../components/Mod1Cont";
import Mod2Cont from "../components/Mod2Cont";
import { Constants } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#D2691E",
    padding: 10,
    height: "100%",
    margin: 0
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  box: { flex: 1, paddingLeft: 5, paddingRight: 5, borderRadius: 25 },
  box1: {
    backgroundColor: "red"
  },
  box2: {
    backgroundColor: "blue"
  },
  box3: {
    backgroundColor: "yellow"
  },
  box4: {
    backgroundColor: "green"
  }
});

const lang = {
  all: {
    pages: 8
  },
  en: {
    sel: "english",
    title: "Menu"
  },
  pt: {
    sel: "portuguese",
    title: "Menu"
  },
  es: {
    sel: "spanish",
    title: "Menú"
  }
};

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      module: 1,
      page: 1
    };

    this._ModOne = this._ModOne.bind(this);
  }

  _ModOne() {
    this.setState({
      // page: this.state.page + 1,
      module: 1
    });
  }

  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "en");

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{lang[propLang].title}</Text>

        <View
          style={{
            flexDirection: "column"
          }}
        >
          <Button
            title="Module1"
            // onPress={this._ModOne}
            onPress={() =>
              this.props.navigation.navigate("Module", {
                lang: propLang
              })
            }
            style={{
              justifyContent: "flex-start",
              borderRadius: 25
            }}
          />
          <Button
            title="Module2"
            onPress={this._ModOne}
            style={{
              justifyContent: "",
              borderRadius: 25
            }}
          />

          <Button
            title="Module3"
            onPress={this._ModOne}
            style={{
              justifyContent: "",
              borderRadius: 25
            }}
          />
          <Button
            title="Module4"
            onPress={this._ModOne}
            style={{
              justifyContent: "flex-end",
              borderRadius: 25
            }}
          />
        </View>
      </View>
    );
  }
}
export default Module;
