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
  TextInput,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Swiper from 'react-native-swiper';

import MarqueeLabel from 'react-native-lahk-marquee-label';
// import Marquee  from 'react-native-marquee';
import {TextInputLayout} from 'rn-textinputlayout';

import FootNav from '../components/footNav.js'
// import Order from './order'
// import ShopCart from './shopCart'
// import My from './my'

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
      items:[
        'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg',
        'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg',
        'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg'
      ],
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
      itemsText:[
          '关于react native 循环动画无法使用InteractionManager的解决办法...',
          'React Native 项目常用第三方组件汇总 - 简书',
          'React Native常用第三方组件汇总--史上最全 之一 - 郭东..._博客园',
          'React Native常用第三方组件汇总--史上最全 之一 - 郭东..._博客园',
          'speed: number(unit: px/s, px per second), the speed of the marquee. Alternative to duration.'
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
    // var item;
    // for (let i = 0; i < 3; i++){
    //     switch (i){
    //         case 0:{
    //             item = 'http://blogdailyherald.com/wp-content/uploads/2013/04/382065_560557460633306_930109857_n.jpg';

    //             break;
    //         }
    //         case 1:{
    //             item = 'http://img0.pclady.com.cn/pclady/pet/choice/cat/1701/6.jpg';
    //             break;
    //         }
    //         default:{
    //             item = 'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/3812b31bb051f819dc048662dbb44aed2e73e7f1.jpg';
    //             break;
    //         }
    //     }
    //     this.state.items.push(item);
    // }
    // console.log(this.state.items + '111');
    // alert(this.state.items + '111');
    // this.setState({
    //     isShow: true,
    //     items: this.state.items
    // })
}

  render() {
      var Dimensions=require('Dimensions');
      var {height, width} = Dimensions.get('window');
      var txtLen=this.state.itemsText.join(",").length;
      var speed=txtLen*250;
    return (
      <View style={styles.container}>
       <ScrollView  
        horizontal={false}
        showsHorizontalScrollIndicator={false} 
        style={styles.hs}
        >
          {/* <ViewPagerAndroid
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
         </View> */}
        {/* 
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={this.gotoShopCart} title="返回上一页1"/> */}
        {/* <FootNav name="home" navigate={this.props.navigation.navigate}>
        </FootNav> */}
        <View style={{flexDirection:'row',flex:3,alignItems:'center', backgroundColor:'red',height:50,}}>
          <Text style={{flex:3,textAlign:'center',color:'#fff',}}>南京站</Text>
          <TextInput style={{flex:7,height:34, fontSize:14, textDecorationLine:'none', borderWidth:0, backgroundColor:'white',paddingLeft:28, paddingTop:0,paddingBottom:0, borderRadius:20,
    justifyContent: 'center', }} 
           underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果  
                      placeholder={'请输入商品名称'}
                  />
          <Image source={require('../main/assets/images/search.png')}  style={{ position:'absolute',left:'23%', height:20,borderRadius:5,flex:1,}} key = 'searchIndex' resizeMode='contain' />
          <Text style={{flex:2,textAlign:'center',color:'#fff',}}  onPress={this.gotoShopCart}>搜索</Text>
        </View>
          <View style={{ alignItems:'center', backgroundColor:'green'}}>
           <Swiper autoplay = {true}  
           autoplayTimeout={4}  //每隔4秒切换
           showsButtons={true}   //为false时不显示控制按钮
           showsPagination = {true} paginationStyle={{bottom: 10, justifyContent:'flex-end', right:10,}} 
           dotColor="white" 
           dot={<View style={{           //未选中的圆点样式
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 12,
                height: 12,
                borderRadius: 6,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}
           activeDotColor='yellow' 
           activeDot={<View style={{    //选中的圆点样式
                backgroundColor: '#007aff',
                width: 12,
                height: 12,
                borderRadius: 6,
                marginLeft: 10,
                marginRight: 9,
                marginTop: 9,
                marginBottom: 9,
            }}/>}
           horizontal={true}  style={{ flex:1, height: width*.5, width: width,}}>
                {
                    this.state.items.map((item, index) => {
                        // console.log(item, index) 
                        //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                        return (<ImageBackground style={{height: width*.5, width:width, flex:1,}} key = {index} resizeMode='cover' source={{uri: item}}/>)
                    })
                }
            </Swiper>
          </View>
          <View>
            {/* <MarqueeLabel
              // duration={this.state.itemsText.join(",").length*250} 
              speed={30}
              loop={true} 
              // text={'This is a Marquee Label.'}
              // textStyle={{ fontSize: 13, color: 'blue',paddingLeft:10, paddingTop:0,borderRadius:5,  }} 
              bgViewStyle={{ backgroundColor:'red', height: 20,  flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            overflow: 'scroll',}} 
              
              textContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',marginRight:10, paddingLeft:100,
              }} 
              // textContainerStyle={{ backgroundColor:'blue',}} 
            >
             {
                this.state.itemsText.map((item, index) => {
                    return (<Text style={{ backgroundColor:'#b6c3f8', marginRight:10, paddingLeft:10, }} key = {index} ><Text style={{ backgroundColor:'yellow', marginRight:10, paddingLeft:10, }} key = {'a'+index} >{index}</Text>{item}</Text>)
                })
              }
            </MarqueeLabel> */}
            <Text>{txtLen}==</Text>
              <Text style={styles.title}>
                  狗狗的家{width}--{height}
              </Text>
              <Text style={styles.title}>
                  狗狗的家
              </Text>
          </View>
          <View style={styles.container2}>
              <TextInputLayout
                  style={styles.inputLayout}
                  checkValid={t => EMAIL_REGEX.test(t)}
              >
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Email'}
                  />
              </TextInputLayout>
              <TextInputLayout style={styles.inputLayout}>
                  <TextInput
                      style={styles.textInput}
                      placeholder={'Password'}
                      secureTextEntry={true}
                  />
              </TextInputLayout>
          </View>

        </ScrollView>
      </View>
    );
  }
}

//https://www.jianshu.com/p/ae53fa17dd93
const styles = StyleSheet.create({
  container3: {
      flex: 1,
      paddingTop: 100,
  },
  label: {
      color: 'red',
      fontSize: 18,
      fontWeight: '800',
      letterSpacing: 10,
      fontStyle: 'italic',
      lineHeight: 50,
      backgroundColor: 'green',
      paddingHorizontal: 20,
      width: 200,
      left: 100,
      overflow: 'hidden',
  },
  container2: {
      flex: 1,
      paddingTop: 0,
      paddingBottom: 10,
      backgroundColor:'yellow',
  },
  textInput: {
      fontSize: 12,
      height: 32,
  },
  inputLayout: {
      marginTop: 10,
      marginHorizontal: 32,
      // backgroundColor:'rgb(233,222,200)',
  },
    backgroundImage:{
      flex:1,
    //   width:'100%',
    //   paddingTop:'80%',
      height: 320, width: 390,
    },
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
  },
  buttonGroup:{ 
    // position:'absolute',
    // bottom:10,
    height:30,
    // left:0,
    right:10,
    marginTop:-30,
  },
  buttonGroup2:{ 
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button:{  
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
    width:10,
    height:10,
    backgroundColor:'#eee',
    borderRadius: 5,
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