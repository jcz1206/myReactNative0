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
  TouchableHighlight,
  // BackAndroid,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {DrawerNavigator,TabNavigator} from 'react-navigation';


import Index2 from './index2'
import Order from './order'
import ShopCartIndex from './shopCartIndex'
import My from './my'
import Index3 from './index3'

// export default 
class Index4 extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      // selectedTab:'Index2'//'首页',
    }
  }
  componentWillMount() {
    // this.props.navigation.navigate('Index2') 
  }
  render() {
    // const navigate=this.props.navigation.navigate;
    return (     
      <View>
      </View>
    )
  }
}


const Index4App=TabNavigator({
  Index2:{ screen:Index2 },
  Order:{screen:Order},
  ShopCartIndex:{screen:ShopCartIndex},
  My:{screen:My},
  Index3:{screen:Index3},
},
{
  tabBarOptions: {
    activeTintColor: 'green',
    inactiveTintColor: '#000',
    showIcon: true,
    showLabel: false,
    upperCaseLabel: true,
    // pressColor: '#d32d27',
    // pressOpacity: 1,
    margin:0,
    style: {
      backgroundColor: '#fff',
      paddingBottom: 0,
      borderTopWidth: 0.5,
      borderTopColor: '#ccc',
      margin:0,
    },
    labelStyle: {
      fontSize: 14,
      margin: 0,
      // height:0,
      // width:0,
    },
    iconStyle : {
      width: 35,
      height: 40,
      margin:0,
    },
    tabStyle: {
      padding: 5
    },
    indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  backBehavior: 'none',
  margin:0,
})
export default Index4App;