import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Banner from './banner';
import BottomNavigation from './bottomNavigation';
import Category from './category';

const HomePage = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <ScrollView style={{ flex: 1 }}>
                <Banner />
                <Category />
            </ScrollView>
            <BottomNavigation />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage