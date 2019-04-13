import { Login, Register, Home, Scheduler, DrugInput, Interactions, Logout } from './components/screens'
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';


const HomeTabs = createBottomTabNavigator({
    home: Home,
    scheduler: Scheduler,
    drugInput: DrugInput,
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

// class PillBox extends Component {
//     render() {
//         return(
//             createAppContainer(MainStack)
//         )
//     }
// }

export default PillBox;