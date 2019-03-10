import React from "react";
import {
    View, Picker, BackHandler, Text,
    TouchableWithoutFeedback, KeyboardAvoidingView,
    Keyboard, ToastAndroid
} from "react-native";
import DatePicker from 'react-native-datepicker'
import Icon from "react-native-vector-icons/MaterialIcons";
import CacheStorage from "react-native-cache-store";
import axios from "axios";

import styles from "./Transaction.style";
import Loading from "../../components/Loading";
import PickerLabel from "../../components/PickerLabel";

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            data: "",
            token: "",
            type: "",
            category: "",
            amount: "",
            note: "",
            date: "",
            cost: "",
            user: "",
            loading: false,
            typeList: [],
            categoryList: [],
            url: 'https://api-simplewallet-v1.herokuapp.com/api/v1',
        }
    }

    previous = () => {
        const { navigation } = this.props;
        navigation.navigate("transaction");
    }

    componentDidMount() {
        this.getTypeList()
        this.getCategoryList()
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    getTypeList() {
        const { url } = this.state
        axios.get(`${url}/type`)
            .then(res => {
                console.log(res)
                this.setState({
                    typeList: res.data.data,
                })
            })
    }

    getCategoryList() {
        const { url } = this.state
        axios.get(`${url}/category`)
            .then(res => {
                console.log(res)
                this.setState({
                    categoryList: res.data,
                })
            })
    }

    addTransaction() {
        this.setState({ loading: false })
        const { url, token } = this.state
        const { type, category_id, amount, note, date, user } = this.state
        axios.post(`${url}/transactions?token=${token}`, {
            type,
            category_id,
            amount,
            note,
            date,
            user
        })
            .then(res => {
                console.log(res)
                this.setState({
                    loading: false
                })
                ToastAndroid.show("Transaction has been added", ToastAndroid.SHORT)
            })
            .catch(err => {
                console.log(err)
                ToastAndroid.show("Your data transaction failed to added", ToastAndroid.SHORT)
                this.setState({ loading: false })
            })
    }

    typeChanged = type => this.setState({ type: type });

    categoryChanged = name => this.setState({ category: name });

    amountChanged = amount => this.setState({ amount });

    noteChanged = note => this.setState({ note });

    dateChanged = date => this.setState({ date });

    userChanged = user => this.setState({ user });

    render() {

        let dataType = typeList.map((datas) => {
            return <Picker.Item key={datas.type_id} value={datas.type_id} label={datas.type} />
        })

        let dataCategory = categoryList.map((datas) => {
            return <Picker.Item key={datas.category_id} value={datas.category_id} label={datas.name} />
        })

        const { typeList, categoryList, type, category, amount, note, date, user, loading, isFocused } = this.state;
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.baseView}>
                        <Loading loading={loading === true} />
                        <View style={styles.contentView}>
                            <View style={styles.subtitleView}>
                                <Text style={styles.subtitle}>Add Transaction</Text>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"} enabled>
                                <View style={styles.parentInputContainer}>
                                    <View style={styles.chilContainer}>
                                        <View>
                                            <Icon
                                                name="monetization-on"
                                                size={30}
                                                style={{ top: 28 }}
                                                color="#42b9d6"
                                            />
                                        </View>
                                        <View style={styles.pickerView}>
                                            <PickerLabel
                                                label="Type"
                                                selectedValue={type}
                                                onValueChange={this.typeChanged}
                                                mode="dropdown"
                                            >
                                                {dataType}
                                            </PickerLabel>
                                        </View>
                                    </View>
                                    <View style={styles.chilContainer}>
                                        <Icon
                                            name="apps"
                                            size={30}
                                            style={{ top: 28 }}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.pickerView}>
                                            <PickerLabel
                                                label="Category"
                                                selectedValue={category}
                                                onValueChange={this.categoryChanged}
                                                mode="dropdown"
                                            >
                                                {dataCategory}
                                            </PickerLabel>
                                        </View>
                                    </View>
                                    <View style={styles.chilContainer} >
                                        <Icon
                                            name="attach-money"
                                            size={27}
                                            style={{ top: 28 }}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.textInputView}>
                                            <FloatingLabelInput
                                                label="How Much?"
                                                value={amount}
                                                onChangeText={this.amountChanged}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.chilContainer} >
                                        <Icon
                                            name="create"
                                            size={30}
                                            style={{ top: 26 }}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.textInputView}>
                                            <FloatingLabelInput
                                                label="Note"
                                                value={note}
                                                onChangeText={this.noteChanged}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.chilContainer}>
                                        <Icon
                                            name="date-range"
                                            size={30}
                                            style={{ alignSelf: "center" }}
                                            color="#42b9d6"
                                        />
                                        <View>
                                            <DatePicker
                                                style={{ width: 210 }}
                                                date={date}
                                                mode="date"
                                                placeholder="select date"
                                                format="DD-MM-YYYY"
                                                minDate="01-01-2000"
                                                maxDate="01-01-2100"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                showIcon={false}
                                                onDateChange={this.dateChanged}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.chilContainer} >
                                        <Icon
                                            name="account-circle"
                                            size={30}
                                            style={{ top: 28 }}
                                            color="#42b9d6"
                                        />
                                        <View style={styles.textInputView}>
                                            <FloatingLabelInput
                                                label="User"
                                                value={user}
                                                onChangeText={this.userChanged}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.button}>
                                <TouchableWithoutFeedback onPress={() => this.addTransaction()}>
                                    <View style={styles.buttonBlue}>
                                        <Text style={{ color: "white" }}>Add</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.previous()} >
                                    <View style={styles.buttonRed}>
                                        <Text style={{ color: "white" }}>Cancel</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default AddTransaction;
