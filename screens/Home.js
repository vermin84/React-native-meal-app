import {  ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../Global";
import { getCategories, getTopTenMeals } from "../services/services";
import { useEffect, useState } from "react";
import CategoriesList from "../components/CategoriesList";

import { Header } from "../components/Header";
import MealsList from "../components/MealsList";

export default function Home({navigation}){
const [categories, setCategories] = useState([])
const [randomMeals, setRandomMeals] = useState([])
const [isLoading, setIsLoading] = useState(true);



   useEffect(() => {
  async function fetchData() {
    try {
      const [cat, rand] = await Promise.all([
        getCategories(),
        getTopTenMeals(10)
      ]);
      setCategories(cat);
      setRandomMeals(rand);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setIsLoading(false);
    }
  }

  fetchData();
}, []);
    return <SafeAreaView style={styles.wrapper} >
        
        
    {!isLoading && randomMeals && <MealsList categories={categories} meals={randomMeals}/>}
        
    </SafeAreaView >
}

const styles = StyleSheet.create({
    wrapper: {
       // flex: 1,
        backgroundColor: colors.background,
        
        
       
    },
    content: {
        
    }
     
})