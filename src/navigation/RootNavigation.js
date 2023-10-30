import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './AuthStack'
import UserStack from './UserStack'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import app from '../../firebaseConfig';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

  const { isAuth } = useSelector((state)=> state.user)

   

  return (
    <NavigationContainer>
        {
            !isAuth 

            ? <AuthStack/> 
            :  <UserStack/>
        }
    </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})