import {
  createSwitchNavigator
} from "react-navigation";

import UnAuthNavigation from './unAuthorizedNavigation';
import AuthNavigation from './authorizedNavigation';
import Splash from "../components/Splash";
// cuma mau coba-coba aja mik
const RouteConfigs = {
  Splash: {
    screen: Splash
  },
  UnAuthNavigation: {
    screen: UnAuthNavigation
  },
  AuthNavigation: {
    screen: AuthNavigation
  }
}

const SwitchNavigatorConfig = {
  initialRouteName: 'Splash'
}

const AppNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);

export default AppNavigation;
