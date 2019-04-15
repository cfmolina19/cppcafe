import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import SplashScreen from "../Screens/SplashScreen";
import i18n from "i18n-js";
import { Constants } from "expo";
import { Localization } from "expo";

const lang = {
  en: {
    sel: "english",
    title: "Module One - Introduction",
    page: {
      1: "en 1st Page Content",
      2: "en 2nd page content"
    }
  },
  pt: {
    sel: "portuguese",
    page: {
      1: {
        text:
          "Quase todos os programadores começar a programar com programas básicos. Nenhum programa é mais popular para aprender que o chamado “Hello, World”, ou “Olá, Mundo”. Antes de começar a programar, vamos olhar nas ingredientes essenciais de um programa de C++.",
        vocab: "",
        imagePath: "",
        word: ""
      },
      2: {
        text:
          "Como C++ é uma linguagem baseada em inglês, é importante aprender algumas palavras inglesas. Em cada programa de C, é normal iniciar com libraries, ou bibliotecas. Pense nisso como caixas de ferramentas. Para conseguir tarefas específicas, precisamos ter ferramentas adequadas. Também, a gente tem que lembrar incluir estas ferramentas para ter acesso a elas. Em inglês, a palavra include se traduz para incluir",
        vocab: "",
        imagePath: "../assets/code.png",
        header: ""
      }
    }
  },
  es: {
    sel: "spanish",
    page: {
      1: "Casi todos los programadores empiezan a programar cosas básicas. Ningún programa tiene más fama que el que es llamada “Bienvenido al mundo.” Antes de empezar con este programa, aprendamos sobre los ingredientes más esenciales de un programa en C++.",
      2: "en 2nd page content"
    }
  }
};

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
  }

  _vocab() {
    Alert.alert(lang[this.props.lang].page[this.props.page].vocab);
  }

  render() {
    let textShown;
    let vocabBtn;
    let image;

    //text exists
    if (lang[this.props.lang].page[this.props.page].text) {
      textShown = (
        <Text>{lang[this.props.lang].page[this.props.page].text}</Text>
      );
    }

    //vocab exists
    if (
      lang[this.props.lang].page[this.props.page].vocab &&
      lang[this.props.lang].page[this.props.page].word
    ) {
      vocabBtn = <Button title="Include" onPress={this._vocab} />;
    }

    //image exists
    if (lang[this.props.lang].page[this.props.page].imagePath) {
      image = (
        <Image style={styles.image} source={require("../assets/code.png")} />
      );
    }

    return (
      <View style={styles.container}>
        {textShown}
        {vocabBtn}
        {image}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff0",
    padding: 24
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  logo: {
    height: 128,
    width: 128
  },
  image: {
    height: 150,
    width: 350
  }
});
