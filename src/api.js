import axios from 'axios'
import * as Location from 'expo-location'


export const fetchData = async()=>{
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted'){
            throw new Error('Permission to access location was denied')
        }
        let location = await Location.getCurrentPositionAsync({});

        const latitude = location?.coords?.latitude
        const longitude = location?.coords?.longitude

        const apiURL =`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}`
       
        
        const response = await axios.get(`${apiURL}`,{
            headers: {
             "Authorization": `Bearer ${process.env.EXPO_PUBLIC_YELP_API_KEY}`,
             "accept": "application/json"
            }
        })
        return response?.data?.businesses

    } catch (error) {
        throw error;
    }
    
}