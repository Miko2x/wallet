import React from "react";
import { Image, View, FlatList, ActivityIndicator } from "react-native";
import CacheStorage from "react-native-cache-store";

import { userDataUrl } from "../utils/endpoints";

class IconUser extends React.Component {

    state = {
        token: null,
        data: [],
        page: 1,
        seed: 1,
        loading: true,
        refreshing: true
    }

    getData() {
        const token = this.state.token
        this.state.loading
        this.state.refreshing
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
                this.setState({ data: [responJSON.data], loading: false, refreshing: false })
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false, refreshing: false })
            });
    };

    componentDidMount() {
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
                this.getData({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                refreshing: true,
                seed: this.state.seed + 1,
            }, () => {
                this.getData();
            }
        )
    }

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
        return (
            this.state.loading
                ?
                <View>
                    <ActivityIndicator size="small" animating={true} color="42b9d6" />
                </View>
                :
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i.toString()}
                    renderItem={this.renderData}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
        );
    }
}

export default IconUser;