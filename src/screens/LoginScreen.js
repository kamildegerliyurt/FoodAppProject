import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import {Loading, LoginButton} from "../components/"
import { Entypo } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, autoLogin} from "../redux/userSlice"

const LoginScreen = ({navigation}) => {

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const [handleErrorMessage, setHandleErrorMessage]= useState("")


//-----------------------------------------------------------------
const dispatch = useDispatch();

const handleOnPress = ()=> {
  dispatch(login({email, password}))
}
//-----------------------------
useEffect(() => {
  dispatch(autoLogin())
}, [])

//-----------------------------------------------------------------
const { errorMessage, isLoading } = useSelector((state)=> state.user)

useEffect(() => {
   const invalidEmail = 'Firebase: Error (auth/invalid-email)'

   if(invalidEmail == errorMessage){
    setHandleErrorMessage('Invalid Email or Password! Try Again')
   }

    setHandleErrorMessage(errorMessage)


}, [errorMessage])
//-----------------------------------------------------------------

if(isLoading) {
  return <Loading />
}

//-----------------------------------------------------------------


  return (
    <View style={styles.container}>
      <View style={styles.otherContainer}>
         <View style={styles.loginContainer}>
            <Text style={styles.loginTextContainer}>
            <Entypo name="login" size={22} color="white" />
             {"  "}
              LOGIN
            </Text>

            <TextInput 
            style={styles.emailContainer}
            placeholder='Email'
            onChangeText={(text)=> setEmail(text.toLowerCase())}
            value={email}/>

            <TextInput 
            style={styles.passwordContainer}
            placeholder='Password'
            onChangeText={setPassword}
            value={password} />
         </View>
         <View style={styles.errorMassageContainer}>
          <Text style={styles.errorMassageTextContainer}>{handleErrorMessage}</Text>
         </View>
     
         <LoginButton buttonNameData='Login'
                      handleButtonData={handleOnPress}/>
      
      
      </View>
          <Pressable 
          style={styles.forgotContainer}
          onPress={()=> navigation.navigate("ForgotPassword") }>
            <Text style={styles.forgotText}>ForgotPassword</Text>
          </Pressable>

          <Pressable style={styles.signUpContainer}
          onPress={()=> navigation.navigate("Register")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </Pressable>
        
    

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A0040",
  },
  otherContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
    
  },
  loginContainer: {
    paddingVertical:10,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",

  },
  loginTextContainer: {
     fontSize:25,
     fontWeight:"bold",
     color:"white",

  },
  emailContainer: {
    borderWidth:0.2,
    width:"100%",
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
    borderRadius:5,
    textAlign:"center",
    marginVertical:10,
  },
  passwordContainer: {
    borderWidth:0.2,
    width:"100%",
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
    borderRadius:5,
    textAlign:"center",
  },
  errorMassageContainer: {
    width:"100%",
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
  },
  errorMassageTextContainer: {
    fontWeight:"bold",
    color:"red",

  },
  forgotText: {
    fontSize:16,
    fontWeight:"bold",
    color:"white",
    textDecorationLine:"underline",
  },
  forgotContainer: {
    marginTop:5,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  signUpContainer: {
    marginTop:10,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  signUpText: {
    fontSize:16,
    fontWeight:"bold",
    color:"white",
    textDecorationLine:"underline",
  }
})