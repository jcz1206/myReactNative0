import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';


export default 
class footNav extends Component<{}>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.nav} onPress={()=>{this.props.navigate('Index2')}}>
                { 
                    this.props.name=='home'? <Image source={require("../main/assets/footer/home.png")} style={styles.navimg}/>
                    : <Image source={require("../main/assets/footer/home1.png")} style={styles.navimg}/>            
                }
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav} onPress={()=>{this.props.navigate('Order')}}>
                { 
                    this.props.name=='order'? <Image source={require("../main/assets/footer/order.png")} style={styles.navimg}/>
                    : <Image source={require("../main/assets/footer/order1.png")} style={styles.navimg}/>                
                }
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav} onPress={()=>{this.props.navigate('ShopCart')}}>
                { 
                    this.props.name=='cart'? <Image source={require("../main/assets/footer/shoppingCar.png")} style={styles.navimg}/>
                    : <Image source={require("../main/assets/footer/shoppingCar1.png")} style={styles.navimg}/>                
                }
                </TouchableOpacity>
                <TouchableOpacity style={styles.nav} onPress={()=>{this.props.navigate('My')}}>
                { 
                    this.props.name=='my'? <Image source={require("../main/assets/footer/my.png")} style={styles.navimg}/>
                    : <Image source={require("../main/assets/footer/my1.png")} style={styles.navimg}/>                
                }
                </TouchableOpacity>
            </View>
        );
    }
}

// const Footer=DrawerNavigator({
//     FootNav:{screen:footNav},
// // },{
// //     backBehavior: 'none',
// })
// export default Footer;
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
    },
    nav:{
        height:50,
        width:'25%',
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        // textAlign:'center',
    },
    navimg:{
        height:45,
        width:40,
    }
});