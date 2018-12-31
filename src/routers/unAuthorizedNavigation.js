import { createStackNavigator } from 'react-navigation';

import Login from '../screens/login/Login.container';
import SignUp from '../screens/signup/Signup.container';

const UnAuthNavigation = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    signUp: {
        screen: SignUp,
        navigationOptions: {
            header: null
        }
    }
},
{
    initialRouteName: "login"
})

export default UnAuthNavigation;