import {
    NAME_PROFILE,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD,
    GET_LOGIN_BEGIN,
    GET_LOGIN_FAILURE,
    LOGIN_SUCCESS,
    CREATE_USER_BEGIN,
    CREATE_USER_SUCCESS,
    EMAIL_EXISTS,
} from "../type/type";

const initialState = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    token: "",
    error: null,
    loading: false
};

export default (authReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_PROFILE:
            return {
                ...state,
                name: action.payload
            };
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case CONFIRM_PASSWORD:
            return {
                ...state,
                rePassword: action.payload
            };
        case GET_LOGIN_BEGIN:
            return {
                ...state,
                email: "",
                password: "",
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                email: "",
                password: "",
                loading: false
            };
        case GET_LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                email: "",
                password: "",
                loading: false
            };
        case CREATE_USER_BEGIN:
            return {
                ...state,
                loading: true
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                name: "",
                email: "",
                password: "",
                rePassword: "",
                loading: false
            };
        case EMAIL_EXISTS:
            return {
                ...state,
                email: "",
                password: "",
                loading: false
            };
        default:
            return state;
    }
});