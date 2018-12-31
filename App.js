import React from "react";
import { BackHandler } from "react-native";
import { Provider } from "react-redux";
import CacheStore from "react-native-cache-store";
import _ from "lodash";

import getStore from "./src/redux/reducers/store";

const { store, AppWithNavigationState } = getStore()

class App extends React.Component {

  checkToken() {
    CacheStore.get("access_token").then(value => {
      if (_.isEmpty(value)) {
        store.dispatch({ type: "Navigation/NAVIGATE", routeName: "UnAuthNavigation" })
      } else {
        store.dispatch({ type: "Navigation/NAVIGATE", routeName: "AuthNavigation" })
      }
    });
  }

  componentDidMount() {
    this.checkToken();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default App