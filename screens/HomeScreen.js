import { StyleSheet, ScrollView, View, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import SearchProducts from '../components/home/SearchProducts'
import AddressBar from '../components/home/AddressBar'
import Categories from '../components/home/Categories'
import Carousel from '../components/home/Carousel'
import PopularProducts from '../components/home/PopularProducts'
import DealOfTheDay from '../components/home/DealOfTheDay'
import Products from '../components/home/Products'
import AddressModal from '../screens/AddressModal'
import { useDispatch, useSelector } from 'react-redux'
import { logout, getUserAccount } from '../Redux/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { currentUser, userErrorMsg } = useSelector((state) => state.auth)
  if (currentUser) {
    console.log(currentUser);
  }

  const getUser = async () => {
    const token = await AsyncStorage.getItem('auth')
    if (!token) {
      dispatch(logout())
      navigation.replace('Login')
    }
    dispatch(getUserAccount())
  }

  useEffect(() => {
    if (userErrorMsg) {
      Alert.alert('', userErrorMsg)
    }

    getUser()
  }, [userErrorMsg])

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right
        }}
      >
        <ScrollView overScrollMode="never">
          <SearchProducts />
          <AddressBar />
          <Categories />
          <Carousel />
          <PopularProducts />
          <DealOfTheDay />
          <Products />
          <AddressModal />
        </ScrollView>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})