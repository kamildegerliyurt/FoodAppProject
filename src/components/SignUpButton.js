import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const SignUpButton = (props) => {

const buttonSignUpName = props.buttonSignUpName
const handleSignUp = props.handleSignUp
const isDisable = props?.isDisable

  return (
    <Pressable 
    style={({pressed})=> [{backgroundColor: props.isDisable ? "gray" : (pressed ? "gray" : "tomato")},styles.otherButtonContainer]}
    onPress={handleSignUp}
    disabled={isDisable}>
        <Text style={styles.otherButtonTextContainer}>{buttonSignUpName}</Text>
    </Pressable>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    otherButtonContainer: {
        width:"100%",
        marginVertical:5,
        paddingVertical:10,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    },
     otherButtonTextContainer: {
        fontSize:18,
        fontWeight:"bold",
        color:"white",
     }

})