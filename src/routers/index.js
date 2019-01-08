import {
  createSwitchNavigator
} from "react-navigation";

import UnAuthNavigation from './unAuthorizedNavigation';
import AuthNavigation from './authorizedNavigation';
import Splash from "../components/Splash";

const RouteConfigs = {
  UnAuthNavigation: {
    screen: UnAuthNavigation
  },
  Splash: {
    screen: Splash
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
