import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import RegisterContent from '../components/LoginAndRegister/RegisterContent';
import Logo from '../components/Logo';

const RegisterScreen = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <Logo />
      <RegisterContent />
    </View>

  )
}

export default RegisterScreen

const styles = StyleSheet.create({})