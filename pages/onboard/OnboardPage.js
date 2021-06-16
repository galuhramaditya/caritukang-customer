import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

const OnboardPage = () => {
    return (
        <View style={{ padding: 20, flex: 1 }}>
            <StatusBar hidden={true} />
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ color: "#3379E4" }}>CariTukang</Text>
                <Text>Lewati</Text>
            </View>
            <View style={{ flex: 4, alignSelf: "center" }}>
                <Image source={require("../../img/skate.png")} style={{ width: 200 }} resizeMode="contain" />
            </View>
            <View style={{ flex: 2, alignSelf: "center", width: "100%" }}>
                <View style={{ marginVertical: 5 }}>
                    <Button buttonStyle={{ borderRadius: 20 }} title="Ayo, Daftar Sekarang!" onPress={() => Actions.register()} />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Button buttonStyle={{ borderRadius: 20, backgroundColor: "white", borderWidth: 1 }} titleStyle={{ color: "#2E86DE" }} title="Sudah Punya Akun" onPress={() => Actions.login()} />
                </View>
            </View>
            <View style={{ alignSelf: "flex-end" }}>
                <Text style={{ textAlign: "center", fontSize: 10 }}>
                    Dengan mengeklik salah satu tombol diatas, berarti kamu setuju dengan Ketentuan Layanan dan Kebijakan Privasi CariTukang.
                </Text>
            </View>
        </View>
    )
}

export default OnboardPage;