import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    base: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
        paddingVertical: 20
    },
    subtitle: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewText: { 
        height: 45 
    },
    walletText: {
        fontSize: 35,
        fontWeight: 'bold',
    },
    line: {
        width: '30%',
        height: 4,
        backgroundColor: '#42b9d6',
        borderRadius: 5,
        position: 'absolute',
        top: '100%'
    },
    bubble: {
        width: '75%',
        justifyContent: "space-between",
    },
    viewBubbleBlue: {
        borderRadius: 10,
        backgroundColor: '#42b9d6',
        elevation: 3,
        width: '100%',
        height: 50,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 60
    },
    viewBubbleWhite: {
        borderRadius: 10,
        backgroundColor: '#ffff',
        elevation: 3,
        width: '100%',
        height: 50,
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 60
    },
    titleTextBblue: {
        fontSize: 20,
        color: '#ffff',
    },
    textIdrBblue: {
        fontSize: 30,
        color: '#ffff',
    },
    titleTextBwhite: {
        fontSize: 20,
    },
    textIdrBwhite: {
        fontSize: 30,
    }

})