import Login from "./Login.screen";
import { connect } from "react-redux";

import {
    postLogin,
    getLoginBegin,
    getLoginFailure,
    emailChanged,
    passwordChanged,
} from "../../redux/actions/user";


const mapStateToProps = state => {
    const { email, password, loading } = state.authReducer
    return {
        email,
        password,
        loading
    };
};
export default connect(
    mapStateToProps,
    {
        postLogin,
        getLoginBegin,
        getLoginFailure,
        emailChanged,
        passwordChanged
    }
)(Login);