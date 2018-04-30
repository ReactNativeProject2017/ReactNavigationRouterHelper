import React,{Component} from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import NavigationService from "../router/NavigationService";


export  default class Page2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="返回到Page1"
                    onPress={() => NavigationService.popToN(1)}
                />
                <View
                    style ={{marginVertical:10}}
                >
                    <Button
                        title="跳转到Page3"
                        onPress={() => NavigationService.navigate('Page3')}
                    />
                </View>

            </View>
        );
    }
}