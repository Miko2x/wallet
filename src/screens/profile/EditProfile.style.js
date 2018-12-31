import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export default StyleSheet.create({
    container: {
        flex: 1,
        width: width - 50,
        backgroundColor: "white",
        alignSelf: 'center',
    },
    baseView: {
        justifyContent: "center",
        alignItems: "center",
    },
    contentView: {
        width: "100%",
        height: "100%",
        paddingVertical: 20,
        justifyContent: "space-between",
    },
    image: {
        alignSelf: "center",
    },
    mask: {
        alignSelf: "center",
        width: "100%",
        height: 60,
        backgroundColor: 'rgba(186, 188, 188, 0.7)',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
        position: 'absolute',
        top: '60%',
    },
    textMask: {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    },
    textInputContainer: {
        paddingBottom: 50,
    },
    textInputView: {
        width: "80%",
        alignSelf: "center",
    },
    textInput: {
        fontSize: 20
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    preview: {
        flex: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    buttonPhoto: {
        flex: 1,
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
    }
})