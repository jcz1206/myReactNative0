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
  Image,
  TouchableHighlight,
  StackNavigator
} from 'react-native';
import ShopCart from './shopCart.js'



export default class shopCartIndex extends Component<{}> {
  // static navigationOptions = {
  //   headerTitle: '购物车',
  //   tabBarLabel: '购物车',
  //   tabBarIcon:({ focused, tintColor }) =>(
  //   <Image source={ focused ?require("../main/assets/footer/shoppingCar.png"):require("../main/assets/footer/shoppingCar1.png")} 
  //   style={{width:35, height:40,}}
  //   />     
  //   )
  // };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <ShopCart>
        </ShopCart>
      </View>
    );
  }
}
