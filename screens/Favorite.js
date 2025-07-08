import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { FavoriteContext } from "../store/FavoriteContext";
import { getListByIds } from "../services/services";
import MealsList from "../components/MealsList";
import { colors } from "../Global";

export default function Favorite(){
    const {favMeals} = useContext(FavoriteContext)
    const [favList, setFavList] = useState([])

    useEffect(()=>{
        async function getData(){
            const res = await getListByIds(favMeals)
            
            setFavList(res.flat())
        }
        getData()
    }, [favMeals])
    
    return <SafeAreaView style={styles.wrapper}>
        
        <Header/>
        <Text style={styles.title}>Favorite Meals</Text>
        {favList && <MealsList meals={favList}/>}
    </SafeAreaView>
}

const styles = StyleSheet.create({
     wrapper: {
                flex: 1,
                backgroundColor: colors.background,
                
                width: '100%',
                //paddingBottom: 70
            },
    title: {
             fontSize: 28,
            fontWeight: 'bold',
            color: colors.textPrimary,
            textAlign: 'center',
            marginVertical: 10
    }        
})