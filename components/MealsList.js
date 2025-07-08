import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MealPreviewCard from "./MealPreviewCard";
import { colors } from "../Global";
import ListHeaderComponent from "./ListHeaderComponent";

export default function MealsList({meals, categories}){
    return <View style={styles.wrapper}>
        
   {/* <ScrollView>{meals.map((meal, i)=><MealPreviewCard key={meal.idMeal} meal={meal}></MealPreviewCard>)}</ScrollView>*/}
   { <FlatList contentContainerStyle={{ paddingBottom: categories? 0 : 90 }} ListHeaderComponent={categories && ListHeaderComponent(categories)} keyExtractor={(item)=>item.idMeal} data={meals} renderItem={item=><MealPreviewCard meal={item.item}/>}/>}
    </View>
}

const styles=StyleSheet.create({
   wrapper: {
    marginHorizontal: 'auto',
    
    width: '100%',
    backgroundColor: colors.background,
    
   }
})