import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { useState } from "react";
import { searchByName } from "../services/services";
import SearchModule from "../components/SearchModule";
import MealsList from "../components/MealsList";
import { colors } from "../Global";

export default function Search(){

    const [query, setQuery] =useState('arra')
    const [results, setReslts] =useState([])

   async function onSearch(){
        if(!query.trim()) return
        try {
            const results = await searchByName(query)
            setReslts(results.meals)
            setQuery('')

        }catch (error) {
            console.error("Ошибка поиска:", error);
    }}
    
    return <SafeAreaView style={styles.wrapper}>
        <Header/>
        <Text style={styles.title}>Search</Text>
        <SearchModule onSubmit={onSearch} value={query} onChange={setQuery}/>
        {results && <MealsList meals={results}/>}
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