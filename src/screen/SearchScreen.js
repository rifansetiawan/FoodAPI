import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import yelp from '../api/yelp';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResult] = useState([]);
    
    const filterResultbyPrice = (price) =>{
        return results.filter(result=>{
            return result.price == price;
        })
    }

    const searchApi = async() => {
        const response = await yelp.get('/search',{
            params: {
                limit: 50,
                term: term,
                location: 'SAN JOSE'
            }
        })
        setResult(response.data.businesses)
        // console.log(response.data.businesses)
    }
    // console.log(term);

    return (
        <ScrollView style={styles.background}>
            <SearchBar term={term} onChangeTerm={newTerm=> setTerm(newTerm)} onTermSubmit={searchApi}></SearchBar>
            {/* <Text>Search Screen</Text>
            <Text>we have found {results.length} results</Text> */}

            <ResultList results={filterResultbyPrice('$')} title="Murah"></ResultList>
            <ResultList results={filterResultbyPrice('$$')} title="Mahal"></ResultList>
            <ResultList results={filterResultbyPrice('$$$')} title="Hedon"></ResultList>
            {/* {
                results.map(result=>{
                    // return <Text key={result.id}>{result.name}</Text>
                    if(result.image_url != ''){

                        return  <Image key={result.alias} style={{ height: 100, width: 100, padding: 20 }} source={{uri: result.image_url }}></Image>
                    }
                })
            } */}
           
        </ScrollView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    background:{
        backgroundColor: 'white',
        flex: 1
    }
})
