import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Detail = ({navigation, route}) => {


const total = route.params.data
const imageURI = total.image_url
const restaurantName = total.name


const address1 = total.location.display_address[0]
const address2 = total.location.display_address[1]
const isClosed = total.is_closed ? "Open" : "Closed"
const phone = total.phone


const info = [address1, address2, isClosed, phone]


  return (
    <SafeAreaView style={styles.container}>

        <Image style={styles.imageContainer}
               source={{uri: imageURI}}/>

        <Text style={styles.restaurant}>{restaurantName}</Text>


        <View style={styles.infoContainer}>
           {
             info.map((value, index)=> {
              return(
                <View style={styles.infoSubContainer} key={index}>
                   <Text style={styles.infoTextContainer}>{value}</Text>
                </View>
              )
             })
           }
        </View>
    
    
    
    
    </SafeAreaView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A0040",
    
  },
  imageContainer: {
    width:"95%",
    height:200,
    marginVertical:20,
    borderRadius:10,

  },
  infoSubContainer: {
    width:'95%',
    borderBottomWidth:0.2,
    alignItems:'center',
    paddingVertical:10,
    borderColor:"white",
  },
  infoContainer: {
    width:'95%',
    
  },
  restaurant: {
    color:"white",
    fontSize:30,
    fontWeight:"bold",
  },
  infoTextContainer: {
    color:"white",
    fontSize:16,
    fontWeight:"bold",
  }
})
