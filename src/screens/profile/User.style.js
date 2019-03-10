import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

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
        width: "100%",
        height: "100%",
        paddingVertical: 53,
        justifyContent: "space-between",
    },
    image: {
        alignSelf: "center",
    },
    avatar: {
        alignSelf: "center",
        width: 230,
        height: 230,
        borderRadius: 130
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
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 25 
    },
    buttonRed: { 
        width: "40%", 
        height: 40, 
        backgroundColor: "#ff5555", 
        elevation: 5, 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 25 
    },
})