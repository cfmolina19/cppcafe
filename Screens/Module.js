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
        pt: "Mod1 Title PT",
        es: "Mod1 Title ES"
      },
      pages: 8
    },
    2: {
      title: {
        en: "Mod2 Title EN",
        pt: "Mod2 Title PT",
        es: "Mod2 Title ES"
      },
      pages: 8
    },
    3: {
      title: {
        en: "Mod3 Title EN",
        pt: "Mod3 Title PT",
        es: "Mod3 Title ES"
      },
      pages: 8
    },
    4: {
      title: {
        en: "Mod4 Title EN",
        pt: "Mod4 Title PT",
        es: "Mod4 Title ES"
      },
      pages: 8
    }
  }
};

// const lang = {
//   all: {
//     pages: 8
//   },
//   en: {
//     sel: "english",
//     title: {
//       1: "Module 1 - Introduction",
//       2: "Module 2 - Data Types, Variables, Conditional Statements",
//       3: "Module 3 - Arrays, Strings",
//       4: "Module 4 - Loops"
//     }
//   },
//   pt: {
//     sel: "portuguese",
//     title: {
//       1: "Module 1 - Introduction",
//       2: "Module 2 - Data Types, Variables, Conditional Statements",
//       3: "Module 3 - Arrays, Strings",
//       4: "Module 4 - Loops"
//     }
//   },
//   es: {
//     sel: "spanish",
//     title: {
//       1: "Module 1 - Introduction",
//       2: "Module 2 - Data Types, Variables, Conditional Statements",
//       3: "Module 3 - Arrays, Strings",
//       4: "Module 4 - Loops"
//     }
//   }
// };

class Module extends React.Component {
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
    let lesson;

    if (this.state.page > 1) {
      lastPageBtn = <Button title="Previous" onPress={this._LastPage} />;
    }
    if (this.state.page < trans.module[propMod].pages) {
      // if (this.state.page < lang.all.pages) {
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

    //NEEDS REWORK - module content rendering
    // if (propMod == 1) {
    // lesson = <Mod1Cont lang={propLang} page={this.state.page} />;
    // lesson = (
    //   <ModuleContent lang={propLang} mod={propMod} page={this.state.page} />
    // );
    // }

    // if (propMod == 2) {
    //   lesson = <Mod2Cont lang={propLang} page={this.state.page} />;
    // }

    // renderLesson(propMod) {
    // switch (propMod) {
    //   case "1":
    //     lesson = <Mod1Cont lang={propLang} page={this.state.page} />;
    //   case "2":
    //     lesson = <Mod2Cont lang={propLang} page={this.state.page} />;
    //   default:
    //     lesson = <Mod2Cont lang={propLang} page={this.state.page} />;
    // }
    // }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {trans.module[propMod].title[propLang]}
        </Text>

        <Card style={{ flex: 1 }}>
          <ModuleContent lang={propLang} mod={propMod} page={this.state.page} />
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
