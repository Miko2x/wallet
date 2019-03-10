import React from "react";
import {
    Image, View, Text, TouchableNativeFeedback,
    BackHandler, Alert, FlatList
} from "react-native";
import CacheStorage from "react-native-cache-store";

import { userDataUrl } from "../../utils/endpoints";
import styles from "./User.style";
import Loading from "../../components/Loading";

class UserProfile extends React.Component {

    state = {
        token: null,
        data: [],
        loading: true,
    }

    componentWillMount() {
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
                    data: [responJSON.data]
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
            });
    };

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
                        { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
                        { text: "OK", onPress: () => this.goToLogin() && console.log("OK Pressed") },
                    ],
                    { cancelable: false }
                )
            })
    }

    goToLogin() {
        const { navigation } = this.props;
        navigation.navigate("login");
    };

    renderDatas = ({ item }) => {
        return(
            <View style={styles.container}>
                <View style={styles.baseView}>
                    <View style={styles.contentView}>
                        <View style={styles.image}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.avatar}
                            />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-between", paddingVertical: 30, }}>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.email}</Text>

                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.phone_number}</Text>

                        </View>
                        <View style={styles.button}>
                            <TouchableNativeFeedback onPress={this.goToEdit}>
                                <View style={styles.buttonBlue}>
                                    <Text style={{ color: "white" }}>Edit Profile</Text>
                                </View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.logOut} >
                                <View style={styles.buttonRed}>
                                    <Text style={{ color: "white" }}>Logout</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { data, loading } = this.state;
        console.log(data)
        return (
            loading
                ?
                <Loading title="Please wait..." />
                :
                <FlatList
                    data={data}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={this.renderDatas}
                />
        );
    }
}

export default UserProfile;