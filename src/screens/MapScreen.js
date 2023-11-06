import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import MapView, {Marker, Callout} from 'react-native-maps';
import { Loading } from '../components/'
import { useDispatch, useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import * as Location from 'expo-location'



const MapScreen = () => {

  const [location, setLocation] = useState({
    latitude:0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const dispatch = useDispatch();
  const { data, isDataFetched, error, loading } = useSelector( (state) => state.data );



  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      console.log(location)

      const {latitude, longitude } = location.coords;
      setLocation({...location, latitude, longitude});
    })();
  }, []);
  


  if(loading){
    return <Loading/>
  }

  return (
    <View style={styles.container}>
     

      <MapView style={styles.map} region={location}>

        <Marker coordinate={location} title='You are Here!'/>

        {
          data.map((value,index)=>{
            return(
              <Marker 
                key={index}
                coordinate={value.coordinates}
                title={value.name}
              >
               <View style={{width:100, 
                height:40, 
                backgroundColor:'tomato', 
                alignItems:'center', 
                justifyContent:'center',
                borderWidth:2,
                borderRadius:10,
                }}>
                    <Text style={{color:'white', fontWeight:'bold'}}>{value.price}</Text>
                    <Text style={{color:'white', fontWeight:'bold', fontSize:10 }} ellipsizeMode='tail' numberOfLines={2}>{value.name}</Text>
                  </View>
                <Callout>

                  <View style={{width:100, height:50}}>
                    <Text>{value.price}</Text>
                  </View>
                </Callout>
              </Marker>
            )
          })
        }

      </MapView>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  map:{
    width:'100%',
    height:'100%'
  }
})