import React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./Signup.style";
import Loading from "../../components/Loading";
const background = require("../../assets/background2.png");

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icContact: "md-contact",
            icMail: "md-mail",
            icLock: "md-lock",
            icEye: "md-eye-off",
            icEyeRe: "md-eye-off",
            pwdShow: true,
            rePwdShow: true
        };
    };

    changePwdType = () => {
        let newState1;
        if (this.state.pwdShow) {
            newState1 = {
                icEye: "md-eye",
                pwdShow: false
            };
        } else {
            newState1 = {
                icEye: "md-eye-off",
                pwdShow: true
            };
        };

        this.setState(newState1);

    };

    changeRePwdType = () => {
        let newState2;
        if (this.state.rePwdShow) {
            newState2 = {
                icEyeRe: "md-eye",
                rePwdShow: false
            };
        } else {
            newState2 = {
                icEyeRe: "md-eye-off",
                rePwdShow: true
            };
        };

        this.setState(newState2);

    };

    onNameChanged = name => this.props.nameProfile(name);

    onEmailChanged = email => this.props.emailChanged(email);

    onPasswordChanged = password => this.props.passwordChanged(password);

    onRePasswordChanged = rePassword => this.props.confirmPasswordChanged(rePassword);

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
    }

    back = () => {
        return this.props.navigation.navigate("login")
    }

    onPressSignUp = () => {
        const { name, email, password, rePassword } = this.props;
        this.props.createUser({ name, email, password, rePassword });
        <Loading />
    };

    onPressLogin = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { name, email, password, rePassword } = this.props;
        const isEnabled =
            name.length > 0 &&
            email.length > 0 &&
            password.length > 0 &&
            rePassword.length > 0
        const { icContact, icMail, icLock, icEye, icEyeRe, pwdShow, rePwdShow } = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <ImageBackground source={background} style={styles.bg}>
                    <View style={styles.baseView}>
                        <View style={styles.contentView}>
                            <View style={styles.textView}>
                                <View>
                                    <Text style={styles.caption}>Sign Up</Text>
                                </View>
                                <View style={styles.textViewDesc}>
                                    <Text style={styles.description}>Here you can fill the form and create your own{"\n"}account. If you have account, click the{"\n"}Login button</Text>
                                </View>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"}>
                                <View style={styles.textInputView}>
                                    <View style={styles.allTextInput} >
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icContact}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.textInputUser}
                                            onChangeText={this.onNameChanged}
                                            value={name}
                                            placeholder="Name"
                                            placeholderTextColor="#cdcdcd"
                                            onSubmitEditing={() => this.next.focus()}
                                            blurOnSubmit={false}
                                            returnKeyType="next"
                                        />
                                    </View>
                                    <View style={styles.allTextInput} >
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icMail}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.textInputUser}
                                            onChangeText={this.onEmailChanged}
                                            value={email}
                                            placeholder="Email"
                                            placeholderTextColor="#cdcdcd"
                                            ref={input => this.next = input}
                                            onSubmitEditing={() => this.next1.focus()}
                                            blurOnSubmit={false}
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                            keyboardType="email-address"
                                        />
                                    </View>
                                    <View style={styles.allTextInput}>
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icLock}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.textInputPassword}
                                            onChangeText={this.onPasswordChanged}
                                            value={password}
                                            placeholder="Password"
                                            placeholderTextColor="#cdcdcd"
                                            ref={input => this.next1 = input}
                                            onSubmitEditing={() => this.next2.focus()}
                                            blurOnSubmit={false}
                                            autoCapitalize="none"
                                            returnKeyType="next"
                                            secureTextEntry={pwdShow}
                                        />
                                        <Icon
                                            style={styles.rightIcon}
                                            name={icEye}
                                            size={25}
                                            color="#cdcdcd"
                                            onPress={this.changePwdType}
                                        />
                                    </View>
                                    <View style={styles.allTextInput}>
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icLock}
                                            size={25}
                                            color="#cdcdcd"
                                        />
                                        <TextInput
                                            style={styles.textInputPassword}
                                            onChangeText={this.onRePasswordChanged}
                                            value={rePassword}
                                            placeholder="Confirm Password"
                                            placeholderTextColor="#cdcdcd"
                                            ref={input => this.next2 = input}
                                            returnKeyType="done"
                                            autoCapitalize="none"
                                            secureTextEntry={rePwdShow}
                                        />
                                        <Icon
                                            style={styles.rightIcon}
                                            name={icEyeRe}
                                            size={25}
                                            color="#cdcdcd"
                                            onPress={this.changeRePwdType}
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={this.onPressSignUp} disabled={!isEnabled}>
                                    <View style={styles.textButtonLoginView}>
                                        <Text style={styles.textButton}>Sign Up</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onPressLogin}>
                                    <View style={styles.textButtonSignUpView}>
                                        <Text style={styles.textButton}>Login</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    };
};

export default SignUp;