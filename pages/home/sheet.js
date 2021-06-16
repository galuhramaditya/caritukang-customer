import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet, Button, CheckBox, Divider, Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const types = ["standard", "repair"]

const Sheet = ({ isSheetOpen, setIsSheetOpen }) => {
    const [service, setService] = useState(null)

    return (
        <BottomSheet isVisible={isSheetOpen}>
            <StatusBar hidden={isSheetOpen} />
            <View style={styles.sheet}>
                <View style={{ width: 50, alignSelf: "center" }}>
                    <Divider width={2} />
                </View>
                <Text style={{ fontSize: 20, marginVertical: 20 }}>Quistionnare</Text>
                <Text style={{ fontSize: 15 }}>What type service do you need?</Text>
                <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    {types.map(val => (
                        <CheckBox key={val} title={val} checked={service == val} onPress={() => setService(val)} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' containerStyle={{ backgroundColor: "white", borderColor: "white" }} textStyle={{ fontWeight: "normal" }} />
                    ))}
                </View>
                <Button title="Next" containerStyle={{ width: "100%" }} buttonStyle={{ borderRadius: 10 }} onPress={() => { setIsSheetOpen(false); Actions.order({ service: service }) }} />
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        padding: 20,
    },
})

export default Sheet