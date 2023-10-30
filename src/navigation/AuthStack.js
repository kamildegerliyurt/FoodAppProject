import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LoginScreen, Register, ForgotPassword   } from '../screens/'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>

    </Stack.Navigator>
  )
}

export default AuthStack;
