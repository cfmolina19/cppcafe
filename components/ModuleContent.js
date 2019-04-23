import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";

const trans = {
  module: {
    1: {
      page: {
        1: {
          text: {
            lang: {
              en: "m1,pg1,textEN",
              pt: "m1,pg1,textPT",
              es: "m1,pg1,textES"
            }
          },
          word: {
            lang: {
              en: "m1,pg1,wordEN",
              pt: "m1,pg1,wordPT",
              es: "m1,pg1,wordES"
            }
          },
          definition: {
            lang: {
              en: "m1,pg1,defEN",
              pt: "m1,pg1,defPT",
              es: "m1,pg1,defES"
            }
          },
          imgPath: "../assets/caffeina.png"
        },
        2: {
          text: {
            lang: {
              en: "m1,pg2,textEN",
              pt: "m1,pg2,textPT",
              es: "m1,pg2,textES"
            }
          },
          word: {
            lang: {
              en: "m1,pg2,wordEN",
              pt: "m1,pg2,wordPT",
              es: "m1,pg2,wordES"
            }
          },
          definition: {
            lang: {
              en: "m1,pg2,defEN",
              pt: "m1,pg2,defPT",
              es: "m1,pg2,defES"
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    },
    2: {
      page: {
        1: {
          text: {
            lang: {
              en: "m2,pg1,textEN",
              pt: "m2,pg1,textPT",
              es: "m2,pg1,textES"
            }
          },
          word: {
            lang: {
              en: "m2,pg1,wordEN",
              pt: "m2,pg1,wordPT",
              es: "m2,pg1,wordES"
            }
          },
          definition: {
            lang: {
              en: "m2,pg1,defEN",
              pt: "m2,pg1,defPT",
              es: "m2,pg1,defES"
            }
          },
          imgPath: "../assets/caffeina.png"
        }
      }
    }
  }
};

// const lang = {
//   all: {
//     imgPath: ""
//   },
//   en: {
//     sel: "english",
//     page: {
//       1: {
//         text:
//           "Almost all programmers start programming simple programs. No program is more infamous than “Hello world”. Before we look at our first hello world program, let’s look at the main components of a c++ program, from top to bottom.",
//         vocabDef: "",
//         imagePath: "../assets/caffeina.png",
//         vocabWord: ""
//       },
//       2: {
//         text:
//           "Since c++ is an english based programming language, it is useful to learn some english words. At the very top of c++ programs, we will see something we call, libraries, or (spanish/portuguese word). Think of libraries as tool kits. For some tasks, we need to have specific tools. We need to remember to include these tools so that we have access to them when needed. In english include means",
//         vocabWord: "Include",
//         vocabDef: "Include: Para incluir",
//         imagePath: "../assets/code.png"
//       },
//       3: {
//         text:
//           "Next, you will see something called a “function”. We will only be working with a function called “main” for now. Functions can have any name, and the names normally reflect their purpose. You can think of the main function like the lobby of an office. All other rooms eventually lead back to the lobby.",
//         vocabWord: "Main",
//         vocabDef: "Main: A função principal",
//         imagePath: "../assets/code.png"
//       },
//       4: {
//         text:
//           "Functions are contained using these brackets { … }. The first { indicates the beginning of the function, and the last } indicates the end. Inside these brackets are where we will write our first hello world program. Before we do this, let’s review some of the vocabulary",
//         vocabWord: "Novas palavras",
//         vocabDef:
//           "Main: A função principal \n Include: Para Incluir \n Muito Bem!",
//         imagePath: "../assets/code.png"
//       },
//       5: {
//         text:
//           "Good job! Now, inside the brackets, we can start our hello world program! The purpose of a “hello world” program is to print “hello world” onto the screen. If we want to print something to the screen, we need to have the appropriate tools for printing. Where do we get our tools again?",
//         vocabWord: "Library",
//         vocabDef:
//           "Library: Biblioteca! \n Ótimo! O library que precisamos para imprimir é chamado iostream. Agora que temos nosso biblioteca, vamos a implementar. Para imprimir podemos usar o formato, cout << “...” << endl;",
//         imagePath: "../assets/code.png"
//       },
//       6: {
//         text:
//           "Wow, there are a lot of new words here! Let’s break this down. You probably noticed that cout looks different than out and endl looks different than end. Cout is simply the syntax, since we are using the language, c. Endl can be read as *end line*. This means that when we print to the screen, the computer will begin a new *line*",
//         vocabWord: "Out",
//         vocabDef: "Fora",
//         imagePath: "../assets/code.png"
//       },
//       7: {
//         text:
//           "Ok! Now we are ready to finish our program. Many functions require the user to return a value. This will be more important with advanced programs, but for now let’s just return 0. Ok! I think we are ready to run our program now. Let’s see what will print on the screen.",
//         vocabWord: "Toque aqui para compilar este Code",
//         vocabDef: "Compilado, toque Next para ver o resultado",
//         imagePath: "../assets/code.png"
//       },
//       8: {
//         text: "How cool! Our first program works!",
//         vocabWord: "",
//         vocabDef: "",
//         imagePath: "../assets/code.png"
//       }
//     }
//   },
//   pt: {
//     sel: "portuguese",
//     page: {
//       1: {
//         text:
//           "Casi todos los programadores empiezan a programar cosas básicas. Ningún programa tiene más fama que el que es llamada “Bienvenido al mundo.” Antes de empezar con este programa, aprendamos sobre los ingredientes más esenciales de un programa en C++.",
//         vocabDef: "",
//         imagePath: "",
//         vocabWord: ""
//       },
//       2: {
//         text:
//           "Como C++ é uma linguagem baseada em inglês, é importante aprender algumas palavras inglesas. Em cada programa de C, é normal iniciar com libraries, ou bibliotecas. Pense nisso como caixas de ferramentas. Para conseguir tarefas específicas, precisamos ter ferramentas adequadas. Também, a gente tem que lembrar incluir estas ferramentas para ter acesso a elas. Em inglês, a palavra include se traduz para incluir",
//         vocabWord: "",
//         vocabDef: "",
//         imagePath: "../assets/code.png",
//         header: ""
//       }
//     }
//   },
//   es: {
//     sel: "spanish",
//     page: {
//       1: {
//         text:
//           "Casi todos los programadores empiezan a programar cosas básicas. Ningún programa tiene más fama que el que es llamada “Bienvenido al mundo.”\n\nAntes de empezar con este programa, aprendamos sobre los ingredientes más esenciales de un programa en C++.",
//         vocabDef: "",
//         imagePath: "../assets/caffeina.png",
//         vocabWord: ""
//       },
//       2: {
//         text:
//           "Como C++ es un lenguaje creado en inglés, es importante aprender ciertas palabras.\n\nEn cada programa de C++ vamos a ver algo llamado libraries, o bibliotecas. Estas bibliotecas son cajas de herramientas. Para cumplir algunas metas, necesitamos usar ciertas herramientas.\n\nNecesitamos acordarnos de incluir a estas herramientas para poder accederlas cuando las necesitemos. Otra palabra, include, significa incluir.",
//         vocabWord: "Include",
//         vocabDef: "Include:\nIncluir recursos de codigo",
//         imagePath: "../assets/code.png"
//       },
//       3: {
//         text:
//           "Ahora vamos a ver algo llamada una *function*. Solo vamos a estar trabajando con una función llamada *main* o principal por ahora.\n\nFunciones pueden tener cualquier nombre, y los nombres normalmente dicen mucho de su propósito. Puedes imaginarte que la función de main como la sala de espera de una oficina. Todos los otros cuartos terminan regresando a ella.",
//         vocabWord: "Main",
//         vocabDef: "Main:\nFuncion principal",
//         imagePath: "../assets/code.png"
//       },
//       4: {
//         text:
//           "Funciones contienen {...}.\n\nLa primera { indican el comienzo de la función y la última } indica su final.\n\nAdentro de ellas es donde tendremos nuestro primer programa de bienvenido al mundo. Antes de esto, repasemos un poco nuestro vocabulario.",
//         vocabWord: "Nuevas palabras",
//         vocabDef:
//           "Main:\nFuncion principal\n\nInclude:\nIncluir recursos de codigo\n\nSuper!",
//         imagePath: "../assets/code.png"
//       },
//       5: {
//         text:
//           "Excelente trabajo!\n\nAhora, entre los soportes necesitamos escribir nuestro programa de bienvenido al mundo! El propósito del programa *bienvenido al mundo* es para imprimir *bienvenido al mundo* a la pantalla.\n\nSi queremos imprimir algo necesitamos las herramientas indicadas para imprimir.\n\nDonde es que conseguimos nuestras herramientas?",
//         vocabWord: "Library",
//         vocabDef:
//           "Library: Biblioteca! \n\nExcelente! La library que necesitamos en este caso para imprimir se llama iostream. Ahora que tenemos nuestra biblioteca, usemosla! Para imprimir podemos usar el formato, cout << “...” << endl;",
//         imagePath: "../assets/code.png"
//       },
//       6: {
//         text:
//           "Tenemos bastantes preguntas nuevas! Repasemoslas.\n\nProbablemente notaste que cout se ve diferente que out y endl de end. \nCout es simplemente el hecho de imprimir el texto en el lenguaje C. \nEndl se puede considerar como fin de línea. Esto significa que al imprimir en la pantalla, la computadora empezaria una nueva línea.",
//         vocabWord: "Out / End",
//         vocabDef: "Out / End\nFuera / Fin",
//         imagePath: "../assets/code.png"
//       },
//       7: {
//         text:
//           "Bueno! Ahora estamos listos para terminar nuestro programa.\n\nHay muchas funciones que requieren que el usuario retorne un valor. Esto es usado más con programas avanzados - por ahora simplemente retornemos un 0. \n\nListo! Ahora estamos listos para ensayar nuestro programa. Veamos que vamos a imprimir en la pantalla.",
//         vocabWord: "Toque aqui para compilar este Code",
//         vocabDef: "Compilado!",
//         imagePath: "../assets/code.png"
//       },
//       8: {
//         text: "Genial! Nuestro primer programa funciona!",
//         vocabWord: "",
//         vocabDef: "",
//         imagePath: "../assets/code.png"
//       }
//     }
//   }
// };

export default class ModuleContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let textShown;
    let vocabBtn;
    let image;
    let propsPage = this.props.page;
    let propsMod = this.props.mod;
    let propsLang = this.props.lang;

    // let imgPath = lang[this.props.lang].page[this.props.page].imagePath;

    //Page exists

    if (trans.module[propsMod].page[propsPage]) {
      // if (lang[this.props.lang].page[this.props.page]) {
      //text exists
      if (trans.module[propsMod].page[propsPage].text.lang[propsLang]) {
        textShown = (
          <Text>
            {trans.module[propsMod].page[propsPage].text.lang[propsLang]}
          </Text>
        );
      }
      // if (lang[this.props.lang].page[this.props.page].text) {
      //   textShown = (
      //     <Text>{lang[this.props.lang].page[this.props.page].text}</Text>
      //   );
      // }

      //vocab exists
      if (
        trans.module[propsMod].page[propsPage].word[propsLang] &&
        trans.module[propsMod].page[propsPage].definition[propsLang]
      ) {
        let word = trans.module[propsMod].page[propsPage].word[propsLang];
        let def = trans.module[propsMod].page[propsPage].definition[propsLang];
        vocabBtn = <Button title={word} onPress={() => Alert.alert(def)} />;
      }

      // if (
      //   lang[this.props.lang].page[this.props.page].vocabDef &&
      //   lang[this.props.lang].page[this.props.page].vocabWord
      // ) {
      //   let word = lang[this.props.lang].page[this.props.page].vocabWord;
      //   let def = lang[this.props.lang].page[this.props.page].vocabDef;
      //   vocabBtn = <Button title={word} onPress={() => Alert.alert(def)} />;
      // }

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
