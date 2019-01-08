import React from "react";
import {
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler,
    ToastAndroid
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Axios from "axios";
import CacheStorage from "react-native-cache-store";

import styles from "./ChangePassword.style";
import Loading from "../../components/Loading";
import FloatingLabelInput from "../../components/floatLabel";

class ChangePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current_password: "",
            password: "",
            password_confirmation: "",
            icMail: "md-mail",
            icLock: "md-lock",
            icEye: "md-eye-off",
            icEyeNew: "md-eye-off",
            icEyeRe: "md-eye-off",
            pwdShow: true,
            newPwdShow: true,
            rePwdShow: true,
            loading: false,
            url: 'https://api-simplewallet-v1.herokuapp.com/api/v1'
        };
    };

    changePwdType = () => {
        const { pwdShow } = this.state;
        let newState1;
        if (pwdShow) {
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

    changeNewPwdType = () => {
        const { newPwdShow } = this.state;
        let newState2;
        if (newPwdShow) {
            newState2 = {
                icEyeNew: "md-eye",
                newPwdShow: false
            };
        } else {
            newState2 = {
                icEyeNew: "md-eye-off",
                newPwdShow: true
            };
        };

        this.setState(newState2);

    };

    changeRePwdType = () => {
        const { rePwdShow } = this.state;
        let newState3;
        if (rePwdShow) {
            newState3 = {
                icEyeRe: "md-eye",
                rePwdShow: false
            };
        } else {
            newState3 = {
                icEyeRe: "md-eye-off",
                rePwdShow: true
            };
        };

        this.setState(newState3);

    };

    componentDidMount() {
        BackHandler.addEventListener("back", this.back);
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    back = () => {
        return this.props.navigation.navigate("edit")
    }

    changePassword = () => {
        console.log("On Progress");
        this.setState({ loading: true })
        const data = new FormData();

        data.append('current_password', this.state.current_password)
        data.append('password', this.state.password)
        data.append('password_confirmation', this.state.password_confirmation)

        const { token, url } = this.state;
        Axios.post(`${url}/changepassword?token=${token}`, data)
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({ loading: false })
                ToastAndroid.show("success", ToastAndroid.SHORT)
                this.props.navigation.navigate("edit")
            }).catch(err => {
                console.log(err)
                ToastAndroid.show("failed", ToastAndroid.SHORT)
                this.setState({ loading: false })
            })
    }

    onPasswordChanged = current_password => this.setState({ current_password });

    onNewPasswordChanged = password => this.setState({ password });

    onRePasswordChanged = password_confirmation => this.setState({ password_confirmation });

    onPressCancel = () => {
        const { navigation } = this.props;
        navigation.navigate("edit");
    };

    render() {
        const { current_password, password, password_confirmation } = this.state;
        const isEnabled = current_password > 0 && password > 0 && password_confirmation > 0
        const { icLock, icEye, icEyeNew, icEyeRe, pwdShow, newPwdShow, rePwdShow, loading } = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.bg}>
                    <View style={styles.baseView}>
                        <Loading title="Please wait..." loading={loading === true} />
                        <View style={styles.contentView}>
                            <View style={styles.textView}>
                                <View>
                                    <Text style={styles.caption}>Change Password</Text>
                                </View>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"}>
                                <View style={styles.parentInput}>
                                    <View style={styles.chilInput} >
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icLock}
                                            size={25}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.allTextInput}>
                                            <FloatingLabelInput
                                                onChangeText={this.onPasswordChanged}
                                                value={current_password}
                                                label="Current Password"
                                                onSubmitEditing={() => this.next1.handleFocus()}
                                                blurOnSubmit={false}
                                                autoCapitalize="none"
                                                returnKeyType="next"
                                                secureTextEntry={pwdShow}
                                            />
                                        </View>
                                        <Icon
                                            style={styles.rightIcon}
                                            name={icEye}
                                            size={25}
                                            color="#42b9d6"
                                            onPress={this.changePwdType}
                                        />
                                    </View>
                                    <View style={styles.chilInput}>
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icLock}
                                            size={25}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.allTextInput}>
                                            <FloatingLabelInput
                                                onChangeText={this.onNewPasswordChanged}
                                                value={password}
                                                label="Password"
                                                ref={input => this.next1 = input}
                                                onSubmitEditing={() => this.next2.handleFocus()}
                                                blurOnSubmit={false}
                                                autoCapitalize="none"
                                                returnKeyType="next"
                                                secureTextEntry={newPwdShow}
                                            />
                                        </View>
                                        <Icon
                                            style={styles.rightIcon}
                                            name={icEyeNew}
                                            size={25}
                                            color="#42b9d6"
                                            onPress={this.changeNewPwdType}
                                        />
                                    </View>
                                    <View style={styles.chilInput}>
                                        <Icon
                                            style={styles.leftIcon}
                                            name={icLock}
                                            size={25}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.allTextInput}>
                                            <FloatingLabelInput
                                                onChangeText={this.onRePasswordChanged}
                                                value={password_confirmation}
                                                label="Confirm Password"
                                                ref={input => this.next2 = input}
                                                returnKeyType="done"
                                                autoCapitalize="none"
                                                secureTextEntry={rePwdShow}
                                            />
                                        </View>
                                        <Icon
                                            style={styles.rightIcon}
                                            name={icEyeRe}
                                            size={25}
                                            color="#42b9d6"
                                            onPress={this.changeRePwdType}
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={this.changePassword} disabled={!isEnabled}>
                                    <View style={styles.textButtonLoginView}>
                                        <Text style={styles.textButton}>Change</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onPressCancel}>
                                    <View style={styles.textButtonSignUpView}>
                                        <Text style={styles.textButton}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };
};

export default ChangePassword;