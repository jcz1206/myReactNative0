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
  ViewPagerAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
// import CardStack,{ Card } from 'react-native-card-stack-swiper';
/**导入一个自己写的js文件*/
import Index2 from './index2.js';
import Index from './index.js';
import FadeInView from './FadeView.js';
import StackNav from './stackNav.js'; 


// export default 
class Welcome extends Component<{}> {
  static navigationOptions = {
    title: 'Welcome',    
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,          // 透明度初始值设为0
    };
  }
  _onPressButton(navigate) {
    // console.log("You tapped the button!");
    // alert("123");
    navigate('Index2')
  }
  thisScroll(initialPage){
      this.state.activeIndex=initialPage
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}    
          // onPageScroll= {thisScroll(initialPage)}    
          // scrollEnabled={this.state.scrollEnabled},
          // peekEnabled={false}
          >
          <View style={styles.pageStyle}>
            <ImageBackground style={{height:'100%',width:'100%'}} source={require('../main/assets/welcome/img_game_bg_1.png')} resizeMode='cover'>
              <Text>First page</Text>
              <Image source={require('../main/assets/welcome/img_game_character_1.png')} />
            </ImageBackground>
          </View>
          <View style={styles.pageStyle}>
            <ImageBackground style={{height:'100%',width:'100%'}} source={require('../main/assets/welcome/img_game_bg_2.png')} resizeMode='cover'>
              <Text>Second page</Text>
              <Image source={require('../main/assets/welcome/img_game_character_2.png')} />
            </ImageBackground>
          </View>
          <View style={styles.pageStyle}>
            <ImageBackground style={{height:'100%',width:'100%'}} source={require('../main/assets/welcome/img_game_bg_3.png')} resizeMode='cover'>
              <Text>Second page</Text>
              <Image source={require('../main/assets/welcome/img_game_character_3.png')} />
              <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Index2') }}         
                style={{ backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius:14, justifyContent: 'center', alignItems: 'center', height:30, width:'60%', marginLeft:'20%',}}>
                <Text  style={{color:'red',}}>开始体验吧!</Text>
              </TouchableHighlight>
            </ImageBackground>
          </View>
        </ViewPagerAndroid>
        <View style={styles.buttonGroup}>
          <TouchableOpacity  style={styles.buttonGroup2}>
          <Text style={[styles.button, this.state.activeIndex==0?styles.buttonActive:null]}></Text>
          <Text style={[styles.button, this.state.activeIndex==1?styles.buttonActive:null]}></Text>
          <Text style={[styles.button, this.state.activeIndex==2?styles.buttonActive:null]}></Text>
          </TouchableOpacity>
          {/* <Button text="1" title="11"  style={styles.button}/>
          <Button text="2" title="22"  style={styles.button}/>
          <Button text="3" title="33"  style={styles.button}/> */}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',    
  },
  viewPager: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageStyle: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'yellow',
  },
  buttonGroup:{ 
    position:'absolute',
    bottom:20,
    height:50,
    left:0,
    right:0,
  },
  buttonGroup2:{ 
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // left:0,
    // right:0,
  },
  button:{  
    // flex: 3, 
    // position:'relative',
    // height:30,
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
    // left:10,
    width:16,
    height:16,
    backgroundColor:'#eee',
    borderRadius: 8,
    // borderWidth:1,
    // borderColor:'#eee',
    // borderStyle:'solid',
  },
  buttonActive:{
    backgroundColor:'#333',
  },
});

 
  const WelcomeApp =DrawerNavigator({
    Welcome: { screen: Welcome },
    Index2: { screen: Index2},
    StackNav:{ screen:StackNav },
    Index:{ screen:Index },
  });
  export default WelcomeApp;

