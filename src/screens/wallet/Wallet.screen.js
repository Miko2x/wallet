import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"
import CacheStorage from "react-native-cache-store";

import styles from "./Wallet.style";

class Wallet extends React.Component {

    state = {
        bubble: []
    }

    logOut = () => {
        CacheStorage.remove("access_token")
            .then(() => {
                this.goToLogin()
            })
    }

    goToLogin() {
        const { navigation } = this.props;
        navigation.navigate("login");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.base}>
                    <View style={styles.subtitle}>
                        <View style={styles.viewText}>
                            <Text style={styles.walletText} onPress={this.logOut}>My Wallet</Text>
                        </View>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.bubble}>
                        <TouchableOpacity>
                            <View style={styles.viewBubbleBlue}>
                                <Text style={styles.titleTextBblue}>Income</Text>
                                <Icon
                                    name="donate"
                                    color="white"
                                    size={30}
                                />
                                <Text style={styles.textIdrBblue}>IDR 500,000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bubble}>
                        <TouchableOpacity>
                            <View style={styles.viewBubbleWhite}>
                                <Text style={styles.titleTextBwhite}>Expense</Text>
                                <Icon
                                    name="dolly"
                                    color="#42b9d6"
                                    size={30}
                                />
                                <Text style={styles.textIdrBwhite}>IDR 500,000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bubble}>
                        <TouchableOpacity>
                            <View style={styles.viewBubbleBlue}>
                                <Text style={styles.titleTextBblue}>Balance</Text>
                                <Icon
                                    name="dollar-sign"
                                    color="white"
                                    size={30}
                                />
                                <Text style={styles.textIdrBblue}>IDR 500,000</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Wallet;