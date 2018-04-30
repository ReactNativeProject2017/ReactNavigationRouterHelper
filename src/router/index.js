import React, {Component} from 'react'

import NavigationService from './NavigationService'





import { StackNavigator} from 'react-navigation'
import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import Page4 from "../page/Page4";


const screens ={
    Page1:{
        screen:Page1,
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            title:'Page2'
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            title:'Page3'
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            title:'Page4'
        }
    }
}

const Nav = new StackNavigator({
    ...screens
})

class App extends Component {

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render() {
        return (
            <Nav
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
       )
    }
}

export default App;