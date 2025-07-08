import { StyleSheet, Text, View } from "react-native";
import CategoriesList from "./CategoriesList";
import { colors } from "../Global";
import { Header } from "./Header";
import { useNavigation } from "@react-navigation/native";

export default function ListHeaderComponent(categories){
    const navigation = useNavigation()
    function categoryHandler({item}){
  navigation.navigate('Category', {item})
}
    return <View>
        <Header></Header>
            {categories &&<CategoriesList onPress={categoryHandler} categories={categories}/>}
            <Text style={styles.title}>
                        Meals of the day
                    </Text>
    </View>
}
const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: '900',
        marginBottom: 15,
        textAlign: 'center',
        color: colors.textPrimary
    }
})