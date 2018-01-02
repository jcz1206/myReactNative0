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
  TouchableHighlight
} from 'react-native';

// import shopCart from './shopCart';
import FootNav from '../components/footNav.js'

export default class Index2 extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
        current:'home',
    }
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
          Welcome to React Native81!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={this.gotoShopCart} title="返回上一页"/>
        <FootNav key={aa}>
        </FootNav>
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

// const Index2App=DrawerNavigator({
  
// })
