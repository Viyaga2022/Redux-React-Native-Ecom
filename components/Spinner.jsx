import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Spinner = (props) => {
    const {size = "small", color = "#009688"} = props
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center", flexDirection:"row", gap:5, alignItems:"center"}}>
        <ActivityIndicator size={size} color={color} />
        <Text style={{fontWeight:400}}>Loding...</Text>
    </View> 
  )
}

export default Spinner

const styles = StyleSheet.create({})
