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
// import FootNav from '../components/footNav.js'



export default class shopCart extends Component<{}> {
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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ShopCart!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text>Button</Text>
        </TouchableHighlight>
        {/* <FootNav name="cart" navigate={this.props.navigation.navigate}>
        </FootNav> */}
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
