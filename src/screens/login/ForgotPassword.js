import React, { Component } from "react";
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    KeyboardAvoidingView,
    Image,
    TextInput,
    BackHandler,
    ToastAndroid,
    Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./Login.style";
import Loading from "../../components/Loading";
import Axios from "axios";

const background = require("../../assets/open-lock.png");
const Color1 = "#42b9d6"
const Color2 = "gray"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            icMail: "md-mail",
            email: "",
            loading: false,
            isFocused: false,
            url: 'https://api-simplewallet-v1.herokuapp.com/api',
        };
    };

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
    }

    back = () => {
        const { navigation } = this.props;
        navigation.navigate("login")
    }

    onEmailChanged = email => this.setState({ email });
    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    sendEmail = () => {
        const { url, email } = this.state
        let data = new FormData()

        this.setState({ loading: true, })

        data.append('email', email)
        Axios.post(`${url}/password/create`, data)
            .then(res => {
                console.log(res)
                ToastAndroid.show("Success", ToastAndroid.SHORT)
                Alert.alert(
                    "We've email your account",
                    "Check your Email to Reset your Password",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") },
                    ]
                )
                this.setState({ loading: false, email: '', })
            })
            .catch(err => {
                console.log(err)
                ToastAndroid.show("Fail", ToastAndroid.SHORT)
                this.setState({ loading: false })
            })
    }

    onPressSend = () => {
        const { email } = this.state;
        if (email === "") {
            return null
        } else {
            return this.sendEmail()
        }
    };

    render() {
        const { email } = this.state;
        const { icMail, loading, isFocused } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={styles.baseView}>
                        <Loading title="Please wait..." loading={loading === true} />
                        <View style={styles.contentView}>
                            <View>
                                <Image
                                    source={background}
                                    style={{ width: Dimensions.get('window').width - 100, height: Dimensions.get('window').height - 370 }}
                                />
                            </View>
                            <View style={{ justifyContent: "space-between", alignItems: "center", justifyContent: "center" }}>
                                <View style={styles.textViewDesc}>
                                    <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>Don't worry, just enter your email address and we'll{"\n"}set you up with a new password. You can change it{"\n"}after this.</Text>
                                </View>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"} enabled>
                                <View style={styles.textInputView}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon
                                            style={styles.iconMail}
                                            name={icMail}
                                            size={25}
                                            color="#42b9d6"
                                        />
                                        <TextInput
                                            style={styles.email}
                                            onChangeText={this.onEmailChanged}
                                            value={email}
                                            placeholder="E-mail"
                                            placeholderTextColor="#cdcdcd"
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            returnKeyType="done"
                                            onFocus={this.handleFocus}
                                            onBlur={this.handleBlur}
                                            selectionColor="#42b9d6"
                                            underlineColorAndroid={
                                                isFocused ? Color1 : Color2
                                            }
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={{ justifyContent: "space-between", alignSelf: "center" }}>
                                <Text onPress={this.onPressSend} style={{ color: "#42b9d6", fontSize: 25 }}>SEND</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default Login