import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";

const lang = {
  en: {
    sel: "english",
    wel:
      "Cafeina - a C++ Programming learning resource for non-native English speakers.\n\n This began as a a creation for CIS4914 by two Computer Science Engineering students - Carlos Molina and Mathew Estima with guidance of their advisor, Dr. Claudio Spiguel.\n\nThank you Dr. Spiguel for your patience, guidance, advice, and encouragement toward the completion of our project.\n\nWe are hopeful Cafeina will continue growing to meet its mission in briding the gap of competent programming learning material for non-native English speakers - enjoy!"
  },
  pt: {
    sel: "portuguese",
    wel:
      "Cafeina - um recurso de aprendizado de programação em C ++ para falantes de inglês não nativos.\n\n Isso é uma criação do CIS4914 por dois estudantes de Engenharia da Computação - Carlos Molina e Mathew Estima com a orientação de seu orientador, Dr. Claudio Spiguel.\n\nObrigado, Dr. Spiguel, pela sua paciência, orientação, aconselhamento e incentivo para a conclusão do nosso projeto.\n\nTemos esperanças de que a Cafeina continue crescendo para cumprir sua missão de reduzir a lacuna de material de aprendizagem de programação competente para pessoas não nativas falantes de inglês - divirta-se!"
  },
  es: {
    sel: "spanish",
    wel:
      "Cafeina - un recurso de aprendizaje de programación en C ++ para hablantes no nativos de inglés.N\n Esta es una creación para CIS4914 por dos estudiantes de Ingeniería Informática - Carlos Molina y Mathew Estima con la orientación de su asesor, el Dr. Claudio Spiguel.\n\nGracias a Dr. Spiguel por su paciencia, orientación, consejo y motivacion para la finalización de nuestro proyecto.\n\n Esperamos que Cafeina continúe creciendo para cumplir con su misión de salvar la brecha del material de aprendizaje de programación competente para los no nativos hablantes de inglés - disfruten!"
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
