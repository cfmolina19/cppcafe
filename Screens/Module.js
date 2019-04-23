import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert, Image } from "react-native";
import { Card } from "react-native-paper";
import ModuleContent from "../components/ModuleContent";
import { Constants } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#D2691E",
    padding: 10
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});

const trans = {
  module: {
    1: {
      title: {
        en: "Mod1 Title EN",
        pt: "Lição 1 - Introdução\n Olá, Mundo!",
        es: "Modulo 1:\nIntroduction\nHola, Mundo!"
      },
      pages: 8
    },
    2: {
      title: {
        en: "Mod2 Title EN",
        pt: "Lição 2 -\nVariaveis e Tipos\nDeclarações Condicionais",
        es: "Modulo 2:\nVariables y Tipos\nDeclaraciones Condicionales"
      },
      pages: 7
    },
    3: {
      title: {
        en: "Mod3 Title EN",
        pt: "Lição 3 -\nArrays\nStrings",
        es: "Modulo 3:\nArrays y Strings"
      },
      pages: 5
    },
    4: {
      title: {
        en: "Mod4 Title EN",
        pt: "Lição 4 - Loops\nFor loops\nWhile loops",
        es: "Modulo 4:\nLoops, For Loops, While Loops"
      },
      pages: 4
    }
  }
};

class Module extends React.Component {
  static navigationOptions = {
    title: "Menu"
  };
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this._NextPage = this._NextPage.bind(this);
    this._LastPage = this._LastPage.bind(this);
  }

  _NextPage() {
    this.setState({
      page: this.state.page + 1
    });
  }

  _LastPage() {
    this.setState({
      page: this.state.page - 1
    });
  }

  render() {
    const { navigation } = this.props;
    const propLang = navigation.getParam("lang", "en");
    const propMod = navigation.getParam("mod", 1);

    let lastPageBtn;
    let nextPageBtn;
    let quizBtn;

    if (this.state.page > 1) {
      lastPageBtn = <Button title="Previous" onPress={this._LastPage} />;
    }
    if (this.state.page < trans.module[propMod].pages) {
      nextPageBtn = <Button title="Next" onPress={this._NextPage} />;
    }
    if (this.state.page == trans.module[propMod].pages) {
      quizBtn = (
        <Button
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              lang: propLang,
              mod: propMod
            })
          }
          title="Quiz"
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {trans.module[propMod].title[propLang]}
        </Text>

        <Card style={{ flex: 1 }}>
          <ModuleContent
            lang={propLang}
            mod={propMod}
            page={this.state.page}
            pagelimit={trans.module[propMod].pages}
          />
          {/* trans = {
                module: {
                  1: {
                    title: {
                      en: "Mod1 Title EN",
                      pt: "Lição 1 - Introdução\n Olá, Mundo!",
                      es: "Modulo 1:\nIntroduction\nHola, Mundo!"
                    },
                    pages: 8 */}
        </Card>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View style={{ flex: 3 }}>{lastPageBtn}</View>
          <View style={{ flex: 3, paddingLeft: 10, PaddingRight: 10 }}>
            {quizBtn}
          </View>
          <View style={{ flex: 3 }}>{nextPageBtn}</View>
        </View>
      </View>
    );
  }
}
export default Module;
