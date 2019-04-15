import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";

const lang = {
  all: {
    imgPath: ""
  },
  en: {
    sel: "english",
    page: {
      1: {
        text:
          "Hey programmer! Welcome back to C++ café. In this module, we will learn about variables and conditional statements. Let’s look back at our hello world program from module 1. Did you notice something in front of the “main” function? That’s right! What you see is INT. This is an example of a type. Any function or variable has a type. Here are a list of common types…\n\nInt, String, Char, Void\n\nInt is short for integer.\n\n[[[[“Integer” - (definition)]]]]\n\nInts are simply numbers, like 1, 2, and 3!",
        vocabDef: "",
        imagePath: "../assets/caffeina.png",
        vocabWord: "Integer"
      },
      2: {
        text:
          "Now that we know what types are, let’s look at what they describe. Do you remember what types describe?\n\nGreat! As we learned previously, types can describe functions and variables. Let’s first look at variables. We will talk about defining functions later. Below is the structure of defining a variable.",
        vocabWord: "Programs and Libraries",
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
          "Olá, Programador! Bem-vindo de volta ao C++ Café! Neste capítulo, aprendemos sobre variáveis e declarações condicionais. Vamos rever nosso programa do primeiro capítulo, Olá mundo. Você percebe algo na frente da função Main? Claro! É um INT. Isso é um exemplo de um variável. Qualquer função ou variável tem algum tipo. Aqui tem uma lista de tipos comuns...\n\nInt, String, Char, Void\n\nINT é a abreviatura para Integer\n\nInts são simplesmente numeros, como 1, 2, e 3!",
        vocabDef: "Integer: Número Inteiro",
        imagePath: "",
        vocabWord: "Integer"
      },
      2: {
        text:
          "Agora que sabemos sobre os tipos de C++, vamos ver o que significam. Você se lembra do que os tipos descrevem?\n\nÓtimo! Como aprendemos antes, tipos em programação podem descrever funções e  variáveis. Abaixo tem o estrutura para definir uma variável.",
        vocabWord: "Programs and Libraries",
        vocabDef: "Correto",
        imagePath: "../assets/code.png",
        header: ""
      },
      3: {
        text:
          "Vemos que a função é de tipo void. Uma função com tipo void, não nos entrega um resultado.\nAgora vemos a variavel de tipo INT. Você se lembra que significa o variavel int?",
        vocabWord: "Integer",
        vocabDef: "Integer: Numero entero",
        imagePath: "../assets/code.png"
      },
      4: {
        text:
          "Agora, vamos falar do tipo “string”. Esta palavra não se traduz facilmente, mas tem que confiar em mim! \nUm string é basicamente uma, como “exemplo”. O motivo que se chama string é porque é uma coleção de letras. Isso pode ser identificado como um string -\n S-t-r-i-n-g\nAgora entende? Cada letra forma uma parte do String",
        vocabWord: "String",
        vocabDef: "String: colección de las letras",
        imagePath: "../assets/code.png"
      },
      5: {
        text:
          "Characters são letras individuais como a, b, c, ou d.\n\nPercebe que aquelas variáveis têm nomes diferentes? Podemos dar qualquer nome ou apelido a cada variável, mas devemos tentar denominar-los de maneira que faz sentido com o propósito dela.\n\n Por exemplo, uma variável com o nome de word provavelmente seja de tipo String. É boa prática fazer a denominação para que qualquer pessoa pode entender o que programamos!Quando os tipos são usados para descrever os variáveis, devemos devolver um resultado com um variável de tipo igual do tipo de função.\n\nPor exemplo...",
        vocabWord: "Character",
        vocabDef: "Character: Letra individual",
        imagePath: "../assets/code.png"
      },
      6: {
        text:
          "Bom trabalho! Agora que sabemos todo sobre os tipos, aprenderemos sobre algo fundamental - declarações condicionais. \nVamos ver um exemplo de declaração condicional e depois analisaremos. \nVê as palavras inglesas que aparecem no primeiro condicional? Qual palavras formam parte da declaração condicional?",
        vocabWord: "IF & ELSE",
        vocabDef: "IF: SE... ELSE: Em vez que",
        imagePath: "../assets/code.png"
      },
      7: {
        text:
          "Partes da declaração condicional são if y else. \n A primeira parte do condicional é if. Em () de if, especificamos o condicional. Se este condição é satisfeita, o programa continua com o code depois de if, dentro dos { }. Se a condição de if não é satisfeita, o programa ignora o if e salta para o que fica dentro de else, neste caso, resultaria num return de 0.",
        vocabDef: "",
        imagePath: "../assets/code.png"
      },
      8: {
        text: "Genial! Nuestro primer programa funciona!",
        vocabWord: "",
        vocabDef: "",
        imagePath: "../assets/code.png"
      }
    }
  },
  es: {
    sel: "spanish",
    page: {
      1: {
        text:
          "Hola programador! Bienvenido de regreso a C++ Cafe. En este capítulo aprenderemos sobre variables y declaraciones condicionales. Repasemos nuestro programa del primer capítulo, bienvenido al mundo. Notaste algo después de nuestra función principal? Correcto! Lo que ves es un INT. Este es un ejemplo de un tipo. Cualquier función o variable tiene un tipo. Esta es una lista de tipos comunes...\n\nInt, String, Char, Void\n\nINT es la abreviatura para número entero.\n\nInts o números enteros son como 1, 2, y 3.",
        vocabDef: "Integer: número entero",
        imagePath: "../assets/caffeina.png",
        vocabWord: "Integer"
      },
      2: {
        text:
          "Ahora que sabemos que son tipos, miremos a ver que describen. Recuerdas que significa cada tipo?\n\nGenial!\n\nComo aprendimos antes, tipos puedes describir funciones y variables. Primero miremos a los variables. Vamos a hablar sobre funciones despues. Abajo puedes ver una estrucutra para definir un variable.",
        vocabWord: "Include",
        vocabDef: "Include:\nIncluir recursos de codigo",
        imagePath: "../assets/code.png"
      },
      3: {
        text:
          "Vemos que la función es de tipo void.Una función con tipo void no nos entregará un resultado.\n Ahora vemos el variable tipo INT. Recuerdas que significa el variable int?",
        vocabWord: "Integer",
        vocabDef: "Integer: Numero entero",
        imagePath: "../assets/code.png"
      },
      4: {
        text:
          "Ahora, hablemos sobre el tipo “string”. Esto no traduce fácilmente, pero tendras que confiar en mi!\nUn string es básicamente una palabra, como “ejemplo”. La razón por la cual se llama string es porque es una colección de letras. Esto puede ser identificado como un string: \nS-t-r-i-n-g \n\nLo ves? Cada letra forma parte de el string",
        vocabWord: "String",
        vocabDef: "String: colección de las letras",
        imagePath: "../assets/code.png"
      },
      5: {
        text:
          "Characters son letras individuales como a, b, c, o d. \n\nHas notado que estos variables tienen diferentes nombres? Podemos darle cualquier apodo a cada variable, pero deberíamos intentar en identificarlos de tal manera que haga sentido con su propósito. Por ejemplo, un variable con el nombre word hace sentido que sea de tipo string. Es buena práctica hacer esto para que cualquier persona pueda entender lo que programamos! \n\nCuando los tipos son usados para describir los variables, debemos devolver un resultado con un variable o valor que comparta el mismo tipo.\n\nPor ejemplo...",
        vocabWord: "Character",
        vocabDef: "Character: Letra individual",
        imagePath: "../assets/code.png"
      },
      6: {
        text:
          "Tenemos bastantes preguntas nuevas! Repasemoslas.\n\nProbablemente notaste que cout se ve diferente que out y endl de end. \nCout es simplemente el hecho de imprimir el texto en el lenguaje C. \nEndl se puede considerar como fin de línea. Esto significa que al imprimir en la pantalla, la computadora empezaria una nueva línea.",
        vocabWord: "IF & ELSE",
        vocabDef: "IF: Si. ELSE: En vez que",
        imagePath: "../assets/code.png"
      },
      7: {
        text:
          "Partes de la declaración condicional son if y else. \n La primera parte del condicional es if. En () para if, especificamos la condicional. Si esta condición resulta ser cierta ingresamos y ejecutaremos lo que contiene por dentro { }. Si sucede resultaría en un hecho, 1, y si no resultaría en un 0.",
        vocabDef: "",
        imagePath: "../assets/code.png",
        vocabWord: ""
      },
      8: {
        text: "Genial! Nuestro primer programa funciona!",
        vocabWord: "",
        vocabDef: "",
        imagePath: "../assets/code.png"
      }
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
          <Image
            style={styles.image}
            source={require("../assets/types-for-variables.png")}
          />
        );
      }
      if (this.props.page == 3) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/types-for-variables.png")}
          />
        );
      }
      if (this.props.page == 4) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/types-for-variables.png")}
          />
        );
      }
      if (this.props.page == 5) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/type-returns.png")}
          />
        );
      }
      if (this.props.page == 6) {
        image = (
          <Image
            style={styles.image}
            source={require("../assets/type-returns.png")}
          />
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
