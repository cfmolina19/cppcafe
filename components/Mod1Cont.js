import * as React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from "react-native";
import SplashScreen from "../Screens/SplashScreen";
import i18n from "i18n-js";
import { Constants } from "expo";
import { Localization } from "expo";

const lang = {
  en: {
    sel: "english",
    title: "Module One - Introduction",
    page: {
      1: "en 1st Page Content",
      2: "en 2nd page content"
    }
  },
  pt: {
    sel: "portuguese",
    pg1: "pt 1st Page Content",
    pg2: "pt 2nd Page Content"
  },
  es: {
    sel: "spanish",
    pg1: "spa 1st Page Content",
    pg2: "spa 2nd Page Content"
  }
};

export default class AssetExample extends React.Component {
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
    return (
      <View style={styles.container}>
        <Text>TEST MOD 1 ASSET</Text>
        <Text>{lang[this.props.lang].page[this.state.page]}</Text>
        {/* <Text>{this.props.lang}</Text>
        <Text>{this.state.page}</Text>
        <Text>{lang[this.props.lang].sel}</Text> */}
        <Image style={styles.logo} source={require("../assets/caffeina.png")} />
        <Button title="Next Page" onPress={this._NextPage} />
        <Button title="Last Page" onPress={this._LastPage} />

        {/* <Button
          onPress={() => this.props.navigation.navigate("Module1_2")}
          title="Next"
        /> */}
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
  }
});
