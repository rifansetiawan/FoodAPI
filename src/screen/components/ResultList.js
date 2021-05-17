import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultList = ({title, results, navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={results} key={results.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('ResultShow', {id : item.id})}>
                            <ResultDetail result={item}></ResultDetail>
                        </TouchableOpacity>
                    )
                }}
            >

            </FlatList>
        </View>
    )
}

export default withNavigation(ResultList)

const styles = StyleSheet.create({
    
    header :{
        fontSize: 25,
        fontWeight : 'bold',
        marginLeft : 15
    }
})
