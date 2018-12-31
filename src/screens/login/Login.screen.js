import React, { Component } from "react";
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    TextInput
} from "react-native";
import _ from "lodash";
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
        };
    };

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

    onEmailChanged = email => this.setState({email});

    onPasswordChanged = password => this.setState({password});

    onPressLogin = () => {
        const { email, password } = this.state;
        this.props.postLogin({ email, password });
        <Loading/>
    };

    onPressSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("signUp");
    };

    render() {
        const { email, password } = this.state;
        const isEnabled =
            email.length > 0 &&
            password.length > 0;
        const { icEye, icLock, icMail, pwdShow } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground source={background} style={styles.bg}>
                    <View style={styles.baseView}>
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
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={this.onPressLogin} disabled={!isEnabled}>
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