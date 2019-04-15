import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";

const lang = {
  en: {
    sel: "english",
    wel:
      "Welcome to C++ café! \n\nThis is an app designed to teach you c++ from your phone! \n\nMy name is cafeína and I will be your teacher. The world of programming and computing can open many doors in your life, and we are excited to take you on a journey to learn the fundamentals of programming in the c++ language. \n\nLet’s go!"
  },
  pt: {
    sel: "portuguese",
    wel:
      "Bem-vindo a C++ Café!\n\nEste aplicativo foi criado para ensinar a língua C++ diretamente do seu celular.\n\nMeu nome é Cafeína, e vou ser a sua professora. O mundo de programação e computação pode abrir muitas portas na sua vida, e estamos animados para ensinar tudo que você precisa para que possa programar em C++.\n\nVamos lá!"
  },
  es: {
    sel: "spanish",
    wel:
      "Bienvenido a C++ Cafe!\n\nEsta es una aplicación fue creada para enseñarte el lenguaje de C++ desde tu celular!\n\nMe llamo Cafeína y voy a ser tu profesora. El mundo de programacion y computacion puede abrir muchas puertas en tu vida, y estamos ansiosos de enseñarte todo lo necesario para que puedas programar en C++. \n\nEmpezemos!"
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff0",
    padding: 24
  },
  paragraph: {
    flex: 1,
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
