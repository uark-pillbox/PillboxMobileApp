import React, { Component } from 'react'
import { Image } from 'react-native'
import { Login, Register, Home, ScheduleCreator, ScheduleViewer, DrugInput, Interactions, Logout, ChangeInformation } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./resources/home.png')}/>
            )
        }
    },
    drugInput: DrugInput,
    scheduler: ScheduleCreator,
    viewer: ScheduleViewer,
    interactions: Interactions,
    logout: Logout
});

const HomeStack = createStackNavigator({
    home: HomeTabs,
    changeInformation: ChangeInformation
}, {
    initialRouteName: 'home',
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

const PillBox = createAppContainer(MainStack);

export default PillBox;