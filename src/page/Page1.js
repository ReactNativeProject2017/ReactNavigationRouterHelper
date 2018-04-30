import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationService from "../router/NavigationService";


export default class Page1 extends Component {

    //
    static navigationOptions = {
        header:({navigation}) =>{
            let {state:{routes}} = navigation;
            NavigationService.setRouters(routes, navigation);
            return <View style ={styles.titleStyle}><Text style ={{fontWeight:'bold',fontSize:16,color:'black'}}>page1</Text></View>;
        }
    };

    componentDidMount(){
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="跳转到Page2"
                    onPress={() => NavigationService.navigate('Page2')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
})