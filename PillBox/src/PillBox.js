import { Login, Register, Home, ScheduleCreator, ScheduleViewer, DrugInput, Interactions, Logout, ChangeInformation } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    home: Home,
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
    home: HomeStack 
}, {
    initialRouteName: 'signin',
});

const PillBox = createAppContainer(MainStack);

export default PillBox;