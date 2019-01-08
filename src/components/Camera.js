import React from "react";
import {
    View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid, BackHandler
} from "react-native";
import CacheStorage from "react-native-cache-store";

import Loading from "./Loading";
import { uploadPictures, userDataUrl } from "../utils/endpoints";

class Camera extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uri: "",
            fileName: "",
            token: "",
            avatar: "",
            loading: false
        }
    }

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
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

    choosePicture = () => {
        var ImagePicker = require("react-native-image-picker");
        var options = {
            title: "Choose Picture",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log("Response = ", response);
            if (response.didCancel) {
                console.log("User cancelled image picker");
            }
            else if (response.error) {
                console.log("ImagePicker error: ", response.error);
            }
            else if (response.customButton) {
                console.log("User tapped customButton: ", response.customButton);
            }
            else {
                console.log(response.fileName);
                this.setState({
                    avatar: { uri: response.uri },
                    uri: response.uri,
                    fileName: response.fileName
                });
            }
        });
    };

    uploadPicture = () => {
        console.log("Start upload");
        this.setState({ loading: true })
        const data = new FormData();

        data.append("avatar", {
            uri: this.state.uri,
            type: "image/jpeg",
            name: this.state.fileName
        })

        const token = this.state.token;
        return fetch(uploadPictures, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: data
        })
            .then((response) => response.json())
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

    render() {
        return (
            <View style={styles.containerCamera}>
                <View style={styles.contentView}>
                    <Loading title="please wait.." loading={this.state.loading===true} />
                    <View style={styles.image}>
                        {
                            (this.state.avatar != "") &&
                            (<Image
                                source={this.state.avatar}
                                style={styles.avatar}
                            />)
                        }
                    </View>
                    <View style={styles.descView}>
                        <Text style={styles.desc}>Photo will be show in here ;)</Text>
                    </View>
                    <View style={styles.buttonPhoto}>
                        <TouchableOpacity onPress={() => this.choosePicture()}>
                            <View style={styles.buttonBlue}>
                                <Text style={{ color: "white" }}>Choose Picture</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.uploadPicture()}>
                            <View style={styles.buttonRed}>
                                <Text style={{ color: "white" }}>Upload Picture</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    containerCamera: {
        flex: 1,
        backgroundColor: "white"
    },
    contentView: {
        width: "100%",
        height: "100%",
        paddingVertical: 20,
        justifyContent: "space-between",
    },
    descView: {
        alignItems: "center",
        justifyContent: 'center',
    },
    desc: {
        fontSize: 20
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 200,
        elevation: 30
    },
    avatar: {
        width: 350,
        height: 350,
        borderRadius: 200
    },
    buttonPhoto: {
        width: "75%",
        alignSelf: 'center',
        justifyContent: "space-between",
        height: 105
    },
    buttonBlue: {
        borderRadius: 25,
        backgroundColor: "#42b9d6",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    buttonRed: {
        borderRadius: 25,
        backgroundColor: "#ff5555",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    }
})

export default Camera;