import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const HorizontalFlatList = (props) => {

const image = props.image
const city = props.data.location.city
const name = props.data.name
const rating = props.data.rating
const review = props.data.review_count


const navigation = useNavigation();

const handleButton = ()=> {
    navigation.navigate("Detail",
    {
        data: props.data
    })
}


  return (
    <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]}]}
               onPress={handleButton}>
        <View style={styles.ImageTextContainer}>
            <Image style={styles.imageStyle}
                   source={{uri: image}}/>
            <Text style={styles.cityText}>{city}</Text>
        </View>
        <View style={styles.rateContainer}>
           <Text style={styles.nameContainer}>{name}</Text>
                
                <View style={styles.rateViewContainer}>
                    <Text style={styles.ratingContainer}>
                        <AntDesign name="star" size={15} color="#FCCE05" />
                        {""}
                        {rating}
                    </Text>
                    <Text style={styles.reviewContainer}> ({review} Reviews)</Text>
                </View>
        
        </View>

    </Pressable>
  )
}

export default HorizontalFlatList

const styles = StyleSheet.create({
    ImageTextContainer: {
        width:'100%',
        alignItems:'center',
    },
    imageStyle: {
        width:150,
        height:200,
        margin: 10,
        borderRadius:10,
        borderWidth:2,
        borderColor:'white'
    },
    cityText: {
        position:'absolute',
        backgroundColor:'white',
        borderRadius:8,
        fontSize:16,
        fontWeight:'bold',
        padding:2,
        bottom: 10,
    },
    rateContainer: {
       alignItems:"center",
    },
    nameContainer: {
      fontSize:16,
      fontWeight:"bold",
      color:"white",
    },
    rateViewContainer: {
      flexDirection:'row',
      alignItems:'center',
    },
    ratingContainer: {
        fontWeight:"bold",
        color:"white",
    },
    reviewContainer: {
        fontWeight:"bold",
        color:"white",
    }
})
