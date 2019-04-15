import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import Asset from "../components/Asset";
import { Constants } from "expo";
import { Localization } from "expo";
import i18n from "i18n-js";
import { Ionicons } from "@expo/vector-icons";

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

// const pt = {
//   Wel:
//     "Bem-vindo a C++ Café! Este aplicativo foi criado para ensinar a língua C++ diretamente do seu celular. Meu nome é Cafeína, e vou ser a sua professora. O mundo de programação e computação pode abrir muitas portas na sua vida, e estamos animados para ensinar tudo que você precisa para que possa programar em C++. Vamos lá!",
//   bar: "Bar {{someValue}}"
// };
// const es = {
//   Welcome: "como telle fous",
//   bar: "chatouiller {{someValue}}"
// };

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

// i18n.fallbacks = true;
// i18n.translations = { pt, es };

//i18n.locale = Localization.locale;

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
    Alert.alert("PT");
    i18n.locale = "pt";
    this.setState({
      lang: "pt"
    });
  }

  _LangES() {
    Alert.alert("ES");
    i18n.locale = "es";
    this.setState({
      lang: "es"
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>C++ Café</Text>
        <Button
          onPress={() =>
            //going to mod 1 instead of homescreen for now
            this.props.navigation.navigate("Module1", {
              lang: this.state.lang
            })
          }
          title="Menu"
        />

        {/* this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            }); */}

        <Button title="PT" onPress={this._LangPT} />
        <Button title="ES" onPress={this._LangES} />
        <Card>
          <Asset lang={this.state.lang} />
        </Card>
      </View>
    );
  }
}
export default SplashScreen;
