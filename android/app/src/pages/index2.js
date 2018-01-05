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
  TouchableHighlight,
  ScrollView,
  // BackAndroid,
  BackHandler,
  ImageBackground,
  TouchableOpacity,
  ViewPagerAndroid,  
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';

import FootNav from '../components/footNav.js'
// import Order from './order'
// import ShopCart from './shopCart'
// import My from './my'

export default 
class Index2 extends Component<{}> {
  static navigationOptions = {
    headerTitle: '首页',
    tabBarLabel: '首页',
    tabBarIcon:({ focused, tintColor }) =>(
    <Image source={ focused ?require("../main/assets/footer/home.png"):require("../main/assets/footer/home1.png")} 
    style={{width:35, height:40,}}
    />     
    )
  };
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0,          // 透明度初始值设为0
      items:[],
      imgArr:[
        {
          tit:"232",
          img:require('../main/assets/welcome/img_game_character_1.png'),
          bg:require('../main/assets/welcome/img_game_bg_1.png')
        },
        {
          tit:"232111",
          img:require('../main/assets/welcome/img_game_character_1.png'),
          bg:require('../main/assets/welcome/img_game_bg_2.png')
        },
        {
          tit:"2323333",
          img:require('../main/assets/welcome/img_game_character_1.png'),
          bg:require('../main/assets/welcome/img_game_bg_3.png')
        },
        {
          tit:"2323333",
          img:require('../main/assets/welcome/img_game_character_1.png'),
          bg:require('../main/assets/welcome/img_game_bg_3.png')
        }
      ],
    };
  }
  onPageSelected=(e)=>{
	  this.setState({activeIndex:e.nativeEvent.position});
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
  gotoShopCart=()=> {
    // const {navigator}=this.props;
    // navigator.push({
    //   component:shopCart,
    // })
    this.props.navigation.goBack()
  }
  renderItem(){
    var itemArr=[];
    var imgArr=this.state.imgArr;
    for( var i=0;i<imgArr.length;i++){
        var item=imgArr[i];
        itemArr.push(
          <View key={i}  style={styles.pageStyle}>
          <ImageBackground style={{flex:1,}} source={item.bg} resizeMode='cover'>
            <Text>First page{i}</Text>
            <Image source={item.img}  style={{flex:1,}} resizeMode='contain' />
            </ImageBackground>
          </View>
        );
    }
    return itemArr;
  }
  renderItem2(){
    var itemArr=[];
    var imgArr=this.state.imgArr;
    for( var i=0;i<imgArr.length;i++){
        itemArr.push(
          <Text key={i} style={[styles.button, this.state.activeIndex==i?styles.buttonActive:null]}></Text>
        );
    }
    return itemArr;
  }
  componentDidMount() {
    var item;
    for (let i = 0; i < 3; i++){
        switch (i){
            case 0:{
                item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';

                break;
            }
            case 1:{
                item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
                break;
            }
            default:{
                item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
                break;
            }
        }
        this.state.items.push(item);
    }
    console.log(this.state.items + '111');
    alert(this.state.items + '111');
    this.setState({
        isShow: true,
        items: this.state.items
    })
}

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView  
        horizontal={true}
        showsHorizontalScrollIndicator={true} 
        style={styles.hs}
        >
          {this.renderItem()}
       </ScrollView> */}
       <ScrollView  
        horizontal={false}
        showsHorizontalScrollIndicator={false} 
        style={styles.hs}
        >
        <ViewPagerAndroid
           style={styles.viewPager}
           initialPage={0}     
           onPageSelected={this.onPageSelected}
           >
          {this.renderItem()}
         </ViewPagerAndroid>
         <View style={styles.buttonGroup}>
           <TouchableOpacity  style={styles.buttonGroup2}>
           {this.renderItem2()}
           </TouchableOpacity>
         </View>
        {/* <Text style={styles.welcome}>
          Welcome to React Native81!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={this.gotoShopCart} title="返回上一页1"/> */}
        {/* <FootNav name="home" navigate={this.props.navigation.navigate}>
        </FootNav> */}
          <View style={{ height:200, alignItems:'center', backgroundColor:'blue'}}>

            <Swiper autoplay = {true}  showsPagination = {true} dotColor="white"
                    activeDotColor='yellow' horizontal={true}>
                {
                    this.state.items.map((item, index) => {
                        console.log(item, index) 
                        // alert(index);
                        //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                        return (<Image style={{height: 200, }} key = {index} resizeMode='cover' source={{uri: item}}/>)
                    })
                }
            </Swiper>
        <Text style={styles.title}>
                狗狗的家
            </Text>
          </View>
        <View>

        <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
            <Text style={styles.title}>
                狗狗的家
            </Text>
        </View>

        </ScrollView>
      </View>
    );
  }
}
//https://www.jianshu.com/p/ae53fa17dd93
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
  hs:{
    height:600,   
    width:'100%',
    // backgroundColor:'red',
  },
  viewPager: {
    flex: 1,
    width:'100%',
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageStyle: {
    // fontSize: 20,
    // textAlign: 'center',
    // backgroundColor: 'yellow',
  },
  buttonGroup:{ 
    // position:'absolute',
    // bottom:10,
    height:30,
    // left:0,
    right:10,
    marginTop:-30,
    // marginBottom:30,
  },
  buttonGroup2:{ 
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    width:10,
    height:10,
    backgroundColor:'#eee',
    borderRadius: 5,
    // borderWidth:1,
    // borderColor:'#eee',
    // borderStyle:'solid',
  },
  buttonActive:{
    backgroundColor:'#333',
  },
  button2:{    
    justifyContent: 'center',
    alignItems: 'center',
    height:30,
    width:'80%',
    backgroundColor:'yellow',
  },
});

// const Index2App=DrawerNavigator({
//   Index2:{ screen:Index2 },
//   Order:{screen:Order},
//   ShopCart:{screen:ShopCart},
//   My:{screen:My},
// })
// export default Index2App;