import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            {
                result.image_url != '' ? <Image style={styles.imageStyling} source={{ uri: result.image_url }}></Image> : null
            }
            
            <Text style={styles.title}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Review</Text>
        </View>
    )
}

export default ResultDetail

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
        marginBottom: 20
    },
    imageStyling: {
        height: 120,
        width: 250,
        borderRadius: 4
    },
    title:{
        fontWeight: 'bold' 
    }
})
