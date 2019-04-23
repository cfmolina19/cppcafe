import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    choices: ["", "", "", ""],
    correct: null,
    selected: null,
    question: null
  };

  componentDidMount() {
    this.generate();
  }

  render() {
    let propsMod = this.props.mod;
    let propsLang = this.props.lang;

    return (
      <View style={styles.flex1}>
        {/* Question */}
        <View style={[styles.flex1, { justifyContent: "center" }]}>
          <Text style={styles.question}>{this.question}</Text>
        </View>

        {/* Ans choices listed below */}
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Button
              color={this.color(0)}
              title={this.answer(0)}
              onPress={() => this.select(0)}
            />
          </View>
          <View style={styles.flex1}>
            <Button
              color={this.color(1)}
              title={this.answer(1)}
              onPress={() => this.select(1)}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.flex1}>
            <Button
              color={this.color(2)}
              title={this.answer(2)}
              onPress={() => this.select(2)}
            />
          </View>
          <View style={styles.flex1}>
            <Button
              color={this.color(3)}
              title={this.answer(3)}
              onPress={() => this.select(3)}
            />
          </View>
        </View>
      </View>
    );
  }

  generate() {
    const question = random(3) + 1;
    const choices =
      trans.module[this.props.mod].c[question].lang[this.props.lang];
    let correct =
      trans.module[this.props.mod].a[question].lang[this.props.lang];
    this.setState({ choices, correct, question, selected: null });
  }

  get question() {
    switch (this.state.question) {
      case 1:
        return trans.module[this.props.mod].q[1].lang[this.props.lang];
      case 2:
        return trans.module[this.props.mod].q[2].lang[this.props.lang];
      case 3:
        return trans.module[this.props.mod].q[3].lang[this.props.lang];
    }
  }

  color(id) {
    const { correct, selected } = this.state; //correct and selected are strings
    const answer = this.state.choices[id]; //string
    if (selected === answer && correct !== answer) return "red";
    if (selected) return correct === answer ? "green" : "grey";
    return null;
  }

  select(id) {
    if (this.state.selected != null) return; //if not selected, do nothing
    const selected = this.state.choices[id]; //retrieve selection text
    this.setState({ selected }); //set selection text to state
    if (this.state.correct === selected) {
      //check if selection is correct answer
      if (this.props.onCorrect) this.props.onCorrect();
    } else if (this.props.onWrong) this.props.onWrong();
    setTimeout(() => this.generate(), 3000);
  }

  answer(id) {
    return this.state.choices[id];
    // return SURAS[this.state.choices[id]] || "";
  }
  // answerOffset(offset = 0) {
  //   return SURAS[this.state.correct + offset];
  // }
}

