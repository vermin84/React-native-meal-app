import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { colors } from "../Global";
import { useContext, useEffect, useState } from "react";
import { getMealById, parseIngredients } from "../services/services";
import IngredientList from "../components/Ingridients";
import YoutubeVideo from "../components/YoutubeVideo";

import FavButton from "../components/FavButton";
import { FavoriteContext } from "../store/FavoriteContext";

export default function MealDetails({route}){
    const [meal, setMeal] = useState()
    const [ingridients, setIngridients] = useState()
    const {mealId}=route.params

    const favMealsctx = useContext(FavoriteContext)
    const isFavorite = favMealsctx.favMeals.includes(mealId)
    

    function onFavoriteHandler(mealId){
        favMealsctx.favoriteToggle(mealId)
    }
    
    useEffect(()=>{
      async function fetchData() {
        const res = await getMealById(mealId)
        setMeal(res[0])
        const ingr = parseIngredients(res[0])
        setIngridients(ingr)
      }  
      fetchData()
    },[])
    return <SafeAreaView style={styles.wrapper}>
        <Header/>
       {meal && <ScrollView >
        <Text style={styles.mainTitle}>{meal.strMeal}</Text>
        <View style={styles.imageWrapper}>

        <Image style={styles.mainImage} source={{uri: meal.strMealThumb}}/>
        <FavButton onPress={()=>onFavoriteHandler(mealId)} isFavorite={isFavorite}/>
        </View>
        <View style={styles.infoBlock}>

            <Text style={styles.infoText}>Region - {meal.strArea}</Text>
            <Text style={styles.infoText}>Category - {meal.strCategory}</Text>
        </View>
        <IngredientList ingredients={ingridients}/>
        <View style={styles.instructionsWrapper}>
            <Text style={styles.instructionsText}>{meal.strInstructions}</Text>
        </View>
        <YoutubeVideo videoUrl={meal.strYoutube}/>
        </ScrollView>}
        </SafeAreaView>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 10
    },
    mainTitle: {
        fontSize:26,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center'
    },
    mainImage: {
         width: "80%",
        aspectRatio:1/1,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 'auto',
        marginVertical: 15,
        position: 'relative'
    },
    infoBlock: {
        flexDirection: 'row',
        justifyContent: "space-around",
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    infoText: {
        fontSize:12,
        fontWeight: '600',
        marginHorizontal: 5,
        color: colors.textSecondary
    },
    instructionsText: {
        fontSize: 16,
        color: colors.textSecondary,
        


    },
    instructionsWrapper: {
        padding: 5,
        marginVertical: 10
    },
    imageWrapper: {
        position: 'relative'
    },
    favIcon: {
        position: 'absolute'
    }
})