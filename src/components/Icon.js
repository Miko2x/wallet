import React from "react";
import { Image, View, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import CacheStore from "react-native-cache-store";

import { userDataUrl } from "../utils/endpoints";

class IconUser extends React.Component {

    state = {
        token: "",
        data: [],
        token: null,
        loading: true,
    }

    componentWillMount() {
        CacheStore.get("access_token")
            .then(token => {
                this.setState({ token })
                this.getData({ token })
            })
            .catch(err => {
                console.log(err)
            })
    }

    getData() {
        this.state.loading
        const token = this.state.token
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
                this.setState({
                    loading: false,
                    data: [responJSON.data],
                })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
            });
    };

    renderData = ({ item }) => {
        console.log(item.avatar)
        return (
            <Image
                source={{ uri: item.avatar }}
                style={{ width: 23, height: 23, borderRadius: 50 }}
            />
        )
    }

    render() {
        const data = this.state.data
        return (
            this.state.loading
                ?
                <View>
                    <ActivityIndicator size="small" animating={true} color="42b9d6" />
                </View>
                :
                <FlatList
                    data={data}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={this.renderData}
                />
        );
    }
}

export default IconUser;