import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const OrderDetails = ({ service, styles }) => {
    const [amountWorker, setAmountWorker] = useState(1)

    return (
        <View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between" }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Type of Service</Text>
                <View style={[styles.paddingHorizontal, styles.rowDirection, { alignItems: "center", paddingTop: 10 }]}>
                    <Icon name="circle" color="#aaa" size={10} />
                    <Text style={[{ marginLeft: 10, color: "black" }, styles.f_m]}>{service}</Text>
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Diagnostic & Quotation</Text>
                <Text style={{ alignItems: "center", paddingTop: 10 }}>Onsite consultation will diagnose the problem for troubleshooting accordingly. The scope will depend on the repair works necessary</Text>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Worker's Amount</Text>
                <View style={[styles.rowDirection, { alignItems: "center", paddingTop: 10 }]}>
                    <Button buttonStyle={[styles.amountButton, { borderRightWidth: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }]} icon={<Icon name="add" color="#aaa" />} onPress={() => { setAmountWorker(amountWorker + 1) }} />
                    <Text style={[{ paddingHorizontal: 50, paddingVertical: 15.6, backgroundColor: "#eee", color: "black", borderColor: "#aaa", borderWidth: 1 }, styles.f_m]}>{amountWorker}</Text>
                    <Button buttonStyle={[styles.amountButton, { borderLeftWidth: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }]} icon={<Icon name="remove" color="#aaa" />} onPress={() => { if (amountWorker > 1) setAmountWorker(amountWorker - 1) }} />
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Description</Text>
                <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 10 }}>
                    <Text style={[{ color: "#aaa", marginRight: 15 }, styles.f_m]}>Add description</Text>
                    <Icon name="edit" color="#2E86DE" size={15} />
                </View>
            </View>
        </View>
    )
}

export default OrderDetails