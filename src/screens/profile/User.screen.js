import React from "react";
import {
    Image, View, Text, TouchableNativeFeedback, 
    BackHandler, Alert
} from "react-native";
import CacheStorage from "react-native-cache-store";

import { userDataUrl } from "../../utils/endpoints";
import styles from "./User.style";
import Loading from "../../components/Loading";

class UserProfile extends React.Component {

    state = {
        token: null,
        avatar: "",
        name: "",
        email: "",
        phone: "",
        loading: true,
    }

    getData() {
        const token = this.state.token
        console.log(token)
        this.state.loading
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
                    avatar: responJSON.data.avatar,
                    name: responJSON.data.name,
                    email: responJSON.data.email,
                    phone: responJSON.data.phone_number
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
            });
    };

    componentDidMount() {
        this.getData()
        BackHandler.addEventListener("back", this.back)
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
                this.getData({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    back = () => {
        return this.props.navigation.navigate("wallet")
    }

    goToEdit = () => {
        const { navigation } = this.props;
        navigation.navigate("edit");
    }

    logOut = () => {
        CacheStorage.remove("access_token")
            .then(() => {
                Alert.alert(
                    "Logout",
                    "Are you sure want to logout?",
                    [
                      {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
                      {text: "OK", onPress: () => this.goToLogin() && console.log("OK Pressed")},
                    ],
                    { cancelable: false }
                  )
            })
    }

    goToLogin() {
        const { navigation } = this.props;
        navigation.navigate("login");
    };

    render() {
        const { avatar, name, email, phone, loading } = this.state;
        return (
            <View style={styles.container}>
                <Loading title="Please wait..." loading={loading} />
                <View style={styles.baseView}>
                    <View style={styles.contentView}>
                        <View style={styles.image}>
                            <Image
                                source={{ uri: avatar }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-between", paddingVertical: 30, }}>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{email}</Text>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{phone}</Text>

                        </View>
                        <View style={styles.button}>
                            <TouchableNativeFeedback onPress={this.goToEdit}>
                                <View style={{ width: "40%", height: 40, backgroundColor: "#42b9d6", elevation: 5, alignItems: "center", justifyContent: "center", borderRadius: 25 }}>
                                    <Text style={{ color: "white" }}>Edit Profile</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.logOut} >
                                <View style={{ width: "40%", height: 40, backgroundColor: "#ff5555", elevation: 5, alignItems: "center", justifyContent: "center", borderRadius: 25 }}>
                                    <Text style={{ color: "white" }}>Logout</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default UserProfile;