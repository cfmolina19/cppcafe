/*import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text> This is the HomeScreen </Text>
            </View>
        );
    }
}
export default HomeScreen;
*/
import {
    LayoutAnimation,
    Animated,
    Dimensions,
    Text,
    View,
    StyleSheet,
    Image,
    Button
  } from 'react-native';
  import React, { Component } from 'react';
  import { Constants } from 'expo';
  var { height, width } = Dimensions.get('window');
  
  const itemWidth = width * 0.9;
  const itemHeight = height / 1.25 - Constants.statusBarHeight * 2;
  const fontSize = 300;
  
  /*
  const ITEMS = [
    'https://s-media-cache-ak0.pinimg.com/564x/1d/00/9d/1d009d53dd993bd0a604397e65bbde6d.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/53/9d/bb/539dbb7cc07c677925627c6e91585ef5.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/3d/0b/a6/3d0ba6600a33f3e4b3bac737e024d720.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/d9/b8/27/d9b8276db7cd24443bc4a937f853914b.jpg',
    'https://s-media-cache-ak0.pinimg.com/564x/75/eb/53/75eb53941897f231cd0b55f25806d887.jpg',
    '',
  ];
  */
 const ITEMS = [
'../assets/caffeina.png',
'../assets/white.JPG',
'../assets/shite.JPG',
'../assets/caffeina.png',
'../assets/caffeina.png',
''
];

  export default class HomeScreen extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        scrollX: new Animated.Value(0),
        indicator: new Animated.Value(1),
      };
    }
  
    componentDidMount() {
      LayoutAnimation.spring();
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={[styles.border]}>
            <Text
              style={[
                styles.heading,
                { fontSize: 28, marginLeft: 'auto', marginRight: 'auto' },
              ]}>
              Começar Lição
            </Text>
            <Button onPress ={() => this.props.navigation.navigate('Module1')} title = ">" />
            {this.renderScroll()}
          </View>
        </View>
      );
    }
  
    renderScroll() {
      return (
        <Animated.ScrollView
          horizontal={true}
          style={{ flex: 1 }}
          contentContainerStyle={{ alignItems: 'center', flexGrow: 1 }}
          decelerationRate={0}
          snapToInterval={itemWidth}
          scrollEventThrottle={16}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scrollX } } },
          ])}>
          <Button onPress ={() => this.props.navigation.navigate('Module1')} title = ">" />
          {ITEMS.map((image, i) => {
            return this.renderRow(image, i);
          })}
          
        </Animated.ScrollView>
      );
    }
  
    renderRow(image, i) {
      let inputRange = [
        (i - 1) * itemWidth,
        i * itemWidth,
        (i + 1) * itemWidth,
        (i + 2) * itemWidth,
      ];
      let secondRange = [(i - 1) * itemWidth, i * itemWidth, (i + 1) * itemWidth];
  
      // Ensure that we're leaving space for latest item.
      if (image === '') {
        return (
          <View key={i} style={[styles.emptyItem, { width: width * 0.33 }]} />
        );
      }
  
      return (
        <Animated.View
          key={i}
          style={[
            styles.emptyItem,
            {
              opacity: this.state.scrollX.interpolate({
                inputRange: secondRange,
                outputRange: [0.3, 1, 1],
              }),
              height: this.state.scrollX.interpolate({
                inputRange: secondRange,
                outputRange: [itemHeight * 0.8, itemHeight, itemHeight],
              }),
            },
          ]}>
          <Image
            key={i}
            source={{ uri: image }}
            style={[
              StyleSheet.AbsoluteFill,
              {
                height: itemHeight,
                width: itemWidth,
                opacity: 1,
                resizeMode: 'cover',
              },
            ]}
          />
          <Animated.View
            style={[
              {
                width: itemWidth,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                flex: 1,
                position: 'relative',
                height: itemHeight,
                opacity: this.state.scrollX.interpolate({
                  inputRange,
                  outputRange: [0.4, 1, 1, 1],
                }),
                transform: [
                  {
                    scale: this.state.scrollX.interpolate({
                      inputRange,
                      outputRange: [0.5, 1, 1.4, 1],
                    }),
                  },
                ],
              },
            ]}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: itemWidth,
                height: itemHeight,
                position: 'absolute',
                bottom: -itemHeight / 4,
                right: -itemWidth / 4,
              }}>
              <Text style={{ fontSize: fontSize, color: 'rgba(0,0,0,0.4)' }}>
                {i + 1}
              </Text>
            </View>
          </Animated.View>
        </Animated.View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight,
    },
    border: {
      borderRadius: 4,
      borderWidth: 0,
      borderColor: 'coral',
      margin: 3,
    },
    emptyItem: {
      overflow: 'hidden',
      height: itemHeight,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderLeftWidth: 20,
      borderColor: 'white',
      width: itemWidth,
      //backgroundColor: 'transparent',
      backgroundColor: '#D2691E'
    },
    heading: {
      fontSize: 22,
      fontWeight: '300',
      alignSelf: 'flex-start',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
  });