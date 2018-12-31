import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Dimensions
} from 'react-native'
import {
    LineChart,

} from "react-native-chart-kit";

class Statistic extends React.Component {

    render() {
        return (
            <View style={{
                backgroundColor: 'white',
            }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 30, justifyContent: "space-between", }}>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                        textAlign: "center",
                    }}>Income</Text>
                    <View style={{
                        width: '30%',
                        height: 4,
                        backgroundColor: '#42b9d6',
                        borderRadius: 5,
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }} />
                    <ScrollView horizontal={true} >
                    <LineChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }]
                        }}
                        width={Dimensions.get('window').width}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#cbebfd',
                            backgroundGradientFrom: '#42b9d6',
                            backgroundGradientTo: '#1fd6f3',
                            decimalPlaces: 2,
                            color: (opacity = 2) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            elevation: 5
                        }}
                    />
                    </ScrollView>
                    <Text style={{ fontStyle: "italic" }}>*Data displayed in the last 6 months</Text>
                    <View style={{ paddingVertical: 10 }} />
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                        textAlign: "center"
                    }}>Expense</Text>
                    <View style={{
                        width: '30%',
                        height: 4,
                        backgroundColor: '#42b9d6',
                        borderRadius: 5,
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }} />
                    <LineChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }]
                        }}
                        width={Dimensions.get('window').width} // from react-native
                        height={220}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            elevation: 5
                        }}
                    />
                    <Text style={{ fontStyle: "italic" }}>*Data displayed in the last 6 months</Text>
                </ScrollView>
            </View>
        )
    }
}


export default Statistic