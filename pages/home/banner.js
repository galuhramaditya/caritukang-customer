import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Icon, SearchBar } from 'react-native-elements';
import OVO from './ovo';

const Banner = () => {
    return (
        <View style={styles.header}>
            <View style={styles.banner}>
                <View style={styles.accent}></View>
                <View style={styles.appBar}>
                    <SearchBar
                        placeholder="Search"
                        containerStyle={{ flex: 1, padding: 0, backgroundColor: "transparent", borderBottomWidth: 0, borderTopWidth: 0, marginRight: 10 }}
                        inputContainerStyle={{ padding: 0, backgroundColor: "white", borderRadius: 10 }}
                    />
                    <Icon style={{ marginTop: 10, width: 50, alignItems: "center" }} name="bell-outline" type="material-community" color="white" />
                </View>
                <View style={styles.greetingText}>
                    <Text style={{ color: "white" }}>Hi,</Text>
                    <Text style={{ color: "white" }}>Fitriono</Text>
                </View>
                <OVO />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 370,
        backgroundColor: "white"
    },
    banner: {
        height: 280,
        paddingHorizontal: 20,
        backgroundColor: "#4B67AF",
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30
    },
    accent: {
        height: 175,
        width: 150,
        borderBottomRightRadius: 100,
        position: "absolute",
        backgroundColor: "#5F81D9"
    },
    appBar: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    greetingText: {
        justifyContent: "flex-end",
        marginVertical: 36
    },
    center: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default Banner