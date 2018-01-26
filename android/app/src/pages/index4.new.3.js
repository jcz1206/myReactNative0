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
// import {DrawerNavigator,TabNavigator} from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator'; 


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
      selectedTab:'Index2'//'首页',
    }
    navigation = this.props.navigation;  
  }
  render() {
    // const navigate=this.props.navigation.navigate;
    return (     
      <View style={styles.footer}>  
                <TabNavigator>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '首页'}  
                        title="首页"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/home.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/home1.png")} />}  
                        onPress={() => this.setState({ selectedTab: '首页' })}  
                    >  
                        <Index2 navigation={navigation}/>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '新闻'}  
                        title="新闻"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/order.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/order1.png")} />}  
                        onPress={() => this.setState({ selectedTab: '新闻' })}  
                    >  
                        <Index2 navigation={navigation}/>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '圈子'}  
                        title="圈子"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/shoppingCar.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/shoppingCar1.png")} />}  
                        onPress={() => this.setState({ selectedTab: '圈子' })}  
                    >  
                        <Index2 navigation={navigation}/>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '我的'}  
                        title="我的"  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/my.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../main/assets/footer/my1.png")} />}  
                        onPress={() => this.setState({ selectedTab: '我的' })}  
                    >  
                        <Index2 navigation={navigation}/>  
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>  
    )
  }
}

const styles = StyleSheet.create({  
  footer: {  
      flex: 1,  
      justifyContent: 'center',  
      backgroundColor: '#F00',  
  },  
  tabText: {  
      color: '#000',  
      textAlign: 'center',  
      fontSize: 14,  
  },  

  selectedTabText: {  
      color: '#F00',  
      textAlign: 'center',  
      fontSize: 14,  
  },  

  icon: {  
      width: 20,  
      height: 20  
  }  
});  



// const Index4App=TabNavigator({
//   Index2:{ screen:Index2, navigationOptions:{
//       tabBarLabel:'zuoye',
//       // tabBarIcon:({focused})=>{
//       //   //return (<Icon size={26} name={focused?'ios-home':'ios-home-outline'}/>)
//       // }
//       tabBarIcon:({ focused, tintColor }) =>(
//         <Image source={ focused ?require("../main/assets/footer/home.png"):require("../main/assets/footer/home1.png")} 
//         style={{width:35, height:40,}}
//         />     
//       ), //navigation:navigation
//     },  
//   },
//   Order:{screen:Order,navigationOptions:{
//     headerTitle: '订单',
//     tabBarLabel: '订单',
//     tabBarIcon:({ focused, tintColor }) =>(
//     <Image source={ focused ?require("../main/assets/footer/order.png"):require("../main/assets/footer/order1.png")} 
//     style={{width:35, height:40,}}
//     />     
//     ), //navigation:navigation
//   }},
//   ShopCart:{screen:ShopCart,navigationOptions : {
//     headerTitle: '购物车',
//     tabBarLabel: '购物车',
//     tabBarIcon:({ focused, tintColor }) =>(
//     <Image source={ focused ?require("../main/assets/footer/shoppingCar.png"):require("../main/assets/footer/shoppingCar1.png")} 
//     style={{width:35, height:40,}}
//     />     
//     )
//   }},
//   My:{screen:My,navigationOptions:{
//     headerTitle: '我的',
//     tabBarLabel: '我的',
//     tabBarIcon:({ focused, tintColor }) =>(
//     <Image source={ focused ?require("../main/assets/footer/my.png"):require("../main/assets/footer/my1.png")} 
//     style={{width:35, height:40,}}
//     />     
//     )
//   }},
//   Index3:{screen:Index3,navigationOptions:{
//     headerTitle: '我的',
//     tabBarLabel: '我的',
//     tabBarIcon:({ focused, tintColor }) =>(
//     <Image source={ focused ?require("../main/assets/footer/my.png"):require("../main/assets/footer/my1.png")} 
//     style={{width:35, height:40,}}
//     />     
//     )
//   }},
// },
// {
//   tabBarOptions: {
//     activeTintColor: 'green',
//     inactiveTintColor: '#000',
//     showIcon: true,
//     showLabel: false,
//     upperCaseLabel: true,
//     // pressColor: '#d32d27',
//     // pressOpacity: 1,
//     margin:0,
//     style: {
//       backgroundColor: '#fff',
//       paddingBottom: 0,
//       borderTopWidth: 0.5,
//       borderTopColor: '#ccc',
//       margin:0,
//     },
//     labelStyle: {
//       fontSize: 14,
//       margin: 0,
//       // height:0,
//       // width:0,
//     },
//     iconStyle : {
//       width: 35,
//       height: 40,
//       margin:0,
//     },
//     tabStyle: {
//       padding: 5
//     },
//     indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
//   },
//   tabBarPosition: 'bottom',
//   swipeEnabled: false,
//   animationEnabled: false,
//   lazy: true,
//   backBehavior: 'none',
//   margin:0,
// })
// export default Index4App;