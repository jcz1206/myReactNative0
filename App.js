/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
/**导入一个自己写的js文件*/
import Index from './android/app/src/pages/index.js';

// export default 
class App extends Component<{}> {
  _go(){
    this.props.navigation.navigate('Index')
  }
  componentDidMount(){
    this._go();
  }
  render() {
    return (
      // this._go()
      // this.props.navigation.navigate('Index')
      <View>
      </View>
    );
  }
}


 
const SimpleApp =DrawerNavigator({
  Home: { screen: App },
  Index: { screen: Index },
});
export default SimpleApp;

