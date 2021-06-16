import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const OrderDetails = ({ styles }) => {
    return (
        <View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between" }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Type of Service</Text>
                <View style={[styles.paddingHorizontal, styles.rowDirection, { alignItems: "center", paddingTop: 10 }]}>
                    <Icon name="circle" color="#aaa" size={10} />
                    <Text style={[{ marginLeft: 10, color: "black" }, styles.f_m]}>repair</Text>
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Worker's Amount</Text>
                <Text style={[{ paddingTop: 10 }]}>Need 1 worker</Text>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Duration</Text>
                <Text style={[{ paddingTop: 10, color: "#aaa" }]}>02 : 30 : 59</Text>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Description</Text>
                <Text style={[{ paddingTop: 10, color: "#aaa" }]}>-</Text>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Total Payment</Text>
                <View style={[styles.rowDirection, { paddingLeft: 20, alignItems: "center", justifyContent: "space-between", paddingTop: 10 }]}>
                    <Text style={[{ color: "black" }, styles.f_m]}>Fill in freon</Text>
                    <Text style={[{ color: "#4B67AF" }, styles.f_m]}>Rp. 55.000</Text>
                </View>
                <View style={[styles.rowDirection, { paddingLeft: 20, alignItems: "center", justifyContent: "space-between", paddingTop: 10 }]}>
                    <Text style={[{ color: "black" }, styles.f_m]}>Clean the condenser air-con</Text>
                    <Text style={[{ color: "#4B67AF" }, styles.f_m]}>Rp. 15.000</Text>
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Payment Method</Text>
                <View style={[styles.rowDirection, { alignItems: "center", paddingTop: 10 }]}>
                    <Text style={[{ color: "#5E44BB" }, styles.bold, styles.f_m]}>ovo</Text>
                    <Text style={[{ marginLeft: 10, color: "black" }, styles.f_m]}>Rp. 150.000</Text>
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <View style={[styles.rowDirection, { alignItems: "center", justifyContent: "space-between", paddingTop: 10 }]}>
                    <Text style={[{ color: "black" }, styles.bold, styles.f_xl]}>Total</Text>
                    <Text style={[{ color: "#4B67AF" }, styles.bold, styles.f_xl]}>Rp. 70.000</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderDetails