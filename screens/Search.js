import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { useState } from "react";
import { searchByName } from "../services/services";
import SearchModule from "../components/SearchModule";
import MealsList from "../components/MealsList";
import { colors } from "../Global";
import FallBackScreen from "../components/FallBackScreen";

export default function Search(){

    const [query, setQuery] =useState('')
    const [results, setReslts] =useState([])
    const [hasSearched, setHasSearched] = useState(false);

   async function onSearch(){
        if(!query.trim()) return
        try {
            const results = await searchByName(query)
            setReslts(results.meals || [])
            setHasSearched(true)
            setQuery('')

        }catch (error) {
            console.error("Ошибка поиска:", error);
    }}
    
    return <SafeAreaView style={styles.wrapper}>
        <Header/>
        <Text style={styles.title}>Search</Text>
    
        <SearchModule onSubmit={onSearch} value={query} onChange={setQuery}/>
        <View style={{ flex: 1 }}>

        {results.length > 0 ? (
  <MealsList meals={results} />
) : hasSearched ? (
  <FallBackScreen>No meals found</FallBackScreen>
) : (
  <FallBackScreen>Start searching</FallBackScreen>
)}

        </View>
    </SafeAreaView>
}

const styles=StyleSheet.create({
    wrapper: {
        backgroundColor: colors.background,
        flex: 1
    },
    title: {
        fontSize: 28,
        color: colors.textPrimary,
        textAlign: "center",
        fontWeight: 'bold'
    }
})