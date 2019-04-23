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
    let mod = this.props.mod;
    let lang = this.props.lang;

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
            en: "M1 EN 1Q",
            pt: "M1 PT 1Q",
            es: "M1 ES 1Q"
          }
        },
        2: {
          lang: {
            en: "M1 EN 2Q",
            pt: "M1 PT 2Q",
            es: "M1 ES 2Q"
          }
        },
        3: {
          lang: {
            en: "M1 EN 3Q",
            pt: "M1 PT 3Q",
            es: "M1 ES 3Q"
          }
        }
      },
      a: {
        //answers
        1: {
          lang: {
            en: "M1 EN 1A",
            pt: "M1 PT 1A",
            es: "M1 ES 1A"
          }
        },
        2: {
          lang: {
            en: "M1 EN 2A",
            pt: "M1 PT 2A",
            es: "M1 ES 2A"
          }
        },
        3: {
          lang: {
            en: "M1 EN 3A",
            pt: "M1 PT 3A",
            es: "M1 ES 3A"
          }
        }
      },
      c: {
        //choices
        1: {
          lang: {
            en: ["M1 EN Q1 C1", "M1 EN Q1 C2", "M1 EN Q1 C3", "M1 EN 1A"],
            pt: "M1 PT 1A",
            es: "M1 ES 1A"
          }
        },
        2: {
          lang: {
            en: ["M1 EN Q2 C1", "M1 EN 2A", "M1 EN Q2 C3", "M1 EN Q2 C4"],
            pt: "M1 PT 2A",
            es: "M1 ES 2A"
          }
        },
        3: {
          lang: {
            en: ["M1 EN 3A", "M1 EN Q3 C2", "M1 EN Q3 C3", "M1 EN Q3 C4"],
            pt: "M1 PT 3A",
            es: "M1 ES 3A"
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
