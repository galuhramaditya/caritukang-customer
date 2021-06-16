import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import AddressDetails from './addressDetails';
import FindMitra from './findMitra';
import OrderDetails from './orderDetails';
import SearchBy from './searchBy';

const OrderPage = ({ service }) => {
    const [isSearchByOpen, setIsSearchByOpen] = useState(false)
    const [isFindMitraOpen, setIsFindMitraOpen] = useState(false)

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <View style={[{ backgroundColor: "#ccc", paddingVertical: 5, justifyContent: "space-between" }, styles.paddingHorizontal, styles.rowDirection]}>
                <Text style={[{ color: "#555" }, styles.f_m]}>Address Details</Text>
                <Text style={[{ color: "#2E86DE" }, styles.f_s]}>Change address</Text>
            </View>
            <AddressDetails styles={styles} />
            <View style={[{ backgroundColor: "#ccc", paddingVertical: 5, justifyContent: "space-between" }, styles.paddingHorizontal, styles.rowDirection]}>
                <Text style={[{ color: "#555" }, styles.f_m]}>Order Details</Text>
            </View>
            <OrderDetails styles={styles} service={service} />
            <View style={[{ paddingVertical: 20 }, styles.paddingHorizontal]}>
                <Button onPress={() => setIsSearchByOpen(true)} title="Book Now" />
            </View>
            <SearchBy styles={styles} isSearchByOpen={isSearchByOpen} setIsSearchByOpen={setIsSearchByOpen} isFindMitraOpen={isFindMitraOpen} setIsFindMitraOpen={setIsFindMitraOpen} />
            <FindMitra isFindMitraOpen={isFindMitraOpen} setIsFindMitraOpen={setIsFindMitraOpen} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rowDirection: {
        flexDirection: "row"
    },
    paddingHorizontal: {
        paddingHorizontal: 20
    },
    f_l: {
        fontSize: 15
    },
    f_m: {
        fontSize: 12
    },
    f_s: {
        fontSize: 10
    },
    bold: {
        fontWeight: "bold"
    },
    amountButton: {
        height: 50,
        width: 50,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#aaa"
    },
    overlay: {
        padding: 20,
        width: 250,
        alignItems: "center"
    }
})

export default OrderPage