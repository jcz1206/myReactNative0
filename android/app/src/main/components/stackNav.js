
import React, { Component } from 'react';
// import { PropTypes } from 'prop-types'; // ES6
// var PropTypes = require('prop-types'); // ES5 with npm
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
// import { Navigator } from 'react-native-deprecated-custom-components';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends Component<{}> {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/ic_launcher.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="去 下一页"
        />
        <Button 
        onPress={()=>{this.props.navigation.navigate('Home')}}
        title="返回欢迎页"
        />
        </View>
      );
    }
  }
  
  class MyNotificationsScreen extends Component<{}> {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/ic_launcher.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="返回 上一页" 
          style={ styles.button3 }
        />
      );
    }
  }


  const styles = StyleSheet.create({
    icon: {
      width:40,
      height:40,
    },
    button3:{
      backgroundColor: 'green',
    }
  });
  
  const MyApp =StackNavigator({
    First: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
  });
  
  export default MyApp;