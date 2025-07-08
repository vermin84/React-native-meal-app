import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from "../Global";

export default function CategoriesList({categories, onPress}){

    
    return <View style={styles.listWrapper}>
        <Text style={styles.listTitle}>Select category</Text>
           {/* <ScrollView contentContainerStyle={{ padding: 10 }} horizontal>{categories.map((categorie, i)=><CategoryItem onPress={onPress} key={categorie.idCategory} categoryItem={categorie}> </CategoryItem>)}</ScrollView>*/}
           <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        horizontal
        contentContainerStyle={{ padding: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryItem categoryItem={item} onPress={onPress} />
        )}
      />
        </View>
}

const styles = StyleSheet.create({
    listTitle:{
        fontSize: 30,
        color: colors.textPrimary,
        marginHorizontal: 5,
        marginVertical: 8
    },
    listWrapper: {
        paddingVertical: 15
    }
})