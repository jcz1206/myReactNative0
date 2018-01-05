/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
// import { Navigator } from 'react-native-deprecated-custom-components';
import { DrawerNavigator } from 'react-navigation';

/**导入一个自己写的js文件*/
// import Index1 from './index1.js';
import Index2 from './index2.js';
import Index4 from './index4.js';
import Welcome from './welcome.js';
// import Storage from './asyncStorage.js'; 
import Storage from '../utils/GetSetStorge.js'; 

// export default 
class Index extends Component<{}> {
//   static navigationOptions = {
//     title: 'Index',    
//   };
//   constructor(props) {
//     super(props);
//   }
  getW(){
    Storage.get('appW').then((tags) => {
      if(tags!=="0"&&tags!=="1"){
        Storage.save("appW","1");
        setTimeout(function(){this.props.navigation.navigate('Welcome') },0);
        
      }else{
        this.props.navigation.navigate('Index4') 
      }
    });
  }
  componentDidMount(){
    this.getW();
  }
  render() {
    return (
        // this.props.navigation.navigate('Welcome') 
        <View>
        </View>
      );
  }
}

 
  const IndexApp =DrawerNavigator({
    Index: { screen: Index },
    Index2: { screen: Index2},
    // Index1: { screen: Index1},
    Index4: { screen: Index4},
    Welcome:{ screen: Welcome },
  });
  export default IndexApp;

