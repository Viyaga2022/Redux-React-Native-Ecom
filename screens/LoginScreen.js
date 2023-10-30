import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginContent from '../components/LoginAndRegister/LoginContent';
import Logo from '../components/Logo';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = () => {
  const insets = useSafeAreaInsets
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: insets.paddingTop,
        paddingBottom: insets.paddingBottom,
        paddingRight: insets.paddingRight,
        paddingLeft: insets.paddingLeft
      }}
    >
      <Logo />
      <LoginContent />
    </View>

  )
}

export default LoginScreen
const styles = StyleSheet.create({})