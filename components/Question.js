import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Question extends React.Component {
  state = {
    answers: ['', '', '', ''],
    correct: null,
    selected: null,
    type: null,
  };

  componentDidMount() {
    this.generate();
  }

  render() {
    return (
      <View style={styles.flex1}>
        <View style={[styles.flex1, { justifyContent: 'center' }]}>
          <Text style={styles.question}>{this.question}</Text>
        </View>
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
    const correct = 1 + random(SURAS.length - 2);
    const type = random(2);
    const answers = [];
    for (let i = 0; i < 3; i++)
      answers.push(
        find(
          () => correct + 5 - random(11),
          value =>
            value > -1 &&
            value < 114 &&
            value !== correct - 1 &&
            value !== correct &&
            value !== correct + 1 &&
            answers.indexOf(value) === -1
        )
      );
    answers.splice(random(4), 0, correct);
    console.log(answers);
    this.setState({ answers, correct, type, selected: null });
  }

  get question() {
    switch (this.state.type) {
      case 0:
        return `Que significa Main?`;
      case 1:
        return `Que significa Include?`;
    }
  }

  color(id) {
    const { correct, selected } = this.state;
    const answer = this.state.answers[id];
    if (selected === answer && correct !== answer) return 'red';
    if (selected) return correct === answer ? 'green' : 'grey';
    return null;
  }

  select(id) {
    if (this.state.selected != null) return;
    const selected = this.state.answers[id];
    this.setState({ selected });
    if (this.state.correct === selected) {
      if (this.props.onCorrect) this.props.onCorrect();
    } else if (this.props.onWrong) this.props.onWrong();
    setTimeout(() => this.generate(), 3000);
  }

  answer(id) {
    return SURAS[this.state.answers[id]] || '';
  }
  answerOffset(offset = 0) {
    return SURAS[this.state.correct + offset];
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },

  flex1: {
    flex: 1,
    padding: 1,
  },

  question: {
    fontSize: 32,
    textAlign: 'center',
  },
});

const SURAS = [
  'Para incluir',
  'Função',
  'A Função Principal',
  'Código',
  'Para compilar',
  'Biblioteca',
  'Programa',
];

function random(n) {
  return Math.floor(n * Math.random());
}

function find(seeder, condition) {
  for (const value of (function*(f) {
    while (true) yield seeder();
  })())
    if (condition(value)) return value;
}
