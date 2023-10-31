import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { Pressable } from 'react-native';
import {Loading, LoginButton,} from "../components/"
import { resetPassword } from "../redux/userSlice"
import { TextInput } from 'react-native';


const ForgotPassword = ({navigation}) => {

const [isButtonDisable, setIsButtonDisable]= useState(true)
const [handleErrorMessage, setHandleErrorMessage]= useState(errorMessage)
const [email, setEmail]= useState("")

//----------------------------------------------------------
const dispatch = useDispatch();
const {errorMessage, isLoading} = useSelector((state)=> state.user)
//----------------------------------------------------------


const handleButtonData = ()=> {
  dispatch(resetPassword(email))
}
//----------------------------------------------------------
// eğer email'ın uzunlugu 0'a esıt degıl ıse "setısbutonDısable(false)" aksı takdırde (true)
useEffect(() => {
  if(email.length !== 0 ){
    setIsButtonDisable(false)
  }else{
    setIsButtonDisable(true)
  }

}, [email])

//----------------------------------------------------------

if(isLoading){
  return <Loading />
}



  return (
    <View style={styles.container}>
      <Text style={styles.forgotTextContainer}>
      <FontAwesome5 name="key" size={24} color="white" />
      {"  "}
        Forgot Password
      </Text>

      <View style={styles.errorMessageContainer}>
        <Text style={styles.errorTextContainer}>{handleErrorMessage}</Text>
      </View> 
      <View style={styles.buttonInputContainer}>
        <TextInput style={styles.resetPassword}
                  placeholder='Enter Your Mail'
                  onChangeText={(text)=> setEmail(text.toLowerCase())}
                  value={email}/>

        <LoginButton buttonNameData="Reset Password"
                    handleButtonData={handleButtonData}
                    isDisable={isButtonDisable}/>
      </View>

      <Pressable style={styles.goToLoginContainer}
                 onPress={()=> navigation.navigate("LoginScreen")}>
        <Text style={styles.goToLoginTextContainer}>Login</Text>
      </Pressable>


    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A0040",
    
  },
  forgotTextContainer: {
    fontSize:24,
    fontWeight:"bold",
    color:"white",
    marginBottom:5,
  },
  errorMessageContainer: {
    width:"100%",
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    
  },
  errorTextContainer: {
    color:"red",
    fontWeight:"bold",
  },
  resetPassword: {
    borderWidth:0.2,
    width:"100%",
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
    borderRadius:5,
    textAlign:"center",
    marginVertical:5,
  },
  goToLoginContainer: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
  },
  goToLoginTextContainer: {
    fontSize:16,
    color:'white',
    fontWeight:'bold',
    textDecorationLine:'underline',
   },
   buttonInputContainer: {
    width:"95%",
   }
})