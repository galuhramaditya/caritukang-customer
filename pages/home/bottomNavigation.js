import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const Item = ({ icon, text, active, type }) => {
    const color = active ? "#4B67AF" : "#81858C"

    return (
        <View style={{ alignSelf: "center" }}>
            <Icon name={icon} color={color} type={type} />
            <Text style={{ color: color }}>{text}</Text>
        </View>
    )
}

const BottomNavigation = () => {
    return (
        <View style={styles.navigator}>
            <Item icon="home" text="Home" active />
            <Item icon="clipboard-text" type="material-community" text="Order" />
            <Item icon="credit-card-outline" type="material-community" text="Payment" />
            <Item icon="chat" text="Inbox" />
            <Item icon="clipboard-account" type="material-community" text="Account" />
        </View>
    )
}

const styles = StyleSheet.create({
    navigator: {
        borderTopWidth: 0.5,
        borderTopColor: "#eee",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
})

export default BottomNavigation