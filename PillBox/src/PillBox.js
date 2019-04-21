import { Login, Register, Home, ScheduleCreator, ScheduleViewer, DrugInput, Interactions, Logout } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    home: Home,
    drugInput: DrugInput,
    scheduler: ScheduleCreator,
    viewer: ScheduleViewer,
    interactions: Interactions,
    logout: Logout
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