import React, { Component } from 'react'
import { Image } from 'react-native'
import { Login, Register, Home, ScheduleCreator, ScheduleViewer, DrugInput, Interactions, Logout, ChangeInformation } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/home.png')}/>
            )
        }
    },
    Input: {
        screen: DrugInput,
        navigationOptions: {
            tabBarLabel: "Input",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/drugInput.png')}/>
            )
        }
    },
    Scheduler: {
        screen: ScheduleCreator,
        navigationOptions: {
            tabBarLabel: "Scheduler",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/scheduleCreator.png')}/>
            )
        }
    },
    Viewer: {
        screen: ScheduleViewer,
        navigationOptions: {
            tabBarLabel: "Viewer",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/scheduleViewer.png')}/>
            )
        }
    },
    Interactions: {
        screen: Interactions,
        navigationOptions: {
            tabBarLabel: "Interactions",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/interactions.png')}/>
            )
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            tabBarLabel: "Logout",
            tabBarIcon: () => (
                <Image
                    source={require('./resources/logout.png')}/>
            )
        }
    }
});

const HomeStack = createStackNavigator({
    home: HomeTabs,
    changeInformation: ChangeInformation
}, {
    initialRouteName: 'home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const SignIn = createStackNavigator({
    login: Login,
    register: Register
}, {
    initialRouteName: 'login',
});

const MainStack = createSwitchNavigator({
    signin: SignIn,
    home: HomeStack 
}, {
    initialRouteName: 'signin',
});

const PillBox = createAppContainer(MainStack);

export default PillBox;