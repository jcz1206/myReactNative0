import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';


export default class footNav extends Component<{}>{
    constructor(props){
        super(props);
        this.state={
            current:props.current,
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.nav}>
                { 
                    this.state.current=='home'? <Image source={require("../main/assets/footer/home.png")}/>
                    : <Image source={require("../main/assets/footer/home1.png")}/>                
                }
                </Text>
                <Text style={styles.nav}>
                { 
                    this.state.current=='order'? <Image source={require("../main/assets/footer/order.png")}/>
                    : <Image source={require("../main/assets/footer/order1.png")}/>                
                }
                </Text>
                <Text style={styles.nav}>
                { 
                    this.state.current=='cart'? <Image source={require("../main/assets/footer/shoppingCar.png")}/>
                    : <Image source={require("../main/assets/footer/shoppingCar1.png")}/>                
                }
                </Text>
                <Text style={styles.nav}>
                { 
                    this.state.current=='my'? <Image source={require("../main/assets/footer/my.png")}/>
                    : <Image source={require("../main/assets/footer/my1.png")}/>                
                }
                </Text>
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
        // height:50,
        width:'100%',
        position:'absolute',
        bottom:0,
    }    ,
    nav:{
        height:56,
        width:'25%',
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    }
});