import {  Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonIcon from "../components/ButtonIcon"
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { getMealsByCategory } from "../services/services";
import MealsList from "../components/MealsList";



export default function Catwgories({route, navigation}){
    const [meals, setMeals] = useState([])
    const categoryInfo = route.params.item

    useEffect(()=>{
        async function fetchData() {
            const res = await  getMealsByCategory(categoryInfo.strCategory)
            
            setMeals(res)
            
        }
        fetchData()
    },[])
    
    return <SafeAreaView style={styles.wrapper}>
        
        <Header/>

        <Text style={styles.title}>{categoryInfo.strCategory}</Text>
        {meals && <MealsList meals={meals}/>}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    wrapper: {
            flex: 1,
            backgroundColor: colors.background,
            
            width: '100%',
            //marginBottom: 70,
           // paddingBottom: 40
        },
        title: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colors.textPrimary,
            textAlign: 'center',
            marginVertical: 10
        }
})