import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, Text, View } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const FindMitra = ({ isFindMitraOpen, setIsFindMitraOpen }) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Overlay isVisible={isFindMitraOpen}>
            <StatusBar hidden={isFindMitraOpen} />
            {
                isLoading ?
                    <View onTouchStart={() => setTimeout(() => setIsLoading(false), 15000)}>
                        <ActivityIndicator size="large" animating={true} color="black" />
                        <Text style={{ marginTop: 10, color: "black" }}>Mencari mitra..</Text>
                    </View>
                    :
                    <View style={styles.founded}>
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>We found the Handyman</Text>
                        <Image style={{ marginVertical: 15 }} source={require("../../img/ava-mitra.png")} />
                        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Galuh Ramaditya</Text>
                        <Text style={{ fontSize: 10, color: "#aaa" }}>ID : 1184505</Text>
                        <Text style={{ fontSize: 10, color: "#aaa" }}>Air conditioning repair contractor</Text>
                        <View style={{ flexDirection: "row", marginVertical: 20 }}>
                            <View style={{ borderColor: "#eee", borderWidth: 1, paddingVertical: 10, flexDirection: "row", alignItems: "center", width: 135, justifyContent: "space-evenly" }}>
                                <Icon color="#333" name="phone" />
                                <Text style={{ color: "#333" }}>Call</Text>
                            </View>
                            <View style={{ borderColor: "#eee", borderWidth: 1, paddingVertical: 10, flexDirection: "row", alignItems: "center", width: 135, justifyContent: "space-evenly" }}>
                                <Icon color="#333" name="chat" />
                                <Text style={{ color: "#333" }}>Chat</Text>
                            </View>
                        </View>
                        <View style={{ width: 200 }}>
                            <Button title="Close" onPress={() => { setIsFindMitraOpen(false); Actions.replace("mitraOtw") }} />
                        </View>
                    </View>
            }

        </Overlay>
    )
}

const styles = StyleSheet.create({
    founded: {
        padding: 20,
        width: 250,
        alignItems: "center"
    }
})

export default FindMitra