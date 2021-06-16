import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Overlay } from 'react-native-elements';

const SearchBy = ({ styles, isSearchByOpen, setIsSearchByOpen, isFindMitraOpen, setIsFindMitraOpen }) => {
    return (
        <Overlay isVisible={isSearchByOpen} onBackdropPress={() => setIsSearchByOpen(false)}>
            <StatusBar hidden={isSearchByOpen} />
            <View style={styles.overlay}>
                <Text style={[styles.f_l, styles.bold]}>Search by</Text>
                <Text style={[{ width: "100%", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#aaa" }, styles.f_m]} onPress={()=>{setIsSearchByOpen(false); setIsFindMitraOpen(true)}}>System</Text>
                <Text style={[{ width: "100%", paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#aaa" }, styles.f_m]}>ID Mitra</Text>
            </View>
        </Overlay>
    )
}

export default SearchBy