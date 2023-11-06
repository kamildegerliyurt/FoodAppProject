import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const VerticalFlatList = (props) => {

const image = props.image
const city = props.data?.location.city
const name = props.data?.name
const rating = props.data?.rating
const review = props.data?.review_count
const category = props.data?.categories[0].title
const price = props.data?.price



const navigation = useNavigation();

const handleButtonData = ()=> {
    navigation.navigate("Detail",
    {
        data: props.data
    })
}



  return (
    <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]}]}
               onPress={handleButtonData}>

        <View>
            <Image style={styles.imageContainer}
                   source={{uri: image}}/>
            <View style={styles.cityContainer}>
                <Text style={styles.cityName}>{city}</Text>
            </View>
        </View>


        <View style={styles.infoStyle}>
            
            <View>
                <Text style={styles.nameContainer}>{name}</Text>
                <View style={styles.ratingReviewContainer}>
                    <Text style={styles.ratingContainer}>
                        <AntDesign name="star" size={15} color="#FCCE05" />
                        {""}
                        {rating}
                    </Text>
                    <Text style={styles.reviewsText}> ({review} Reviews)</Text>
                </View>
                <Text style={{color: "white",}}>{category}</Text>
            </View>

            <Text style={styles.priceContainer}>{price}</Text>

        </View>


    </Pressable>
  )
}

export default VerticalFlatList

const styles = StyleSheet.create({
    imageContainer: {
        width:'100%',
        height:140,
        marginVertical:10,
        borderRadius:10,
    },
    cityContainer: {
        backgroundColor:'white',
        position:'absolute',
        padding:3,
        right:0,
        bottom:10,
    },
    cityName: {
        fontSize:12,
        fontWeight:"bold",
    },
    infoStyle: {
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    nameContainer: {
        fontSize:18,
        fontWeight:"bold",
        color:"white",
    },
    ratingReviewContainer: {

        flexDirection:'row',
        alignItems:'center',
    },
    ratingContainer: {
        fontWeight:"bold",
        color:"white",
    },
    reviewsText: {
        fontWeight:"bold",
        color:"white",
    },
    priceContainer: {
        fontWeight:"bold",
        color:"white",
        fontSize:20,
    }
    
})
