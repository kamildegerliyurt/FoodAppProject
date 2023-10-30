import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Button = (props) => {

const button = props.buttonNameData
const buttonLogin = props.handleButtonData
const disable = props?.isDisable

  return (
    <Pressable 
    style={({pressed})=> [{backgroundColor: props.isDisable ? "gray" : (pressed ? "gray" : "tomato")},styles.buttonContainer]}
    onPress={buttonLogin}
    disabled={disable}>
        <Text style={styles.buttonTextContainer}>{button}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        borderWidth:2,
        width:"100%",
        marginVertical:5,
        paddingVertical:10,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center",
    },
    buttonTextContainer: {
        fontSize:18,
        fontWeight:"bold",
        color:"white",

    }
})