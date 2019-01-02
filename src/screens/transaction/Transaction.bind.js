import React from "react";
import {
    View, Dimensions, Picker, BackHandler, Text, TouchableOpacity,
    TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard,
    ToastAndroid
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import DatePicker from 'react-native-datepicker'
import Icon from "react-native-vector-icons/MaterialIcons";
import CacheStorage from "react-native-cache-store";
import axios from "axios";

import Buble from "../../components/bubbleTransaction";
import styles from "./Transaction.style";
import Loading from "../../components/Loading";
import FloatingLabelInput from "../../components/floatLabel";

const { width, height } = Dimensions.get("window");

export const notes = this.state.bubbleArray.map((val, key) => {
    return <Buble key={key} keyval={key} val={val} />
})

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bubbleArray: [],
            token: "",
            type: "",
            category_id: "",
            amount: "",
            note: "",
            date: "",
            cost: "",
            user: ""
        }
    }

    componentDidMount() {
        BackHandler.addEventListener("back", this.back)
        CacheStorage.get("access_token")
            .then(token => {
                console.log(token)
                this.setState({ token })
            }).catch(err => {
                console.log(err)
            })
    }

    back = () => {
        return this.props.navigation.navigate("transaction")
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    addTransaction() {
        const token = this.state.token
        console.log(token)
        const { type, category_id, amount, note, date, user } = this.state
        axios.post(`https://api-simplewallet-v1.herokuapp.com/api/v1/transactions?token=${token}`, {
            type,
            category_id,
            amount,
            note,
            date,
            user
        })
            .then(responJSON => {
                console.log(responJSON)
                this.setState({
                    type: responJSON.data.data.type,
                    category_id: responJSON.data.data.category_id,
                    amount: responJSON.data.data.amount,
                    note: responJSON.data.data.note,
                    date: responJSON.data.data.date,
                    user: responJSON.data.data.user
                })
                ToastAndroid.show("Transaction has been added", ToastAndroid.SHORT)
            })
            .catch(err => {
                console.log(err)
                ToastAndroid.show("Your data transaction failed to added", ToastAndroid.SHORT)
            })
    }

    typeChanged = type => this.setState({ type });

    categoryChanged = category_id => this.setState({ category_id });

    amountChanged = amount => this.setState({ amount });

    noteChanged = note => this.setState({ note });

    dateChanged = date => this.setState({ date });

    userChanged = user => this.setState({ user });

    render() {



        let dataType = [{
            value: "Income"
        }, {
            value: "Expense"
        }]

        let dataCategory = [{
            value: "Family"
        }, {
            value: "Sport"
        }, {
            value: "Loan"
        }]

        const { type, category_id, amount, note, date, user } = this.state;

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <View style={styles.baseView}>
                        <View style={styles.contentView}>
                            <View style={styles.subtitleView}>
                                <Text style={styles.subtitle}>Add Transaction</Text>
                            </View>
                            <KeyboardAvoidingView behavior={"padding"} enabled>
                                <View style={styles.textInputContainer}>
                                    <View>
                                        <Dropdown
                                            label="Type"
                                            data={dataType}
                                            value={type}
                                            onChangeText={this.typeChanged}
                                        />
                                    </View>
                                    <View>
                                        <Dropdown
                                            label="Category"
                                            data={dataCategory}
                                            value={category_id}
                                            onChangeText={this.categoryChanged}
                                        />
                                    </View>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            label="How Much?"
                                            value={amount}
                                            onChangeText={this.amountChanged}
                                        />
                                    </View>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            label="Note"
                                            value={note}
                                            onChangeText={this.noteChanged}
                                        />
                                    </View>
                                    <View>
                                        <DatePicker
                                            style={{ width: 200 }}
                                            date={date}
                                            mode="date"
                                            placeholder="select date"
                                            format="YYYY-MM-DD"
                                            minDate="2000-01-01"
                                            maxDate="2100-01-01"
                                            confirmBtnText="Confirm"
                                            cancelBtnText="Cancel"
                                            customStyles={{
                                                dateIcon: {
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: 4,
                                                    marginLeft: 0
                                                },
                                                dateInput: {
                                                    marginLeft: 36
                                                }
                                            }}
                                            onDateChange={this.dateChanged}
                                        />
                                    </View>
                                    <View style={styles.textInputView}>
                                        <FloatingLabelInput
                                            label="User"
                                            value={user}
                                            onChangeText={this.userChanged}
                                        />
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <View style={styles.button}>
                                <View style={styles.buttonBlue}>
                                    <TouchableOpacity onPress={() => this.addTransaction()}>
                                        <Text style={{ color: "white" }}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.buttonRed}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "white" }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default AddTransaction;