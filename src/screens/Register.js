import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register} from "../redux/userSlice"
import {Loading, SignUpButton} from "../components/"

const Register = ({navigation}) => {
//------------------------------------------------------
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [handleErrorMessage, setHandleErrorMessage] = useState(errorMessage)
const [isButtonDisable, setIsButtonDisable] = useState(false)
//------------------------------------------------------
const dispatch = useDispatch();

const {errorMessage, isLoading} = useSelector((state)=> state.user)
//------------------------------------------------------
useEffect(() => {
  const handleConfirmPassword =()=>{
    if( email.length === 0 
                || password.length === 0 
                || password !== confirmPassword ){
      setIsButtonDisable(true)
    }else{
      setIsButtonDisable(false)
    }
    setHandleErrorMessage('Password dismatch!')
  }
  
  handleConfirmPassword()
}, [password, confirmPassword])
//------------------------------------------------------

const handleRegister = ()=>{
  dispatch(register({email, password}))
}

//------------------------------------------------------

if(isLoading){
  return <Loading />
}
//------------------------------------------------------



  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
          <View style={styles.registerContainer}>
            <Text style={styles.registerTextContainer}>
            <AntDesign name="adduser" size={24} color="white" />
            {" "}
              REGISTER
              </Text>
            <TextInput  style={styles.enterEmail}
                        placeholder='Enter Your Email'
                        onChangeText={(text)=> setEmail(text.toLowerCase())}
                        value={email}/>
            
            <TextInput  style={styles.enterPassword}
                        placeholder='Enter Your Password'
                        onChangeText={setPassword}
                        value={password}/>

            <TextInput  style={styles.reEnterPassword}
                        placeholder='Re-Enter Your Password'
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}/>
         </View>

         <View style={styles.errorContainer}>
           <Text style={styles.errorText}>{handleErrorMessage}</Text>
         </View>

         <SignUpButton buttonSignUpName="Sign Up"
                       handleSignUp={handleRegister}
                       isDisable={isButtonDisable}/>

      </View>

      <Pressable style={styles.goToLoginContainer}
                 onPress={()=> navigation.navigate("LoginScreen")}>
        <Text style={styles.goToLoginTextContainer}>Login</Text>
      </Pressable>

    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A0040",
   
  },
  topContainer: {
    width:"95%",
    alignItems:"center",
    justifyContent:"center",
  },
  registerContainer: {
    paddingVertical:10,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  registerTextContainer: {
    fontWeight:"bold",
    fontSize:25,
    color:"white"
  },
  enterEmail: {
    width:"100%",
    paddingVertical:10,
    borderRadius:5,
    textAlign:"center",
    backgroundColor:"white",
  },
  enterPassword: {
    width:"100%",
    paddingVertical:10,
    borderRadius:5,
    textAlign:"center",
    backgroundColor:"white",
    marginVertical:10,
  },
  reEnterPassword: {
    width:"100%",
    paddingVertical:10,
    borderRadius:5,
    textAlign:"center",
    backgroundColor:"white",
  },
  errorContainer: {
    width:"100%",
    marginVertical:5,
    paddingVertical:10,
    alignItems:"center",
    justifyContent:"center",
  },
  errorText: {
    fontWeight:"bold",
    color:"red",
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
   }
  
})