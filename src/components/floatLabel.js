import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

const Color1 = "#42b9d6"
const Color2 = "gray"

class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { label, star, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: "absolute",
            left: 0,
            top: !isFocused ? 10 : 10,
            fontSize: !isFocused ? 13 : 13,
            color: !isFocused ? "#aaa" : "#42b9d6",
        };
        const starStyle = {
            position: "absolute",
            top: !isFocused ? 10 : 10,
            fontSize: !isFocused ? 13 : 13,
            color: !isFocused ? "#aaa" : "red",
        }
        return (
            <View style={{ paddingTop: 20 }}>
                <Text style={labelStyle}>
                    {label}
                    <Text style={starStyle}>
                        {star}
                    </Text>
                </Text>
                <TextInput
                    {...props}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    selectionColor="#42b9d6"
                    underlineColorAndroid={
                        isFocused ? Color1 : Color2
                    }
                    blurOnSubmit
                />
            </View>
        );
    }
}

export default FloatingLabelInput;