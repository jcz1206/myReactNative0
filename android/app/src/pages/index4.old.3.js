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
  Image,
} from 'react-native';
import {DrawerNavigator,TabNavigator} from 'react-navigation';


import Index2 from './index2'
import Order from './order'
import ShopCartIndex from './shopCartIndex'
import ShopCart from './shopCart'
import My from './my'
import Index3 from './index3'

// export default 
class Index4 extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      // selectedTab:'Index2'//'首页',
    }
    navigation = this.props.navigation;  
  }
  // componentWillMount() {
  //   // this.props.navigation.navigate('Index2') 
  // }

  // gotoShopCart2=()=> {
  //   this.props.navigation.navigate('ShopCart',{ headerTitle: '购物车',
  //   tabBarLabel: '购物车',  
  //     tabBarIcon:({ focused, tintColor }) =>(
  //         <Image source={ focused ?require("../main/assets/footer/home.png"):require("../main/assets/footer/home1.png")} 
  //         style={{width:35, height:40,}}
  //         />     
  //       )})
  //   // this.props.navigation.goBack()
  // }
  render() {
    // const navigate=this.props.navigation.navigate;
    return (     
      <View>
      </View>
    )
  }
}


const Index4App=TabNavigator({
  Index2:{ screen:Index2, navigationOptions:{
      tabBarLabel:'zuoye',
      // tabBarIcon:({focused})=>{
      //   //return (<Icon size={26} name={focused?'ios-home':'ios-home-outline'}/>)
      // }
      tabBarIcon:({ focused, tintColor }) =>(
        <Image source={ focused ?require("../main/assets/footer/home.png"):require("../main/assets/footer/home1.png")} 
        style={{width:35, height:40,}}
        />     
      ), //navigation:navigation
    },  
  },
  Order:{screen:Order,navigationOptions:{
    headerTitle: '订单',
    tabBarLabel: '订单',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/order.png"):require("../main/assets/footer/order1.png")} 
    style={{width:35, height:40,}}
    />     
    ), //navigation:navigation
  }},
  ShopCart:{screen:ShopCart,navigationOptions : {
    headerTitle: '购物车',
    tabBarLabel: '购物车',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/shoppingCar.png"):require("../main/assets/footer/shoppingCar1.png")} 
    style={{width:35, height:40,}}
    />     
    )
  }},
  My:{screen:My,navigationOptions:{
    headerTitle: '我的',
    tabBarLabel: '我的',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/my.png"):require("../main/assets/footer/my1.png")} 
    style={{width:35, height:40,}}
    />     
    )
  }},
  Index3:{screen:Index3,navigationOptions:{
    headerTitle: '我的',
    tabBarLabel: '我的',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/my.png"):require("../main/assets/footer/my1.png")} 
    style={{width:35, height:40,}}
    />     
    )
  }},
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