import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global";
import { useNavigation } from "@react-navigation/native";

export default function MealPreviewCard({meal}){
    
    const navigation = useNavigation()

    function onMealHandler(mealId){
        
        navigation.navigate('MealDetails', {mealId})
    }
    return (
  <View >
    <Pressable
      onPress={() => onMealHandler(meal.idMeal)}
      style={({ pressed }) => [
        styles.mealCard,
        pressed && styles.pressed
      ]}
    >
      <Text style={styles.cardHeader}>{meal.strMeal}</Text>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
    </Pressable>
  </View>
);

}

const styles= StyleSheet.create({
    mealCard: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.card,
        marginVertical: 10,
        padding: 10,
        paddingBottom: 20,
        //borderRadius: 15,
        marginHorizontal: 'auto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6, // ← Android
        borderRadius: 8,
        maxWidth: 300,
        width: "100%",
        overflow: 'hidden'
    },
    pressed: {
        opacity: 0.7,
        transform: [{ scale: 0.97 }]
    },
    image: {
        width: "80%",
        aspectRatio:1/1,
        borderRadius: 10,
        overflow: 'hidden'
        
    },
    cardHeader: {
        fontSize: 20,
        color: colors.textPrimary,
        marginBottom: 10,
        fontWeight: '700',
        textAlign: 'center'
    }
})