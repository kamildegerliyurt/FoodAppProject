import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {HorizontalFlatList, VerticalFlatList} from "../components/"
import { fetchDataAsync } from '../redux/dataSlice'
import { Pressable } from 'react-native'


const Home = () => {

const [filteredData, setFilteredData] = useState([])
//----------------------------------------------------------------
const dispatch = useDispatch();
const {data, isDataFetched} = useSelector((state)=> state.data)
//----------------------------------------------------------------
useEffect(() => {
  // Eğer kullanıcı login yaptıktan sonra Yelp API den veri çekilmediyse istek gönder.
  if(!isDataFetched){
    dispatch(fetchDataAsync());
  }

}, [dispatch, isDataFetched])
//----------------------------------------------------------------
const filterByCategory = (categoryName)=>{

  return data.filter(item => {

   const categories = item.categories.map(value => value.title)
   const filtered = categories.includes(categoryName)

   return filtered

  })

}
//----------------------------------------------------------------
const handleCategoryFilter =(value)=>{
    
  const result = filterByCategory(value)
   setFilteredData(result)
   
}
//----------------------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Restaurants Near By</Text>
      
        <View style={styles.horizontalFlatListContainer}>
           <Text style={styles.popularTextContainer}>Popular</Text>
             <View>
               <FlatList 
               alwaysBounceHorizontal={false}
               showsHorizontalScrollIndicator={false}
               horizontal
               data={data}
               keyExtractor={(item)=> item.id.toString()}
               renderItem={({item})=> {

                 const image = item?.image_url

                return(
                  <HorizontalFlatList data={item}
                                      image={image}/>
                )
               }}
               
               />
             </View>
        </View>

        <View style={styles.lineContainer}/>


        <View style={styles.verticalFlatListContainer}>
           <Text style={styles.bestReviewedText}>Best Reviewed</Text>

           <View style={styles.categoryFlatListContainer}>
             <FlatList 
             alwaysBounceHorizontal={false}
             showsHorizontalScrollIndicator={false}
             horizontal
             data={data}
             keyExtractor={(item)=> item.id.toString()}
             renderItem={({item})=> {

              const categories = item?.categories[0]?.title

              return(
                <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.categoryContainer]}
                           onPress={()=> handleCategoryFilter(item.categories[0].title)}>
                   <Text style={styles.categoryTextContainer}>{categories}</Text>
                </Pressable>
              )
             }}
             
             />
           </View>

           <View>
             <FlatList 
             alwaysBounceVertical={false}
             showsVerticalScrollIndicator={false}
             data={filteredData.length > 0 ? filteredData : data}
             keyExtractor={(item)=> item.id.toString()}
             renderItem={({item})=> {

              const image = item?.image_url


              return(
                <VerticalFlatList data={item}
                                  image={image}/>
              )
             }}


             />
           </View>


        </View>



    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#2A0040",
  },
  pageTitle: {
    fontSize:30,
    fontWeight:"bold",
    color:"white",
    marginBottom:5,
  },
  horizontalFlatListContainer: {
    flex:5,
    width:'90%',
    marginBottom:8,
  },
  popularTextContainer: {
    fontSize:16,
    fontWeight:"bold",
    color:"white",
  
  },
  lineContainer: {
    borderBottomWidth:1,
    borderColor:'white',
    width:'90%',
    marginVertical:20,
  },
  verticalFlatListContainer: {
    width:'90%',
    flex:6,

  },
  bestReviewedText: {
    fontSize:18,
    fontWeight:"bold",
    color:"white",
  },
  categoryFlatListContainer: {
    width:'100%',
    marginVertical:10,
    paddingVertical:5,
  },
  categoryTextContainer: {
    color:"white",
    fontSize:16,
    fontWeight:"bold",
  },
  categoryContainer: {
    width: 150,
    borderWidth:2,
    marginRight:10,
    borderColor:'white',
    alignItems:'center',
    borderRadius:10,
    paddingVertical:5,
    
  }
})