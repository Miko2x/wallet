import { combineReducers } from 'redux';
import nav from './nav';
import authReducer from './authReducer';

export default combineReducers({
    authReducer,
    nav
})