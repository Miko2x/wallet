import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bg: { 
        flex: 1 
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
    buttonView: { 
        width: "75%", 
        justifyContent: "space-between", 
        height: 105 
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