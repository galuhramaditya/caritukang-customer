import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Icon } from 'react-native-elements';

const OVO = () => {
    return (
        <View style={styles.ovo}>
            <View style={styles.ovo_cash}>
                <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginTop: 20 }}>OVO CASH</Text>
                <Text style={{ color: "white", fontSize: 15, marginTop: 5 }}>Rp. 150.000</Text>
                <View style={styles.ovo_accent}></View>
                <View style={styles.ovo_topup}>
                    <Text style={{ color: "white" }}>TOP UP </Text>
                    <Icon name="plus-circle-outline" type="material-community" color="white" size={15} />
                </View>
            </View>
            <View style={styles.ovo_point}>
                <Text style={{ color: "#6754AA", fontWeight: "bold", marginTop: 20 }}>OVO POINTS</Text>
                <Text style={{ color: "#6754AA", marginTop: 5 }}>Rp. 11.298</Text>
                <View style={styles.ovo_redeem}>
                    <Text style={{ color: "#6754AA" }}>Redeem Deals </Text>
                    <Icon name="chevron-right" type="material-community" color="#6754AA" size={20} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ovo: {
        elevation: 2,
        borderRadius: 30,
        height: 180,
        display: "flex",
        backgroundColor: "white"
    },
    ovo_cash: {
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        borderBottomLeftRadius: 50,
        backgroundColor: "#6754AA",
        paddingHorizontal: 35,
    },
    ovo_point: {
        flex: 1,
        paddingHorizontal: 30
    },
    ovo_accent: {
        width: 180,
        height: 80,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 10,
        position: "absolute",
        backgroundColor: "#FFFFFF",
        opacity: 0.25
    },
    ovo_topup: {
        width: 100,
        height: 25,
        right: 0,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#39BDF5",
    },
    ovo_redeem: {
        width: 130,
        height: 40,
        right: 20,
        top: 25,
        flexDirection: "row",
        borderRadius: 10,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
    }
})

export default OVO