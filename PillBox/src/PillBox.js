import React, { Component } from 'react'
import { Login, Register, Home, Scheduler, Scan } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    home: Home,
    scheduler: Scheduler,
    scan: Scan
});

const SignIn = createStackNavigator({
    login: Login,
    register: Register
}, {
    initialRouteName: 'login',
});

const MainStack = createSwitchNavigator({
    signin: SignIn,
    home: HomeTabs 
}, {
    initialRouteName: 'signin',
});

class PillBox extends Component {
    render() {
        return(
            <MainStack/>
        )
    }
}

export default createAppContainer(MainStack);