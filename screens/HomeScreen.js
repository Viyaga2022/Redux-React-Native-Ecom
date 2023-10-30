import { StyleSheet, ScrollView, View } from 'react-native'
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

const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.auth)

  useEffect(() => {
    if(!currentUser) {
      navigation.navigate('Login')
    }
  }, [currentUser, navigation])

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