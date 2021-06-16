import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { Actions } from "react-native-router-flux";

const LoginPage = () => {
    return (
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%", backgroundColor: "white" }}>
            <StatusBar hidden={true} />
            <View style={{ backgroundColor: "#3379E4", width: 200, height: 200, position: "absolute", right: 0, top: 0 }}></View>
            <View style={{ backgroundColor: "#3379E4", width: 200, height: 200, position: "absolute", left: 0, bottom: 0 }}></View>
            <View style={{ padding: 20, marginBottom: 10, elevation: 2, width: 300, borderRadius: 20, backgroundColor: "white" }}>
                <Text>Username / Email</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} />
                <Text>Password</Text>
                <Input containerStyle={{ paddingHorizontal: 0 }} secureTextEntry={true} />
                <View>
                    <Button title="Daftar" onPress={() => Actions.replace("home")} />
                </View>
                <Text style={{ textAlign: "center", marginTop: 10 }}>Lupa password? klik disini</Text>
            </View>
            <Text>Belum punya akun? daftar disini</Text>
        </View>
    )
}

export default LoginPage;