const trans = {
  module: {
    1: {
      q: {
        //questions
        1: {
          lang: {
            en: "What does main mean?",
            pt: "Que significa main?",
            es: "Que significa main?"
          }
        },
        2: {
          lang: {
            en: "What is a library?",
            pt: "Que significa library?",
            es: "Que significa library?"
          }
        },
        3: {
          lang: {
            en: "What is at the end of the function body? ",
            pt: "Como contém um corpo de uma função? ",
            es: "Que esta a lo ultimo de una funcion?"
          }
        }
      },
      a: {
        //answers
        1: {
          lang: {
            en: "the main function",
            pt: "a função principal",
            es: "Una funcion principal"
          }
        },
        2: {
          lang: {
            en: "M1 EN 2A",
            pt: "biblioteca",
            es: "Biblioteca"
          }
        },
        3: {
          lang: {
            en: "{...}",
            pt: "{...}",
            es: "{...}"
          }
        }
      },
      c: {
        //choices
        1: {
          lang: {
            en: ["the main function", "integer", "program", "to include"],
            pt: ["a função principal", "número inteiro", "programa", "incluir"],
            es: ["Un programa", "Un numero", "Una funcion principal", "incluir"]
          }
        },
        2: {
          lang: {
            en: ["M1 EN Q2 C1", "M1 EN 2A", "M1 EN Q2 C3", "M1 EN Q2 C4"],
            pt: ["biblioteca", "função principal", "ferramentas", "void"],
            es: ["void", "Funcion principal", "herramientas", "Biblioteca"]
          }
        },
        3: {
          lang: {
            en: ["{...}", "[...]", "(...)", ";...;"],
            pt: ["{...}", "[...]", "(...)", ";...;"],
            es: ["{...}", "[...]", "(...)", ";...;"]
          }
        }
      }
    },
    2: {
      q: {
        //questions
        1: {
          lang: {
            en: "",
            pt: "Quais desses não é um tipo? \n Int, String, Char, variable",
            es: "Cual de estos no es un tipo? Int, String, Char, Variable"
          }
        },
        2: {
          lang: {
            en: "",
            pt: "if and else são parte de ...",
            es: "If y Else es parte de un... "
          }
        },
        3: {
          lang: {
            en: "",
            pt: "Qual função não returna nada?",
            es: "Cual tipo de funcion no devuelve nada?"
          }
        }
      },
      a: {
        //answers
        1: {
          lang: {
            en: "",
            pt: "variavel",
            es: "Variable"
          }
        },
        2: {
          lang: {
            en: "M1 EN 2A",
            pt: "declaração conditional",
            es: "Declaracion condicional"
          }
        },
        3: {
          lang: {
            en: "M1 EN 3A",
            pt: "void",
            es: "Void"
          }
        }
      },
      c: {
        //choices
        1: {
          lang: {
            en: ["the main function", "integer", "program", "to include"],
            pt: ["variavel", "String", "Char", "Int"],
            es: ["Variable", "String", "Char", "Int"]
          }
        },
        2: {
          lang: {
            en: ["M1 EN Q2 C1", "M1 EN 2A", "M1 EN Q2 C3", "M1 EN Q2 C4"],
            pt: ["declaração conditional", "main", "tipo", "variavel"],
            es: ["Condicional Statement", "Main", "Tipo", "Variable"]
          }
        },
        3: {
          lang: {
            en: ["M1 EN 3A", "M1 EN Q3 C2", "M1 EN Q3 C3", "M1 EN Q3 C4"],
            pt: ["void", "string", "char", "int"],
            es: ["Char", "String", "Void", "Int"]
          }
        }
      }
    },
    3: {
      q: {
        //questions
        1: {
          lang: {
            en: "",
            pt: "O que é um String?",
            es: "Que es un String?"
          }
        },
        2: {
          lang: {
            en: "",
            pt: "O que é um Array?",
            es: "Que es un Array?"
          }
        },
        3: {
          lang: {
            en: "",
            pt: "Qual é o terceiro elemento?",
            es: "Cual es el tercer elemento del String - word?"
          }
        }
      },
      a: {
        //answers
        1: {
          lang: {
            en: "",
            pt: "Coleção das letras",
            es: "coleccion de letras"
          }
        },
        2: {
          lang: {
            en: "",
            pt: "uma estrutura de datos",
            es: "una estructura de datos"
          }
        },
        3: {
          lang: {
            en: "",
            pt: "d",
            es: "d"
          }
        }
      },
      c: {
        //choices
        1: {
          lang: {
            en: ["the main function", "integer", "program", "to include"],
            pt: [
              "Coleção das letras",
              "incluir",
              " uma estrutura de datos",
              "um tipo"
            ],
            es: [
              "coleccion de letras",
              "incluir",
              "una estructura de datos",
              "un tipo"
            ]
          }
        },
        2: {
          lang: {
            en: ["M1 EN Q2 C1", "M1 EN 2A", "M1 EN Q2 C3", "M1 EN Q2 C4"],
            pt: [
              "uma estrutura de datos",
              "Coleção das letras",
              "compilar",
              "uma função"
            ],
            es: [
              "una estructura de datos",
              "coleccion de letras",
              "compilar",
              "una funcion"
            ]
          }
        },
        3: {
          lang: {
            en: ["M1 EN 3A", "M1 EN Q3 C2", "M1 EN Q3 C3", "M1 EN Q3 C4"],
            pt: ["d", "w", "o", "r"],
            es: ["d", "w", "o", "r"]
          }
        }
      }
    },
    4: {
      q: {
        //questions
        1: {
          lang: {
            en: "",
            pt: "Que significa fazer um loop?",
            es: "Que significa hacer un loop?"
          }
        },
        2: {
          lang: {
            en: "",
            pt: "Quantas partes têm um for loop?",
            es: "Cuantas partes tiene un for loop?"
          }
        },
        3: {
          lang: {
            en: "",
            pt: "Até quando executa um while loop?",
            es: "Que esta a lo ultimo de una funcion?"
          }
        }
      },
      a: {
        //answers
        1: {
          lang: {
            en: "",
            pt: "Repetir",
            es: "Repetir"
          }
        },
        2: {
          lang: {
            en: "M1 EN 2A",
            pt: "3",
            es: "3"
          }
        },
        3: {
          lang: {
            en: "",
            pt: "Até que a condição não seja satisfeita",
            es: "Hasta que la condicion no sea cierta"
          }
        }
      },
      c: {
        //choices
        1: {
          lang: {
            en: ["the main function", "integer", "program", "to include"],
            pt: ["Repetir", "Continuar", "estructura de dato", "um tipo"],
            es: ["Repetir", "Continuar", "estructura de dato", "un tipo"]
          }
        },
        2: {
          lang: {
            en: ["M1 EN Q2 C1", "M1 EN 2A", "M1 EN Q2 C3", "M1 EN Q2 C4"],
            pt: ["3", "4", "1", "2"],
            es: ["1", "4", "3", "2"]
          }
        },
        3: {
          lang: {
            en: ["M1 EN 3A", "M1 EN Q3 C2", "M1 EN Q3 C3", "M1 EN Q3 C4"],
            pt: [
              "Até que a condição não seja satisfeita",
              "Depois de 10 loops",
              "depois de que i incremente",
              "nunca"
            ],
            es: [
              "nunca",
              "Despues de 10 loops",
              "despues de que i incremente",
              "Hasta que la condicion no sea cierta"
            ]
          }
        }
      }
    }
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row"
  },

  flex1: {
    flex: 1,
    padding: 1
  },

  question: {
    fontSize: 32,
    textAlign: "center"
  }
});

function random(n) {
  return Math.floor(n * Math.random());
}

function find(seeder, condition) {
  for (const value of (function*(f) {
    while (true) yield seeder();
  })())
    if (condition(value)) return value;
}
