import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Asset from './components/Asset';
import { Constants } from 'expo';
import { Card } from 'react-native-paper';
import { DrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  createStackNavigator,
} from 'react-navigation';
import {StackNavigator} from 'react-navigation'
import SplashScreen from './Screens/SplashScreen'
import HomeScreen from './Screens/HomeScreen'
import Module1 from './Screens/Module1'
import Module1_2 from './Screens/Module1_2'
import Module1_3 from './Screens/Module1_3'
import Module1_4 from './Screens/Module1_4'
import Module1_5 from './Screens/Module1_5'
import Module1_6 from './Screens/Module1_6'
import Module1_7 from './Screens/Module1_7'
import Module1_8 from './Screens/Module1_8'
import quiz from './Screens/quiz'
//import AppContainer from './navigator/MyNavigator';
//import { View, Text, TouchableHighlight, Image } from 'react-native';
//import React, { Component } from 'react';


//1111
/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>C++Cafe</Text>
      </View>
    );
  }
}
*/

//222222

//NEWESTTTTTTTT**************************************************
/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          View Modules
        </Text>
        <Card>
          <Asset />
        </Card>
      </View>
    );
  }
}
*/

//111111
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2691E', //coffee brown
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


//22222222
//NEWESTTT*******************************************88
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D2691E',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
*/


//3333333333
/*
export class HomeScreen extends Component {

  render() {
      return (
          <View style={{
          flex: 1,
          flexDirection: 'column',
          }}> 
          <View style={{
              flex: 1,
              backgroundColor: '#D2691E',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                  This is Home Screen
              </Text>
              <TouchableHighlight style={{ 
                                          margin: 20, 
                                          width: 200, 
                                          height: 45,
                                          backgroundColor: 'darkviolet',
                                          padding: 10,
                                          alignItems: 'center',
                                       }}
                  onPress={() => {this.props.navigation.navigate('DetailView');                                             
                  }}>
                  <Text style={{color: 'white', fontSize: 18}}>DetailView</Text>
              </TouchableHighlight>
          </View>
      </View>);
  }
}


export class DetailScreen extends Component {

  render() {
      return (<View style={{
          flex: 1,
          flexDirection: 'column',
      }}> 
          <View style={{
              flex: 1,
              backgroundColor: '#4734ac',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                  This is Detail Screen
              </Text>
              <Card>
                <Asset />
              </Card>
              <TouchableHighlight style={{ 
                                          margin: 20, 
                                          width: 200, 
                                          height: 45,
                                          backgroundColor: 'darkviolet',
                                          padding: 10,
                                          alignItems: 'center',
                                       }}
                  onPress={() => {
                      this.props.navigation.goBack();                                          
                  }}>
                  <Text style={{color: 'white', fontSize: 18}}>Navigate Back</Text>
              </TouchableHighlight>
          </View>
      </View>);
  }

}

/*
export default StackNavigator (
  {
      Home:HomeScreen,
      DetailView:DetailScreen
  },{
      initialRouteName:'Language'
  }
)
*/



//YOU BARELY TRIED SON
/*
const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}
*/

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = StackNavigator({
  SplashScreen: { screen : SplashScreen},
  HomeScreen: {screen: HomeScreen},
  Module1: {screen: Module1},
  Module1_2: {screen: Module1_2},
  Module1_3: {screen: Module1_3},
  Module1_4: {screen: Module1_4},
  Module1_5: {screen: Module1_5},
  Module1_6: {screen: Module1_6},
  Module1_7: {screen: Module1_7},
  Module1_8: {screen: Module1_8},
  quiz: {screen: quiz}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});