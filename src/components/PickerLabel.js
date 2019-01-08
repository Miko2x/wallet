import React from "react";
import { View, Text, Picker } from "react-native";

class PickerLabel extends React.Component {

    render() {
        const { label, ...props } = this.props;
        const labelStyle = {
            position: "absolute",
            left: 0,
            top: 10,
            fontSize: 13,
            color: "#ababab",
        };

        return (
            <View style={{ paddingTop: 20 }} >
                <Text style={labelStyle}>
                    {label}
                </Text>
                <Picker
                    {...props}
                >
                </Picker>
            </View>
        )
    };
};

export default PickerLabel;