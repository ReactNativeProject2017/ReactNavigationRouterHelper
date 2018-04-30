import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import NavigationService from "../router/NavigationService";


export default class Page4 extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="Go to Page1"
                    onPress={() => NavigationService.popToRouter('Page1')}
                />
                <View
                    style ={{marginVertical:10}}
                >
                <Button
                    title="Go to Page2"
                    style ={{marginVertical:10}}
                    onPress={() => NavigationService.popToRouter('Page2')}
                />
                </View>
                <Button
                    title="Go to Page3"
                    onPress={() => NavigationService.goBack()}
                />
            </View>
        );
    }
}