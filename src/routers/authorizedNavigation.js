import React from "react";
import { View, ActivityIndicator } from "react-native";
import {
    createStackNavigator,
    createMaterialTopTabNavigator,

} from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

import Wallet from "../screens/wallet/Wallet.screen";
import Transaction from "../screens/transaction/Transaction.screen";
import AddTransaction from "../screens/transaction/Transaction.bind";
import Statistic from "../screens/statistic/Statistic";
import Profile from "../screens/profile/User.screen";
import EditProfile from "../screens/login/EditProfile";
import Camera from "../components/Camera";
import Change from "../screens/profile/changePassword";
import IconUser from "../components/Icon";

const List1 = createStackNavigator(
    { Wallet },
    { headerMode: "none" }
);

const List2 = createStackNavigator(
    { Transaction },
    { headerMode: "none" }
);

const List3 = createStackNavigator(
    { Statistic },
    { headerMode: "none" }
);

const List4 = createStackNavigator(
    { Profile },
    { headerMode: "none" }
)

const bottomNavigator = createMaterialTopTabNavigator({
    wallet: {
        screen: List1,
        navigationOptions: {
            tabBarIcon: (
                <Icon
                    name="dashboard"
                    size={23}
                    color="#42b9d6"
                />
            )
        }
    },

    transaction: {
        screen: List2,
        navigationOptions: {
            tabBarIcon: (
                <Icon
                    name="attach-money"
                    size={23}
                    color="#42b9d6"
                />
            )
        }
    },

    statistic: {
        screen: List3,
        navigationOptions: {
            tabBarIcon: (
                <Icon
                    name="multiline-chart"
                    size={23}
                    color="#42b9d6"
                />
            )
        }
    },
    profile: {
        screen: List4,
        navigationOptions: {
            tabBarIcon: (
                <IconUser />
            )
        }
    }
},
    {
        tabBarPosition: "bottom",
        swipeEnabled: true,
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                backgroundColor: "#42b9d6",
                height: 3
            },
            pressColor: "#cbebfd",
            style: {
                backgroundColor: "white",
            },
        }

    }
)

const Header = createStackNavigator({
    header: {
        screen: bottomNavigator,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#182a3c",
                height: 60
            }
        }
    },

})

const addTransaction = createStackNavigator({
    transactions: {
        screen: Header,
        navigationOptions: {
            header: null
        }
    },
    create: {
        screen: AddTransaction,
        navigationOptions: {
            header: null
        }
    }
})

const editProfile = createStackNavigator({
    profile: {
        screen: Header,
        navigationOptions: {
            header: null
        }
    },
    edit: {
        screen: EditProfile,
        navigationOptions: {
            headerTintColor: '#ffffff',
            headerStyle: {
                backgroundColor: "#182a3c",
                height: 60
            },
        }
    },
    camera: {
        screen: Camera,
        navigationOptions: {
            header: null
        }
    },
    change: {
        screen: Change,
        navigationOptions: {
            header: null
        }
    }
})

const AuthNavigation = createStackNavigator(
    {
        Header,
        bottomNavigator,
        addTransaction,
        editProfile,
    },
    {
        headerMode: "none"
    }
)

export default AuthNavigation;