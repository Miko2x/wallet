import React, { Component } from "react";
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    TextInput,
    BackHandler,
    ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./Login.style";
import Loading from "../../components/Loading";
const background = require("../../assets/background1.png");

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icEye: "md-eye-off",
            icLock: "md-lock",
            icMail: "md-mail",
            email: "",
            password: "",
            pwdShow: true,
            loading: false
        };
    };

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
    }

    back = () => {
        BackHandler.exitApp()
    }

    changePwdType = () => {
        let newState;
        if (this.state.pwdShow) {
            newState = {
                icEye: "md-eye",
                pwdShow: false
            };
        } else {
            newState = {
                icEye: "md-eye-off",
                pwdShow: true
            };
        };

        this.setState(newState);

    };

    onEmailChanged = email => this.setState({ email });

    onPasswordChanged = password => this.setState({ password });

    onPressLogin = () => {
        const { email, password } = this.state;
        if (email === "" && password === "") {
            return null
        } else if ( email !== "" && password !== ""){
            return this.props.postLogin({ email, password }) && this.setState({ loading: true })
        } else{
            return this.props.loading === false
        }
    };

    onPressSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("signUp");
        this.setState({ email: "", password: "" })
    };

    onPressForgot = () => {
        const { navigation } = this.props;
        navigation.navigate("forgot")
    }

    render() {
        const { email, password } = this.state;
        const { icEye, icLock, icMail, pwdShow, loading } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground source={background} style={styles.bg}>
                    <View style={styles.baseView}>
                        <Loading title="Please wait..." loading={loading === true} />
                        <View style={styles.contentView}>
                            <View style={styles.textView}>
                                <View>
                                    <Text style={styles.caption}>Login</Text>
                                </View>
                                <View style={styles.textViewDesc}>
                                    <Text style={styles.description}>Sign in with your account, if you don't{"\n"}have account, please Sign Up first</Text>
                                </View>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"} enabled>
                                <View style={styles.textInputView}>
                                    <View style={styles.textInputEmail} >
                                        <Icon
                                            style={styles.iconMail}
                                            name={icMail}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.email}
                                            onChangeText={this.onEmailChanged}
                                            value={email}
                                            placeholder="E-mail"
                                            placeholderTextColor="#cdcdcd"
                                            onSubmitEditing={() => this.next1.focus()}
                                            blurOnSubmit={false}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                        />
                                    </View>
                                    <View style={styles.textInputPassword}>
                                        <Icon
                                            style={styles.iconLock}
                                            name={icLock}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.password}
                                            onChangeText={this.onPasswordChanged}
                                            value={password}
                                            placeholder="Password"
                                            placeholderTextColor="#cdcdcd"
                                            ref={input => this.next1 = input}
                                            secureTextEntry={pwdShow}
                                            autoCapitalize="none"
                                            returnKeyType="done"
                                        />
                                        <Icon
                                            style={styles.iconEye}
                                            name={icEye}
                                            size={25}
                                            color="#cdcdcd"
                                            onPress={this.changePwdType}
                                        />
                                    </View>
                                    <Text style={styles.textForgot} onPress={this.onPressForgot}>Forgot your Password?</Text>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={this.onPressLogin}>
                                    <View style={styles.textButtonLoginView}>
                                        <Text style={styles.textButton}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onPressSignUp}>
                                    <View style={styles.textButtonSignUpView}>
                                        <Text style={styles.textButton}>Sign Up</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        )
    }
}

export default Login