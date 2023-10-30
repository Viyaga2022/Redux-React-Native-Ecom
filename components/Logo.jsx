import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const logo = require("../assets/images/logo.png")

const Logo = ({ width, height}) => {
    if(!width || !height) {
        width = 150
        height = 150
    }

  return (
    <View>
        <Image
          style={{ width, height }}
          source={logo}
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})