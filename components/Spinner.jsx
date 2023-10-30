import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Spinner = (props) => {
    const {size = "small", color = "#009688"} = props
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <ActivityIndicator size={size} color={color} />
    </View> 
  )
}

export default Spinner

const styles = StyleSheet.create({})
