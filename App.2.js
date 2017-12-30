/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StackNavigator
} from 'react-native';
/**导入一个自己写的js文件*/
import Login from './android/app/src/main/components/test.js';

    // 注册应用(registerComponent)后才能正确渲染
    // 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
    // AppRegistry.registerComponent('reactNativeTest', () => Login);

    const App2 = StackNavigator({
      Welcome: {screen: App},
      Profile: {
        path:'',
        screen: ProfileScreen},
    });

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props) {
    super(props);
    // /**
    //  * 初始化方法
    //  * @type {function(this:Login)}
    //  */
    // this.buttonBackAction=this.buttonBackAction.bind(this);//返回

}
  _onPressButton() {
    console.log("You tapped the button!");
    // alert("123");
    // this.props.navigator.push({
    //     title: 'Login',
    //     component: Login
    // })
    navigate('Profile', { name: 'Jane' });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native81!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> 
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    
    justifyContent: 'center',
    alignItems: 'center',
    height:30,
    width:'80%',
    backgroundColor:'yellow',
  },
});
