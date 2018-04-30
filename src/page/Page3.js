import React,{Component} from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import NavigationService from "../router/NavigationService";


export  default class Page3 extends Component {


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                title="Go to Page1"
                onPress={() => NavigationService.popToTop()}
            />
                <View
                    style ={{marginVertical:10}}
                >
                <Button
                    title="Go to Page2"
                    onPress={() => NavigationService.goBack()}
                    style ={{marginVertical:10}}
                />
                </View>
                <Button
                    title="Go to Page4"
                    onPress={() => NavigationService.navigate('Page4')}
                />
            </View>
        );
    }
}