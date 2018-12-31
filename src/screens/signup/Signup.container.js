import { connect } from "react-redux";
import SignUp from "./Signup.screen";

import {
    createUser,
    nameProfile,
    emailChanged,
    passwordChanged,
    confirmPasswordChanged
} from "../../redux/actions/user";

const mapStateToProps = (state) => {
    const { name, email, password, rePassword } = state.authReducer
    return {
        name,
        email,
        password,
        rePassword
    };
};

export default connect(mapStateToProps, {
    createUser,
    nameProfile,
    emailChanged,
    passwordChanged,
    confirmPasswordChanged
})(SignUp);