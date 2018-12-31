import { createStore, applyMiddleware } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import AppNavigation from "../../routers";
import appReducer from "./index";

const navMidleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const logger = __DEV__ ? createLogger() : () => null;

const App = reduxifyNavigator(AppNavigation, "root");
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

let createStoreWithMiddleware = null;
if (__DEV__) {
  createStoreWithMiddleware = applyMiddleware(navMidleware, thunk)(
    createStore
  );
} else {
  createStoreWithMiddleware = applyMiddleware(navMidleware, thunk)(createStore);
}

const store = createStoreWithMiddleware(appReducer);

export default () => {
  return { store, AppWithNavigationState };
};