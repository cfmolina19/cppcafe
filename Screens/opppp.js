import React from "react";
import Header from "../components/Header";
import Question from "../components/Question";

export default class App extends React.Component {
  state = {
    correct: 0,
    wrong: 0
  };

  render() {
    return (
      <React.Fragment>
        <Header
          correct={this.state.correct}
          wrong={this.state.wrong}
          onClear={() => this.setState({ correct: 0, wrong: 0 })}
        />
        <Question
          onCorrect={() => this.setState({ correct: this.state.correct + 1 })}
          onWrong={() => this.setState({ wrong: this.state.wrong + 1 })}
        />
      </React.Fragment>
    );
  }
}
