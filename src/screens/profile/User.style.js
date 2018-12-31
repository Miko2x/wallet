import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
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
})