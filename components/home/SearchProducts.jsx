import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const SearchProducts = () => {
    return (
        <View style={{ backgroundColor: "#009688", flexDirection: "row", padding: 10, position:'fixed', top:0, right:0, left:0 }}>
            <Pressable style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", flex: 1, gap: 10, marginHorizontal: 7, borderRadius: 3, height: 38 }}>
                <AntDesign style={{ paddingLeft: 10 }} name="search1" size={24} color="black" />
                <TextInput placeholder='Search' />
            </Pressable>
            <Feather name="mic" size={24} color="black" />
        </View>
    )
}

export default SearchProducts

const styles = StyleSheet.create({})