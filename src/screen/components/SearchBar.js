import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} ></Feather>
            <TextInput placeholder="Search" value={term} onChangeText={onChangeTerm} onEndEditing={onTermSubmit} style={styles.textInput}></TextInput>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background:{
        height: 50,
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor : '#F0EEEE',
        flexDirection : 'row',
        marginTop: 10
    },
    iconStyle:{
       fontSize: 35,
       alignSelf: 'center',
       marginHorizontal: 15
    }, 
    textInput :{
        fontSize: 18,
        flex : 1
    }
    
})
