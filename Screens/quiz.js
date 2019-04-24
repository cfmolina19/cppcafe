import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";

export default class App extends React.Component {
  static navigationOptions = {
    title: "Module"
  };
  state = {
    correct: 0,
    wrong: 0
  };

  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "en");
    const propMod = navigation.getParam("mod", 1);

    return (
      <React.Fragment>
        <Header
          correct={this.state.correct}
          wrong={this.state.wrong}
          onClear={() => this.setState({ correct: 0, wrong: 0 })}
        />
        <Question
          lang={propLang}
          mod={propMod}
          onCorrect={() => this.setState({ correct: this.state.correct + 1 })}
          onWrong={() => this.setState({ wrong: this.state.wrong + 1 })}
        />
      </React.Fragment>
    );
  }
}
