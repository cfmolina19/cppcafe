import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import AboutAsset from "../components/AboutAsset";
import { Constants } from "expo";
import { withTheme } from "@callstack/react-theme-provider";

const lang = {
  en: {
    sel: "english"
  },
  pt: {
    sel: "portuguese"
  },
  es: {
    sel: "spanish"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#D2691E",
    padding: 10
  },
  title: {
    margin: 12,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

class About extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };

    this._LangPT = this._LangPT.bind(this);
    this._LangES = this._LangES.bind(this);
  }

  _LangPT() {
    Alert.alert("Idioma alterado para português");
    this.setState({
      lang: "pt"
    });
  }

  _LangES() {
    Alert.alert("Idioma cambiado a español");
    this.setState({
      lang: "es"
    });
  }

  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "en");

    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>C++ Café</Text>
        </View>

        <View style={{ flex: 1, borderRadius: 25 }}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("SplashScreen", {
                lang: propLang
              })
            }
            title="Home"
            style={{
              borderRadius: 25
            }}
          />
        </View>

        <View style={{ flex: 4, borderRadius: 25 }}>
          <Card style={{ flex: 1, borderRadius: 25 }}>
            <AboutAsset lang={propLang} style={{ flex: 1, borderRadius: 25 }} />
          </Card>
        </View>
      </View>
    );
  }
}
export default About;
