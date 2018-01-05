/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppState,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import FootNav from '../components/footNav.js'

export default class Order extends Component<{}> {
  static navigationOptions = {
    headerTitle: '订单',
    tabBarLabel: '订单',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/order.png"):require("../main/assets/footer/order1.png")} 
    style={{width:35, height:40,}}
    />     
    )
  };
  constructor(props){
    super(props);
}
  gotoShopCart=()=> {
    // const {navigator}=this.props;
    // navigator.push({
    //   component:shopCart,
    // })
    this.props.navigation.goBack()
  }
  render() {
    const aa="foot";
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Order!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={this.gotoShopCart} title="返回上一页"/>
        {/* <FootNav name="order" navigate={this.props.navigation.navigate}>
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
