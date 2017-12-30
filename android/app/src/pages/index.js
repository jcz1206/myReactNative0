
import React, { Component } from 'react';
import {
  AppState,
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import IndexAction from '../redux/actions/indexAction.js';

export default class Index extends Component<{}> {
    constructor(props) {
        super(props);
    }
    render() {
       /** state,add,del是哪里来的？不要急 **/
        const {state}=this.props;
        // const {add,del,init}=this.props.actions;
        return (
            <View style={styles.container}>
                <Text>Redux-加法运算</Text>
                <View style={styles.item}>
                    <Text>合 计:</Text>
                    {/* <Text style={{color: 'red'}}>{state.sum}</Text> */}
                </View>
                <View style={[styles.item, {top: 10}]}>
                    {/* <TouchableWithoutFeedback onPress={add} >
                        <View style={styles.touch}>
                            <Text style={styles.but}>+</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={del}>
                        <View style={styles.touch}>
                            <Text style={styles.but}>-</Text>
                        </View>
                    </TouchableWithoutFeedback> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{

    },
    item: {
      width:40,
      height:40,
    },
    touch:{
      backgroundColor: 'green',
    },
    but:{
        backgroundColor: 'green',
    }
  });
