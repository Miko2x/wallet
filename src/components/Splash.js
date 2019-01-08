import React from 'react';
import { View, Text, ActivityIndicator, StatusBar, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const Logo = require("../assets/logo.png")

class splashScreen extends React.Component {

    state ={
        showIndicator: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({showIndicator: false}), 3000);
    }

    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>Super Wallet</Text>
                    </View>
                    <View style={styles.logoView}>
                        <View style={styles.mask}>
                            <Image
                                source={Logo}
                                style={styles.Logo}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
                        {this.state.showIndicator
                        ? (<ActivityIndicator size="small"/>)
                        : (<Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>Welcome!</Text>)}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#92d3fb',
        alignItems: 'center',
    },
    container2: {
        justifyContent: 'space-between',
        width: width,
        height: height
    },
    titleView: {
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mask: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        height: '80%',
        width: '80%',
    }
})

export default splashScreen