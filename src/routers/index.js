import {
  createSwitchNavigator
} from "react-navigation";

import UnAuthNavigation from './unAuthorizedNavigation';
import AuthNavigation from './authorizedNavigation';

const RouteConfigs = {
  UnAuthNavigation: {
    screen: UnAuthNavigation
  },
  AuthNavigation: {
    screen: AuthNavigation
  }
}

const SwitchNavigatorConfig = {
  initialRouteName: 'UnAuthNavigation'
}

const AppNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);

export default AppNavigation;
