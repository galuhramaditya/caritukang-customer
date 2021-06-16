import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Actions } from "react-native-router-flux";

const RegisterPage = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%", backgroundColor: "white" }}>
            <StatusBar hidden={true} />
            <View style={{ backgroundColor: "#3379E4", width: 200, height: 200, position: "absolute", right: 0, top: 0 }}></View>
            <View style={{ backgroundColor: "#3379E4", width: 200, height: 200, position: "absolute", left: 0, bottom: 0 }}></View>
            <View style={{ padding: 20, marginBottom: 10, elevation: 2, width: 300, borderRadius: 20, backgroundColor: "white" }}>
                <Text>Username</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} />
                <Text>E-mail</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} />
                <Text>Password</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} secureTextEntry={true} />
                <Text>Confirm Password</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} secureTextEntry={true} />
                <View>
                    <Button title="Daftar" onPress={() => Actions.login()} />
                </View>
            </View>
            <Text>Sudah punya akun? login disini</Text>
        </View>
    )
}

export default RegisterPage;