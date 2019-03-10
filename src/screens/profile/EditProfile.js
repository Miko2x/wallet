import React from "react";
import {
    View, Text, Image, TextInput, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback,
    KeyboardAvoidingView, Keyboard, ToastAndroid, BackHandler, FlatList
} from "react-native";
import CacheStorage from "react-native-cache-store";
import axios from "axios";

import Loading from "../../components/Loading";
import { userDataUrl } from "../../utils/endpoints";
import styles from "./EditProfile.style";
import FloatingLabelInput from "../../components/floatLabel";

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: "",
            name: "",
            phone: "",
            datas: [],
            loading: false,
        }
    }

    componentWillMount() {
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
                this.getData({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
    }

    back = () => {
        return this.props.navigation.navigate("profile")
    }

    onTapPicture = () => {
        const { navigation } = this.props;
        navigation.navigate("camera");
    }

    changePwd = () => {
        const { navigation } = this.props;
        navigation.navigate("change")
    }

    getData() {
        const token = this.state.token
        this.setState({ loading: true })
        return fetch(userDataUrl, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(responJSON => {
                console.log(responJSON)
                this.setState({
                    loading: false,
                    datas: [responJSON.data],
                    name: responJSON.data.name,
                    phone: responJSON.data.phone_number
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
            });
    };

    updatedata() {
        this.setState({ loading: true })
        const token = this.state.token
        console.log(token)
        const { name, phone } = this.state
        axios.put(`https://api-simplewallet-v1.herokuapp.com/api/v1/user/update?token=${token}`, {
            name: name,
            phone_number: phone,

        })
            .then(responJSON => {
                console.log(responJSON)
                this.setState({
                    name: responJSON.data.name,
                    phone: responJSON.data.phone_number,
                    loading: false
                })
                ToastAndroid.show("Your data has been changed", ToastAndroid.SHORT);
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
                ToastAndroid.show("Your data failed to changed", ToastAndroid.SHORT);
            });
    }

    nameChanged = name => this.setState({ name: name });

    phoneChanged = phone => this.setState({ phone: phone });

    renderDatas = ({ item }) => {
        console.log(this.state.name, this.state.phone)
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.baseView}>
                        <View style={styles.contentView}>
                            <View style={styles.image}>
                                <TouchableOpacity onPress={this.onTapPicture}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={styles.avatar}
                                    />
                                    <View style={styles.mask}>
                                        <Text style={styles.textMask}>Edit</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"} enabled>
                                <View style={styles.textInputContainer}>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            label="Full Name"
                                            star="*"
                                            value={this.state.name}
                                            onChangeText={this.nameChanged}
                                        />
                                    </View>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            style={{ color: "#d3d3d3", fontStyle: "italic" }}
                                            label="Email"
                                            value={item.email}
                                            editable={false}
                                        />
                                    </View>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            label="Phone"
                                            star="*"
                                            value={this.state.phone}
                                            onChangeText={this.phoneChanged}
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.button}>
                                <TouchableNativeFeedback onPress={() => this.updatedata()}>
                                    <View style={styles.buttonBlue}>
                                        <Text style={{ color: "white" }}>Save</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <TouchableNativeFeedback onPress={() => this.changePwd()} >
                                    <View style={styles.buttonRed}>
                                        <Text style={{ color: "white" }}>Change Password</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { datas, loading } = this.state;
        return (
            loading === true
                ?
                <Loading title="Please wait..." />
                :
                <FlatList
                    data={datas}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={this.renderDatas}
                />
        );
    };
};

export default EditProfile;