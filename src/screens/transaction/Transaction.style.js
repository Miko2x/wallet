import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    baseView: {
        justifyContent: "center",
        alignItems: "center",
    },
    contentView: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    subtitleView: {
        alignSelf: "center"
    },
    subtitle: {
        fontSize: 40,
        fontWeight: "bold",
    },
    textInputContainer: {
        flexDirection: "column",
        justifyContent: "center",
    },
    textInputView: {
        width: "100%",
        alignSelf: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    buttonBlue: {
        width: "40%",
        height: 40,
        backgroundColor: "#42b9d6",
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    buttonRed: {
        width: "40%",
        height: 40,
        backgroundColor: "#ff5555",
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    dropDownView: {
        justifyContent: "center",
        flexDirection: "column",
        width: "60%"
    },
    type: {
        flexDirection: "row"
    },
    addTransactionView: {
        width: "75%",
        flexDirection: "column",
        justifyContent: "center",
    },
})