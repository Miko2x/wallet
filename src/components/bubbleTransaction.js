import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Keyval extends React.Component {

    render() {
        return (
            <View>
                <View key={this.props.keyval} style={styles.Bubble}>
                    <Text style={styles.Date}>{this.props.val.date}</Text>
                    <Text style={styles.Text}>{this.props.val.text}</Text>
                </View>
                <View style={styles.Delete}>
                    <TouchableOpacity onPress={this.props.deleteMethod}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Bubble: {
        borderRadius: 10,
        backgroundColor: '#42b9d6',
        elevation: 3,
        width: '100%',
        height: 50,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
    },
    Text: {
        bottom: 5,
        right: 80,
        fontSize: 15,
    },
    Date: {
        width: "40%",
        bottom: 30,
        right: 30,
        fontSize: 12,
    },
});

export default Keyval;