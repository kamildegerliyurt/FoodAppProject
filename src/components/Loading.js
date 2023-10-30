import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#2A0040"
    }
})