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
import ShopCart from './shopCart'
import My from './my'

// export default 
class Index4 extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      // selectedTab:'首页',
    }
  }
  componentWillMount() {
    // this.props.navigation.navigate('Index2') 
  }
  render() {
    const navigate=this.props.navigation.navigate;
    return (
      <View>
        <TabNavigator>
          <TabNavigator.Item  style={styles.nav} onPress={()=>{navigate('Index2')}} 
          renderIcon={() => {return <Image source={require("../main/assets/footer/home1.png")} style={styles.navimg}/>  }}
          renderSelectedIcon={() => {return <Image source={require("../main/assets/footer/home.png")} style={styles.navimg}/> }}
          icon={require("../main/assets/footer/home.png")}  //图标
                    selectedIcon={require("../main/assets/footer/home1.png")} //选中图标
          >
          { 
              this.props.name=='home'? <Image source={require("../main/assets/footer/home.png")} style={styles.navimg}/>
              : <Image source={require("../main/assets/footer/home1.png")} style={styles.navimg}/>                
          }
          </TabNavigator.Item >
          <TabNavigator.Item style={styles.nav} onPress={()=>{navigate('Order')}}>
          { 
              this.props.name=='order'? <Image source={require("../main/assets/footer/order.png")} style={styles.navimg}/>
              : <Image source={require("../main/assets/footer/order1.png")} style={styles.navimg}/>                
          }
          </TabNavigator.Item>
          <TabNavigator.Item style={styles.nav} onPress={()=>{navigate('ShopCart')}}>
          { 
              this.props.name=='cart'? <Image source={require("../main/assets/footer/shoppingCar.png")} style={styles.navimg}/>
              : <Image source={require("../main/assets/footer/shoppingCar1.png")} style={styles.navimg}/>                
          }
          </TabNavigator.Item>
          <TabNavigator.Item style={styles.nav} onPress={()=>{navigate('My')}} title="123">
          { 
              this.props.name=='my'? <Image source={require("../main/assets/footer/my.png")} style={styles.navimg}/>
              : <Image source={require("../main/assets/footer/my1.png")} style={styles.navimg}/>                
          }
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
      flex:4,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      height:50,
      width:'100%',
      position:'absolute',
      bottom:0,
      backgroundColor: '#ffffff',
  },
  nav:{
      height:100,
      width:'25%',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign:'center',
  },
  navimg:{
      height:80,
      width:70,
  },
});

const Index4App=TabNavigator({
  Index2:{ screen:Index2 },
  Order:{screen:Order},
  ShopCart:{screen:ShopCart},
  My:{screen:My},
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