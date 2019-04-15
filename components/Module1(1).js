import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import i18n from 'i18n-js';
import { Constants } from 'expo';
import { Localization } from 'expo';

const pt = {
  Welcome: 'Quase todos os programadores começar a programar com programas básicos. Nenhum programa é mais popular para aprender que o chamado “Hello, World”, ou “Olá, Mundo”. Antes de começar a programar, vamos olhar nas ingredientes essenciais de um programa de C++.',
  bar: 'Bar {{someValue}}',
};
const es = {
  Welcome: 'Bienvenido a C++ Cafe. Esta es una aplicación fue creada para enseñarte el lenguaje de C++ desde tu celular! Me llamo Cafeína y voy a ser tu profesora. El mundo de programacion y computacion puede abrir muchas puertas en tu vida, y estamos ansiosos de enseñarte todo lo necesario para que puedas programar en C++. Empezemos!',
  bar: 'chatouiller {{someValue}}',
};

i18n.fallbacks = true;
i18n.translations = { pt, es };
i18n.locale = "pt"

export default class AssetExample extends React.Component {
  _LangPT() {
    Alert.alert("Idioma alterado para português")
    i18n.locale = "pt"
  }
_LangES(){
    Alert.alert("Idioma cambiado a español")
    i18n.locale = "es"
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        {i18n.t('Module1')}
        </Text>
        <Image style={styles.logo} source={require('../assets/caffeina.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff0',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
