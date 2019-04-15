import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import SplashScreen from '../Screens/SplashScreen';
import i18n from 'i18n-js';
import { Constants } from 'expo';
import { Localization } from 'expo';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
  } from 'react-native-popup-dialog';
  const slideAnimation = new SlideAnimation({ slideFrom: 'top' });
  const scaleAnimation = new ScaleAnimation();
  const fadeAnimation = new FadeAnimation({ animationDuration: 50 });

const pt = {
  Welcome: 'Como C++ é uma linguagem baseada em inglês, é importante aprender algumas palavras inglesas. Em cada programa de C, é normal iniciar com libraries, ou bibliotecas. Pense nisso como caixas de ferramentas. Para conseguir tarefas específicas, precisamos ter ferramentas adequadas. Também, a gente tem que lembrar incluir estas ferramentas para ter acesso a elas. Em inglês, a palavra include se traduz para incluir',
  Wel: 'Bem-vindo a C++ Café! Este aplicativo foi criado para ensinar a língua C++ diretamente do seu celular. Meu nome é Cafeína, e vou ser a sua professora. O mundo de programação e computação pode abrir muitas portas na sua vida, e estamos animados para ensinar tudo que você precisa para que possa programar em C++. Vamos lá!',
  Module1: 'Quase todos os programadores começar a programar com programas básicos. Nenhum programa é mais popular para aprender que o chamado “Hello, World”, ou “Olá, Mundo”. Antes de começar a programar, vamos olhar nas ingredientes essenciais de um programa de C++.',
  bar: 'Bar {{someValue}}',
  Module1_3: 'Agora pode ver algo chamado uma “função”. Estamos somente trabalhando com uma função chamada “main”, ou principal por agora. Funções pode ter qualquer nome, e normalmente esses nomes tem a ver com seu propósito. Imagine a função como uma sala de espera (saguão) num prédio comercial. Todos os outros cuartos terminam até lá.',
  Module1_4: 'Funções contém {...}. O primeiro { (abre fecha chave) indica o início da função e o último } indica o final. Dentro destes é que onde fica nosso primeiro programa de “Bem-vindo ao mundo”. Antes de procedermos, vamos rever nosso novo vocabulário',
  Module1_5: 'Muito bom! Agora escolhe o library para que começar nosso programa de “Bem-vindo ao mundo”. O propósito deste programa é imprimir “Bem-vindo ao mundo” na tela. Se quisermos imprimir algo na tela, precisamos incluir as ferramentas adequadas. De onde a gente pode obter essas ferramentas?',
  Module1_6: 'Nossa! Tantas novas palavras, hein? Vamos decompô-las. Percebeu que cout parece diferente que out e endl de end? Cout é simplesmente a sintaxe para imprimir texto em a linguagem de C. Pense de Endl como o fim da linha na tela. Quando colocar o Endl, o programa começa uma nova linha.',
  Module1_7: 'OK, agora estamos prontos terminar nosso programa. Há muitas funções que exigem o usuário retornar um valor. Isso é mais usado com programas avançados, por agora simplesmente retorne um 0. Que bom! Agora estamos prontos executar o programa. Vamos ver o que a tela mostrará.'
};
const es = {
  Welcome: 'Bienvenido a C++ Cafe. Esta es una aplicación fue creada para enseñarte el lenguaje de C++ desde tu celular! Me llamo Cafeína y voy a ser tu profesora. El mundo de programacion y computacion puede abrir muchas puertas en tu vida, y estamos ansiosos de enseñarte todo lo necesario para que puedas programar en C++. Empezemos!',
  bar: 'chatouiller {{someValue}}',
};

i18n.fallbacks = true;
i18n.translations = { pt, es };
i18n.locale = "pt"

export default class Module1_7 extends React.Component {
    _vocab() {
        Alert.alert("Compilado, toque Next para ver o resultado")
      }
  render() {
    return (
      <View style={styles.container}>
    
        <Text style={styles.paragraph}>
        {i18n.t('Module1_7')}
        </Text>
        <Button 
            title='Toque aqui para compilar este Code' 
            onPress={this._vocab}
          />
        <Image style={styles.logo} source={require('../assets/code.png')} />

        <PopupDialog
          ref={scaleAnimationDialog => {
            this.scaleAnimationDialog = scaleAnimationDialog;
          }}
          dialogAnimation={scaleAnimation}
          dialogTitle={<DialogTitle title="Scale Animation Dialog Sample" />}
          actions={[
            <DialogButton
              text="Close"
              onPress={() => {
                this.scaleAnimationDialog.dismiss();
              }}
            />,
          ]}>
          <View style={styles.dialogContentView}>
            <Text>Here is an example of scale animation dialog.</Text>
          </View>
        </PopupDialog>
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
    height: 150,
    width: 350,
  }
});
