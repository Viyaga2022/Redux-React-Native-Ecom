import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SearchProducts from './home/SearchProducts'
import SmallSpinner from './Spinner'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BigSpinner = () => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left
      }}>
      <SearchProducts />
      <SmallSpinner size="large" />
    </View>
  )
}

export default BigSpinner

const styles = StyleSheet.create({})