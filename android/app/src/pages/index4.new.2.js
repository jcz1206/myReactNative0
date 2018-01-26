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
import {Navigator,DrawerNavigator,TabNavigator} from 'react-navigation';

// import {TabNavigator} from 'react-native-tab-navigator';


import Index2 from './index2'
import Order from './order'
import ShopCartIndex from './shopCartIndex'
import My from './my'
import Index3 from './index3'

export default 
class Index4 extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      // selectedTab:'Index2'//'首页',
    }
  }


  setTitle(title){
    return (
      <View>
        <Text style={styles.navBarTitleText} numberOfLines={1}>
        {title}
        </Text>
      </View>
    )
  }
  LeftButton=(route,navigator,index)=>{
    if(index>0){
      return(
        <TouchableOpacity 
        style={styles.navBarLeftButton}
        onPress={()=>{navigator.pop();}}
        >
          <Text>返回</Text>
        </TouchableOpacity>
      )
    }else{
      return null
    }
  }
  navBar(){
    return (
      <Navigator.navigationBar
        style={styles.navBar} 
        routeMapper={
          {
            LeftButton:this.LeftButton,
            RightButton:()=>{

            },
            Title:(route)=>this.setTitle(route.title)
          }
        }
      />
    )
  }

    renderTabBarItem(title,iconName,iconSelectName,selectedTab,componentName,component){
      return (
        <TabNavigator.Item 
          title={title} 
          renderIcon={()=><Image source={{uri:iconName}} sytle={styles.iconStyle}/>} 
          renderSelectedIcon={()=><Image source={{uri:iconSelectName}} sytle={styles.iconStyle}/>}
          selected={this.state.selectedTab==selectedTab} 
          onPress={()=>{this.setState({selectedTab:selectedTab})}} 
          titleStyle={styles.titleStyle} 
          selectedTitleStyle={ styles.selectedTitleStyle} 
          >

          <Navigator
            initialRoute={ {name:componentName,title:title,component} }
            configureScene={()=>{              
              return Navigator.SceneConfigs.PushFromRight;
            }}
             renderScene={(route,navigator)=>{
              let myComponent=route.component;
              return <myComponent {...route.passProps} navigator={navigator} />;
            }}
            navigationBar={this.navBar()}
          />

        </TabNavigator.Item>
      );
    }

  render() {
    // const navigate=this.props.navigation.navigate;
    return (
      <TabNavigator tabBarStyle={styles.tab}>
      {this.renderTabBarItem('首页1',require("../main/assets/footer/home1.png"),require("../main/assets/footer/home.png"),'home','首页',Index2)}
      {this.renderTabBarItem('首页','','','home','首页',Index2)}
      {this.renderTabBarItem('首页','','','home','首页',Index2)}
      {this.renderTabBarItem('首页','','','home','首页',Index2)}
      </TabNavigator>
    )
  }
}


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    color: '#515151'
  },
  tab: {
    height: 152,
    alignItems: 'center',
    backgroundColor: 'rgb(241, 241, 241)'
  },
  iconStyle: {
    // width: Platform.OS === 'ios' ? 26 : 25,
    // height: Platform.OS === 'ios' ? 26 : 25
  },
  selectedTitleStyle: {
    color: 'orange'
  },
  navBar: {
    backgroundColor: '#03a9f4',
    height: (Platform.OS === 'ios') ? 64 : 44
  },
  navBarLeftButton: {
    flex: 1,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5
  },
  navBarRightButton: {
    marginRight: 5
  },
  navBarLeftTitle: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  navBarTitleText: {
    fontWeight: '500',
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 10
  },
  icon: {
    width: Platform.OS === 'ios' ? 22 : 24,
    height: Platform.OS === 'ios' ? 20 : 24
  }
});



// const styles = StyleSheet.create({
//   container:{
//       flex:4,
//       flexDirection:'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height:50,
//       width:'100%',
//       position:'absolute',
//       bottom:0,
//       backgroundColor: '#ffffff',
//   },
//   nav:{
//       height:100,
//       width:'25%',
//       backgroundColor: '#ffffff',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign:'center',
//   },
//   navimg:{
//       height:80,
//       width:70,
//   },
// });

// const Index4App=TabNavigator({
//   Index2:{ screen:Index2 },
//   Order:{screen:Order},
//   ShopCartIndex:{screen:ShopCartIndex},
//   My:{screen:My},
//   Index3:{screen:Index3},
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

