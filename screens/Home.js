import {  ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { colors } from "../Global";
import { getCategories, getTopTenMeals } from "../services/services";
import { useContext, useEffect, useState } from "react";

import { Header } from "../components/Header";
import MealsList from "../components/MealsList";
import { FavoriteContext } from "../store/FavoriteContext";

export default function Home({navigation}){
//const [categories, setCategories] = useState([])
//const [randomMeals, setRandomMeals] = useState([])
const ctx= useContext(FavoriteContext);



  /* useEffect(() => {
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
      ctx.setIsLoading(false);
    }
  }

  fetchData();
}, []);*/
    return <SafeAreaView style={styles.wrapper} >
        
        
    {!ctx.isLoading && ctx.randomMeals && <MealsList categories={ctx.categories} meals={ctx.randomMeals}/>}
        
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