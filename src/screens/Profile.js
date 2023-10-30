import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from "../redux/userSlice"

const Profile = () => {

//-------------------------------
const dispatch = useDispatch();

const handleLogOut= ()=> {
  dispatch(logout())
}
//-------------------------------

  return (
    <View style={styles.logoutContainer}>
      <Text>Profile</Text>
         <Pressable 
         style={({pressed})=> [{backgroundColor: pressed ? "gray" : "white"},styles.logoutButton]}
         onPress={handleLogOut}>
           
            <Text style={styles.logoutButtonText}>Logout</Text>
         
         </Pressable>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  logoutContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  logoutButton: {
    borderWidth:0.2,
    borderRadius:5,
    width:'80%',
    alignItems:'center',
    paddingVertical: 10,
    marginTop:10,
    backgroundColor:"tomato",
  },
  logoutButtonText: {
    fontSize:16,
    fontWeight:"bold",
    color:"white",
  }
})