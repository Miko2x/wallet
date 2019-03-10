import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

export default StyleSheet.create({
    bg: { 
        width: width,
        height: height
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
        paddingVertical: 40, 
    },
    textView: { 
        justifyContent: "space-between", 
        alignItems: "center" 
    },
    caption: { 
        fontSize: 45, 
        fontWeight: "500", 
        color: "#ffff" 
    },
    textViewDesc: { 
        paddingTop: 20, 
        alignItems: "center",
    },
    description: { 
        textAlign: "center",
        fontSize: 19, 
        color: "#ffff" 
    },
    textInputView: { 
        width: "75%", 
        flexDirection: "column", 
        justifyContent: "center", 
    },
    textInputEmail: { 
        flexDirection: "row", 
        borderBottomWidth: 1, 
        borderBottomColor: "#cdcdcd", 
    },
    iconMail: { 
        paddingTop: 10, 
    },
    email: { 
        width: "94%" 
    },
    textInputPassword: { 
        flexDirection: "row", 
        borderBottomWidth: 1, 
        borderBottomColor: "#cdcdcd", 
        paddingTop: 20 
    },
    iconLock: { 
        paddingTop: 10 
    },
    password: { 
        width: "86%" 
    },
    iconEye: { 
        paddingTop: 16
    },
    textForgot: { 
        color: "#42b9d6",
        fontSize: 15,
        alignSelf: "flex-end",
        top: 10,
        height: 30,
        width: "85%",
    },
    buttonView: { 
        width: "75%", 
        justifyContent: "space-between", 
        height: 105 
    },
    textButtonLoginView: { 
        height: 50, 
        width: "100%", 
        borderRadius: 25,
        backgroundColor: "#42b9d6", 
        alignItems: "center", 
        justifyContent: "center", 
    },
    textButtonSignUpView: { 
        height: 50, 
        width: "100%", 
        borderRadius: 25, 
        backgroundColor: "#ff5555", 
        alignItems: "center", 
        justifyContent: "center", 
    },
    textButton: { 
        color: "#ffff",
        fontSize: 20, 
    },
})