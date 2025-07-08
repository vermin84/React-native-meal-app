import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global";

export default function CategoryItem({categoryItem, onPress}){
    return <Pressable onPress={()=>onPress({item: categoryItem})} style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
      ]}>
        <Text style={styles.text}>{categoryItem.strCategory}</Text>
        <View style={styles.imageWrapper}>

        <Image style={styles.image} source={{uri: categoryItem.strCategoryThumb}} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    pressed:{
        opacity: 0.7
    },
    wrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        
    },
    imageWrapper:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6, // ← Android
        borderRadius: 8,
        backgroundColor: '#fff', // тень не видна без фона
        marginBottom: 10,
        
        
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 6,
        backgroundColor: colors.card

    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 5,
        color: colors.textPrimary,
        fontWeight: '700'
    }
})