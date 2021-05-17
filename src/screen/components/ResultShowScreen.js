import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../../api/yelp'

const ResultShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result , setResult] = useState(null);
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
        console.log(result);
    }, [])

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>Result Show Screen with id : {id}</Text>
            <FlatList data={result.photos}
                keyExtractor={(a)=>a}
            renderItem={
                ({item}) => {
                    // console.log(a)
                    return <Image style={styles.image} source={{ uri: item }}></Image>
                    // console.log(item);
                    // return <Text>{item}</Text>
                }
            }></FlatList>
            {/* <Image source={{ result.photos.id  }} ></Image> */}
        </View>
    )
}

export default ResultShowScreen

const styles = StyleSheet.create({
    image : {
        height : 100,
        width : 250
    }
})
