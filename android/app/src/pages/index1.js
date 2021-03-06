/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  BackHandler,
} from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
// import CardStack,{ Card } from 'react-native-card-stack-swiper';
/**导入一个自己写的js文件*/
import Index2 from './index2.js';
import FadeInView from './FadeView.js';
import StackNav from './stackNav.js';
import ShopCart from './shopCart.js';
import Swiper from 'react-native-swiper';

// import { createStore } from 'redux';
// const store = createStore(reducer);


// export default 
class Index1 extends Component<{}> {
  static navigationOptions = {
    title: 'Index1',    
  };
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener("back", this.onBackClicked);
    }else {

    }
  }
  //返回 ;//return  true 表示返回上一页  false  表示跳出RN
  onBackClicked = () => { // 默认 表示跳出RN
    return false;
  }
  _onPressButton(navigate) {
    // console.log("You tapped the button!");
    // alert("123");
    navigate('Index2')
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
        </FadeInView>
      {/* <Swiper
          style={styles.swiper}          //样式
          height={100}                   //组件高度
          loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
          autoplay={true}                //自动轮播
          autoplayTimeout={4}                //每隔4秒切换
          horizontal={true}              //水平方向，为false可设置为竖直方向
          paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
          showsButtons={false}           //为false时不显示控制按钮
          showsPagination={false}       //为false不显示下方圆点
          dot={<View style={{           //未选中的圆点样式
              backgroundColor: 'rgba(0,0,0,.2)',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
          }}/>}
          activeDot={<View style={{    //选中的圆点样式
              backgroundColor: '#007aff',
              width: 18,
              height: 18,
              borderRadius: 4,
              marginLeft: 10,
              marginRight: 9,
              marginTop: 9,
              marginBottom: 9,
          }}/>}
      >
          <Image source={require('./android/app/src/main/assets/ic_launcher.png')} style={styles.img}/>
          <Image source={require('./android/app/src/main/assets/ic_launcher.png')} style={styles.img}/>
      </Swiper> */}

        {/* <Image source={{uri: 'android/app/src/main/res/mipmap-hdpi/ic_launcher.png'}} /> */}
        {/* <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width:40, height:40}} /> */}
        {/* <Image source={{uri: 'asset:/ic_launcher.png'}} style={{width:40, height:40}} /> */}
        <Image source={require('../main/assets/ic_launcher.png')} style={{width:40, height:40}} />
        <Text style={styles.welcome}>
          Welcome to React Native81!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> 
        <TouchableHighlight onPress={this._onPressButton.bind(this,navigate)} style={styles.button}>
        {/* ()=>{navigate('Index') } */}
          <Text>立即体验</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{navigate('StackNav') }} style={styles.button2}>
          <Text>体验stackNav</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>{this.props.navigation.navigate('ShopCart') }}         
        style={{backgroundColor:'green', justifyContent: 'center', alignItems: 'center', height:30, width:'80%',}}>
          <Text>体验ShopCart</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
  button2:{    
    justifyContent: 'center',
    alignItems: 'center',
    height:30,
    width:'80%',
    backgroundColor:'orange',
  },
  img: {
      width: 200,
      height: 100,
      backgroundColor:'yellow',
  },
  swiper:{
    backgroundColor:'yellow',
    width:'100%',
    height:100,
  }
});

 
  const Index1App =DrawerNavigator({
    Index1: { screen: Index1 },
    Index2: { screen: Index2},
    StackNav:{ screen:StackNav },
    ShopCart:{ screen:ShopCart},
  });
  export default Index1App;

