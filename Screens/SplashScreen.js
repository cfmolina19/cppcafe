import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Asset from "../components/Asset";
import { Constants } from "expo";

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
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});

class SplashScreen extends React.Component {
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
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>C++ Café</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Button
            onPress={() =>
              //going to mod 1 instead of homescreen for now
              this.props.navigation.navigate("Module1", {
                lang: this.state.lang
              })
            }
            title="Menu"
          />

          <Text>{"\n"}</Text>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1 }}>
              <Button
                title="PT"
                onPress={this._LangPT}
                style={{ justifyContent: "flex-start" }}
              />
            </View>
            <Text> </Text>
            <View style={{ flex: 1 }}>
              <Button
                title="ES"
                onPress={this._LangES}
                style={{ justifyContent: "flex-end" }}
              />
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </View>

        <View style={{ flex: 5 }}>
          <Card style={{ flex: 1 }}>
            <Asset lang={this.state.lang} style={{ flex: 1 }} />
          </Card>
        </View>
      </View>
    );
  }
}
export default SplashScreen;
