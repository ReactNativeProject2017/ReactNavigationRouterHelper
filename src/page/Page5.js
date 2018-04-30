import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationService from "../router/NavigationService";


export default class Page4 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="返回到Page1"
                    onPress={() => NavigationService.popToRouter('Page1')}
                />
                <View
                    style ={{marginVertical:10}}
                >
                <Button
                    title="返回到Page2"
                    style ={{marginVertical:10}}
                    onPress={() => NavigationService.popToRouter('Page2')}
                />
                </View>
                <View
                    style ={{marginVertical:10}}
                >
                <Button
                    title="返回到Page3"
                    onPress={() => NavigationService.popToRouter('Page3')}
                />
                </View>
                <Button
                    title="返回到Page4"
                    onPress={() => NavigationService.goBack()}
                />

            </View>
        );
    }
}