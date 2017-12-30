/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  AppState,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight, 
  Animated,
} from 'react-native';

import { StackNavigator,DrawerNavigator } from 'react-navigation';

/**导入一个自己写的js文件*/
import Welcome from './android/app/src/pages/welcome.js';

// export default 
class App extends Component<{}> {
  render() {
    return (
      this.props.navigation.navigate('Welcome')
    );
  }
}


 
const SimpleApp =DrawerNavigator({
  Home: { screen: App },
  Welcome: { screen: Welcome },
  // Welcome1: { screen: Welcome1 },
});
export default SimpleApp;

