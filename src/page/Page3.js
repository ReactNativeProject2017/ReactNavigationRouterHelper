import React,{Component} from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import NavigationService from "../router/NavigationService";


export  default class Page3 extends Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="返回到Page1"
                onPress={() => NavigationService.popToN(2)}
            />
                <View
                    style ={{marginVertical:10}}
                >
                <Button
                    title="返回到Page2"
                    onPress={() => NavigationService.goBack()}
                    style ={{marginVertical:10}}
                />
                </View>
                <Button
                    title="跳转到Page4"
                    onPress={() => NavigationService.navigate('Page4')}
                />
            </View>
        );
    }
}