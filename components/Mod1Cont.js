import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import SplashScreen from "../Screens/SplashScreen";
import i18n from "i18n-js";
import { Constants } from "expo";
import { Localization } from "expo";
// import images from "../assets";

// const images = require.context("../assets", true);
// const dog = images('./dog.png');
// let animal = images(`./${someVariable}.png`);

const lang = {
  en: {
    sel: "english",
    page: {
      1: {
        text:
          "Almost all programmers start programming simple programs. No program is more infamous than “Hello world”. Before we look at our first hello world program, let’s look at the main components of a c++ program, from top to bottom.",
        vocabDef: "",
        imagePath: "../assets/caffeina.png",
        vocabWord: ""
      },
      2: {
        text:
          "Since c++ is an english based programming language, it is useful to learn some english words. At the very top of c++ programs, we will see something we call, libraries, or (spanish/portuguese word). Think of libraries as tool kits. For some tasks, we need to have specific tools. We need to remember to include these tools so that we have access to them when needed. In english include means",
        vocabWord: "Include",
        vocabDef: "Include: Para incluir",
        imagePath: "../assets/code.png"
      },
      3: {
        text:
          "Next, you will see something called a “function”. We will only be working with a function called “main” for now. Functions can have any name, and the names normally reflect their purpose. You can think of the main function like the lobby of an office. All other rooms eventually lead back to the lobby.",
        vocabWord: "Main",
        vocabDef: "Main: A função principal",
        imagePath: "../assets/code.png"
      },
      4: {
        text:
          "Functions are contained using these brackets { … }. The first { indicates the beginning of the function, and the last } indicates the end. Inside these brackets are where we will write our first hello world program. Before we do this, let’s review some of the vocabulary",
        vocabWord: "Novas palavras",
        vocabDef:
          "Main: A função principal \n Include: Para Incluir \n Muito Bem!",
        imagePath: "../assets/code.png"
      },
      5: {
        text:
          "Good job! Now, inside the brackets, we can start our hello world program! The purpose of a “hello world” program is to print “hello world” onto the screen. If we want to print something to the screen, we need to have the appropriate tools for printing. Where do we get our tools again?",
        vocabWord: "Library",
        vocabDef:
          "Library: Biblioteca! \n Ótimo! O library que precisamos para imprimir é chamado iostream. Agora que temos nosso biblioteca, vamos a implementar. Para imprimir podemos usar o formato, cout << “...” << endl;",
        imagePath: "../assets/code.png"
      },
      6: {
        text:
          "Wow, there are a lot of new words here! Let’s break this down. You probably noticed that cout looks different than out and endl looks different than end. Cout is simply the syntax, since we are using the language, c. Endl can be read as *end line*. This means that when we print to the screen, the computer will begin a new *line*",
        vocabWord: "Out",
        vocabDef: "Fora",
        imagePath: "../assets/code.png"
      },
      7: {
        text:
          "Ok! Now we are ready to finish our program. Many functions require the user to return a value. This will be more important with advanced programs, but for now let’s just return 0. Ok! I think we are ready to run our program now. Let’s see what will print on the screen.",
        vocabWord: "Toque aqui para compilar este Code",
        vocabDef: "Compilado, toque Next para ver o resultado",
        imagePath: "../assets/code.png"
      },
      8: {
        text: "How cool! Our first program works!",
        vocabWord: "",
        vocabDef: "",
        imagePath: "../assets/code.png"
      }
    }
  },
  pt: {
    sel: "portuguese",
    page: {
      1: {
        text:
          "Quase todos os programadores começar a programar com programas básicos. Nenhum programa é mais popular para aprender que o chamado “Hello, World”, ou “Olá, Mundo”. Antes de começar a programar, vamos olhar nas ingredientes essenciais de um programa de C++.",
        vocabDef: "",
        imagePath: "",
        vocabWord: ""
      },
      2: {
        text:
          "Como C++ é uma linguagem baseada em inglês, é importante aprender algumas palavras inglesas. Em cada programa de C, é normal iniciar com libraries, ou bibliotecas. Pense nisso como caixas de ferramentas. Para conseguir tarefas específicas, precisamos ter ferramentas adequadas. Também, a gente tem que lembrar incluir estas ferramentas para ter acesso a elas. Em inglês, a palavra include se traduz para incluir",
        vocabWord: "",
        vocabDef: "",
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

  render() {
    let textShown;
    let vocabBtn;
    let image;
    let page = this.props.page;

    // let imgPath = lang[this.props.lang].page[this.props.page].imagePath;

    //Page exists
    if (lang[this.props.lang].page[this.props.page]) {
      //text exists
      if (lang[this.props.lang].page[this.props.page].text) {
        textShown = (
          <Text>{lang[this.props.lang].page[this.props.page].text}</Text>
        );
      }

      //vocab exists
      if (
        lang[this.props.lang].page[this.props.page].vocabDef &&
        lang[this.props.lang].page[this.props.page].vocabWord
      ) {
        let word = lang[this.props.lang].page[this.props.page].vocabWord;
        let def = lang[this.props.lang].page[this.props.page].vocabDef;
        vocabBtn = <Button title={word} onPress={() => Alert.alert(def)} />;
      }

      //IMG DYNAMIC - NOT WORKING RN
      // if (lang[this.props.lang].page[this.props.page].imagePath) {
      //   image = (
      //     <Image
      //       style={styles.image}
      //       source={require("../assets/caffeina.png")}
      //     />
      //   );
      // }

      //TEMP IMG FIX
      //   if (lang[this.props.lang].page[this.props.page].imagePath != null) {
      if (this.props.page == 1) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/caffeina.png")}
          />
        );
      }
      if (this.props.page == 2) {
        image = (
          <Image style={styles.image} source={require("../assets/code.png")} />
        );
      }
      if (this.props.page == 3) {
        image = (
          <Image style={styles.image} source={require("../assets/code.png")} />
        );
      }
      if (this.props.page == 4) {
        image = (
          <Image style={styles.image} source={require("../assets/code.png")} />
        );
      }
      if (this.props.page == 5) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/caffeina.png")}
          />
        );
      }
      if (this.props.page == 6) {
        image = (
          <Image style={styles.image} source={require("../assets/code.png")} />
        );
      }
      if (this.props.page == 7) {
        image = (
          <Image style={styles.image} source={require("../assets/code.png")} />
        );
      }
      if (this.props.page == 8) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/hiworld.png")}
          />
        );
      }
      //   }
    }

    return (
      <View style={styles.container}>
        <View
          style={{
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {textShown}
        </View>

        <View
          style={{
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {vocabBtn}
        </View>

        <View
          style={{
            height: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {image}
        </View>

        <View style={{ height: "10%" }}>
          <Text>
            {"\n"}Lesson {this.props.page}/8
          </Text>
        </View>
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
