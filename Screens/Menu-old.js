// import {
//   LayoutAnimation,
//   Animated,
//   Dimensions,
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   Button
// } from "react-native";
// import React, { Component } from "react";
// import { Constants } from "expo";
// var { height, width } = Dimensions.get("window");
// // import { withMappedNavigationParams } from "react-navigation-props-mapper";

// const itemWidth = width * 0.9;
// const itemHeight = height / 1.25 - Constants.statusBarHeight * 2;
// const fontSize = 300;

// const lang = {
//   en: {
//     title: "english"
//   },
//   pt: {
//     title: "portuguese"
//   },
//   es: {
//     title: "spanish"
//   }
// };

// export default class Menu extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       module: ""
//     };
//   }

//   setLanguage = "en";

//   render() {
//     const { navigation } = this.props;
//     const lang = navigation.getParam("lang", "notpassing");

//     return (
//       <View style={styles.container}>
//         <View style={[styles.border]}>
//           <Text>Module Menu {lang}</Text>
//           <Button
//             onPress={() =>
//               this.props.navigation.navigate("Module", {
//                 lang: { lang },
//                 mod: this.state.module
//               })
//             }
//             title="Module 1"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: Constants.statusBarHeight
//   },
//   border: {
//     borderRadius: 4,
//     borderWidth: 0,
//     borderColor: "coral",
//     margin: 3
//   },
//   emptyItem: {
//     overflow: "hidden",
//     height: itemHeight,
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     borderLeftWidth: 20,
//     borderColor: "white",
//     width: itemWidth,
//     //backgroundColor: 'transparent',
//     backgroundColor: "#D2691E"
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "300",
//     alignSelf: "flex-start",
//     paddingHorizontal: 10,
//     paddingVertical: 10
//   }
// });
