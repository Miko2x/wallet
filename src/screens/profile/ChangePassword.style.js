import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: "white"
    },
    baseView: {
        justifyContent: "center",
        alignItems: "center"
    },
    contentView: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingVertical: 35,
    },
    textView: {
        justifyContent: "space-between",
        alignItems: "center"
    },
    caption: {
        fontSize: 45,
        color: "black",
        fontWeight: "bold",
    },
    textViewDesc: {
        paddingTop: 20,
        alignItems: "center",
    },
    description: {
        fontSize: 19,
        color: "#ffff",
        textAlign: "center"
    },
    parentInput: {
        alignSelf: "center"
    },
    allTextInput: {
        width: "70%",
        alignSelf: "center"
    },
    chilInput: {
        flexDirection: "row",
        width: "100%"
    },
    leftIcon: {
        alignSelf: "center"
    },
    rightIcon: {    
        alignSelf: "center"  
    },
    buttonView: {
        width: "75%",
        justifyContent: "space-between",
        height: 105,
    },
    textButtonLoginView: {
        borderRadius: 25,
        backgroundColor: "#42b9d6",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    textButtonSignUpView: {
        borderRadius: 25,
        backgroundColor: "#ff5555",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },
    textButton: {
        fontSize: 20,
        color: "#ffff"
    },
})