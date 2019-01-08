import { ToastAndroid, Alert } from "react-native";
import CacheStorage from "react-native-cache-store";
import { loginUrl, signUpUrl } from "../../utils/endpoints";

import {
    NAME_PROFILE,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD,
    GET_LOGIN_BEGIN,
    GET_LOGIN_FAILURE,
    LOGIN_SUCCESS,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS
} from "../type/type";


export const nameProfile = text => {
    return {
        type: NAME_PROFILE,
        payload: text
    }
}

export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const confirmPasswordChanged = text => {
    return {
        type: CONFIRM_PASSWORD,
        payload: text
    };
}

export const createUser = ({ name, email, password, rePassword }) => {
    return dispatch => {
        dispatch(createUserBegin);
        return fetch(signUpUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                password_confirmation: rePassword
            }),
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: CREATE_USER_SUCCESS,
                    payload: data
                });
                console.log(data)
                Alert.alert(
                    "You have successfully registered",
                    "Check your Email to confirmation your Account",
                    [
                      {text: "OK", onPress: () => console.log("OK Pressed")},
                    ]
                  )
                dispatch({ type: "Navigation/NAVIGATE", routeName: "login" });
            })
            .catch((error) => {
                console.log(error)
                ToastAndroid.show("Error", ToastAndroid.SHORT)
            })
    }
}

const createUserBegin = () => {
    return {
        type: CREATE_USER_BEGIN
    };
};

export const postLogin = ({ email, password }) => {
    return dispatch => {
        dispatch(getLoginBegin);
        return fetch(loginUrl, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.access_token) {
                    CacheStorage.set("access_token", data.access_token);
                    console.log(data)
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: data.access_token
                    })
                    ToastAndroid.show("Success !", ToastAndroid.SHORT);
                    dispatch({
                        type: "Navigation/NAVIGATE",
                        routeName: "AuthNavigation"
                    });
                } else if (!data.access_token) {
                    dispatch({
                        type: GET_LOGIN_FAILURE
                    })
                    console.log(data)
                    ToastAndroid.show("Invalid email or password !", ToastAndroid.SHORT);
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(getLoginFailure(error));
                ToastAndroid.show("Please check your connection", ToastAndroid.SHORT);
            })
    };
};

const getLoginBegin = () => {
    return {
        type: GET_LOGIN_BEGIN
    };
};

const getLoginFailure = error => {
    return {
        type: GET_LOGIN_FAILURE,
        payload: error
    };
};