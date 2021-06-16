import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Success = ({ styles, isSuccessOpen, setIsSuccessOpen }) => {
    return (
        <Overlay isVisible={isSuccessOpen}>
            <StatusBar hidden={isSuccessOpen} />
            <View style={[styles.overlay]}>
                <Text style={[styles.f_l, styles.bold, { textAlign: "center" }]}>Your payment has been successful</Text>
                <Image style={{ marginVertical: 20 }} source={require("../../img/success.png")} />
                <Text style={[styles.f_m, { textAlign: "center" }]}>Your payment has been successful. Thank you for using our services.</Text>
                <View style={{ width: 100, marginTop: 20 }}>
                    <Button title="Close" onPress={() => { setIsSuccessOpen(false); Actions.replace("home") }} />
                </View>
            </View>
        </Overlay>
    )
}

export default Success