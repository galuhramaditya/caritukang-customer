import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sheet from './sheet';

const category_types = [
    ["General", "Electrical", "Air Conditioning", "Plumbing"],
    ["Construction", "Home Security", "Designer", "Gardening"]
]

const Item = ({ title, setIsSheetOpen }) => {
    return (
        <View style={styles.category_item} onTouchStart={() => { if (title == "Air Conditioning") setIsSheetOpen(true) }}>
            <View style={styles.category_icon}></View>
            <Text style={{ textAlign: "center", fontSize: 10, }}>{title}</Text>
        </View>
    )
}

const Category = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    return (
        <View style={styles.category}>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Category</Text>
            <View style={styles.category_box}>
                {category_types.map((data, idx) => (
                    <View key={idx} style={styles.category_row}>
                        {data.map(val => (
                            <Item key={val} title={val} setIsSheetOpen={setIsSheetOpen} />
                            ))}
                    </View>
                ))}
            </View>
            <Sheet isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        padding: 20
    },
    category_box: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "#eee",
        borderWidth: 0.5
    },
    category_row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 5
    },
    category_item: {
        alignItems: "center",
        width: 90
    },
    category_icon: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: "#5F81D9"
    }
})

export default Category