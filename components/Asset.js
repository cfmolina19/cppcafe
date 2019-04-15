import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import SplashScreen from "../Screens/SplashScreen";
import i18n from "i18n-js";
import { Constants } from "expo";
import { Localization } from "expo";

const lang = {
  en: {
    sel: "english",
    wel:
      "Welcome to C++ café, an app designed to teach you c++ from your phone! My name is cafeína and I will be your teacher. The world of programming and computing can open many doors in your life, and we are excited to take you on a journey to learn the fundamentals of programming in the c++ language. Let’s go!"
  },
  pt: {
    sel: "portuguese",
    wel:
      "Bem-vindo a C++ Café! Este aplicativo foi criado para ensinar a língua C++ diretamente do seu celular. Meu nome é Cafeína, e vou ser a sua professora. O mundo de programação e computação pode abrir muitas portas na sua vida, e estamos animados para ensinar tudo que você precisa para que possa programar em C++. Vamos lá!"
  },
  es: {
    sel: "spanish",
    wel:
      "Bienvenido a C++ Cafe. Esta es una aplicación fue creada para enseñarte el lenguaje de C++ desde tu celular! Me llamo Cafeína y voy a ser tu profesora. El mundo de programacion y computacion puede abrir muchas puertas en tu vida, y estamos ansiosos de enseñarte todo lo necesario para que puedas programar en C++. Empezemos!"
  }
};

export default class AssetExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{lang[this.props.lang].wel}</Text>
        <Image style={styles.logo} source={require("../assets/caffeina.png")} />
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
  }
});
