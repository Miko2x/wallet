import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';


class Transaction extends React.Component {

    addTransaction = () => {
        const { navigation } = this.props;
        navigation.navigate("create");
    };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.base}>
                    <View style={styles.subtitle}>
                        <Text style={styles.fontTitle}>Transaction</Text>
                        <View style={styles.line} />
                    </View>
                    <View>
                        <ScrollView>

                        </ScrollView>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={this.addTransaction}>
                            <View style={styles.textView}>
                                <Text style={styles.textAdd}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: 'center',
    },
    base: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
        paddingVertical: 20,
    },
    subtitle: {
        justifyContent: "space-between",
        alignItems: "center",
    },
    fontTitle: {
        fontSize: 35,
        fontWeight: "bold",
    },
    line: {
        position: "absolute",
        backgroundColor: "#42b9d6",
        borderRadius: 5,
        height: 4,
        width: "30%",
        top: "100%"
    },
    buttonView: {
        position: "absolute",
        zIndex: 10,
        bottom: 0,
        height: 60,
        width: "20%",
    },
    textView: {
        backgroundColor: "#42b9d6",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 25,
        width: "100%",
        elevation: 3
    },
    textAdd: {
        fontSize: 20,
        color: "white"
    }
})

export default Transaction