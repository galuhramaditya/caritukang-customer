import React from 'react';
import { Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const AddressDetails = ({ styles }) => {
    return (
        <View style={[{ paddingVertical: 20, justifyContent: "space-between" }, styles.paddingHorizontal, styles.rowDirection]}>
            <Image source={require("../../img/little-maps.png")} />
            <View style={[{ width: 250, justifyContent: "space-evenly" }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Home</Text>
                <Text numberOfLines={1}>25A, Jalan Danau Ranau, Sawojajar, Kec. Bojong Soang</Text>
                <Text style={[{ color: "#aaa" }, styles.f_s]}>-</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[{ color: "#aaa" }, styles.f_s]}>-</Text>
                </View>
            </View>
        </View>
    )
}

export default AddressDetails