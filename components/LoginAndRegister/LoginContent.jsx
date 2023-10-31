import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../Redux/slices/authSlice';
import Spinner from '../Spinner';

const LoginContent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { isLoding, loginErrorMsg, loginSuccessMsg } = useSelector((state) => state.auth)

  const handleLogin = async () => {
    const loginData = { email, password }
    dispatch(login(loginData))
  }

  useEffect(() => {
    if (loginErrorMsg) {
      Alert.alert('', loginErrorMsg)
    }

    if (loginSuccessMsg) {
      Alert.alert('', loginSuccessMsg)
      navigation.replace('Main')
    }

    dispatch(reset())
  }, [loginErrorMsg, loginSuccessMsg])

  return (
    <KeyboardAvoidingView>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Login In to Your Account</Text>
      </View>

      <View style={{ marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30
          }}
        >
          <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="gray" />
          <TextInput value={email} onChange={(value) => setEmail(value.nativeEvent.text)} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder='Enter Your Email' />
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            borderRadius: 5,
            marginTop: 30
          }}
        >
          <AntDesign style={{ marginLeft: 8 }} name="lock1" size={24} color="black" />
          <TextInput value={password} onChange={(value) => setPassword(value.nativeEvent.text)} secureTextEntry={true} style={{ color: "gray", marginVertical: 10, width: 300 }} placeholder='Enter Your Password' />
        </View>
      </View>

      <View style={{ marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text>Keep me logged in</Text>
        <Text style={{ color: "#007FFF", fontWeight: 500 }}> Forgot Password</Text>
      </View>

      <View style={{ marginTop: 50 }} />

      {isLoding
        ? (
          <View style={{ width: 200, height: 50, backgroundColor: "#FEBE10", padding: 15, marginLeft: "auto", marginRight: "auto", borderRadius: 6 }}>
            <Spinner color="blue" />
          </View>
        )
        : (
          <Pressable onPress={handleLogin} style={{ width: 200, backgroundColor: "#FEBE10", padding: 15, marginLeft: "auto", marginRight: "auto", borderRadius: 6 }}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold" }}>Login</Text>
          </Pressable>
        )
      }

      <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }}>
        <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>Don't have an account? Sign Up</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default LoginContent

const styles = StyleSheet.create({})