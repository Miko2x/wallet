import { createStackNavigator } from "react-navigation";

import Login from "../screens/login/Login.container";
import SignUp from "../screens/signup/Signup.container";
import Forgot from "../screens/login/ForgotPassword";

const UnAuthNavigation = createStackNavigator({
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    forgot: {
        screen: Forgot,
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