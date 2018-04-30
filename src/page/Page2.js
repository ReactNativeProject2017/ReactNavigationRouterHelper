import React,{Component} from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import NavigationService from "../router/NavigationService";


export  default class Page2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Go to Page1"
                    onPress={() => NavigationService.goBack()}
                />
                <View
                    style ={{marginVertical:10}}
                >
                    <Button
                        title="Go to Page3"
                        onPress={() => NavigationService.navigate('Page3')}
                    />
                </View>

            </View>
        );
    }
}