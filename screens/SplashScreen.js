import { Image, StyleSheet } from "react-native";
import { View } from "react-native";
import { colors } from "../Global";
import { useContext, useEffect } from "react";
import { FavoriteContext } from "../store/FavoriteContext";

export default function SplashScreen({navigation}){

    const ctx = useContext(FavoriteContext)

    useEffect(()=>{
        !ctx.isLoading && navigation.replace('Home')
    },[ctx.isLoading])

    return <View style={styles.wrapper}>

        <View style={styles.outerImageWrapper}>

        <View style={styles.imageView}>

        <Image style={styles.image} source={require('../assets/cat.png')}/>
        </View>
        </View>
    </View>
}

const styles= StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background
    },
    imageView:{
        width: 250,
        height: 300,
        borderRadius: '50%',
        overflow: 'hidden',
        borderColor: colors.primary,
        borderWidth: 40
    },
    outerImageWrapper: {
        padding: 40,
        backgroundColor: colors.card,
        borderRadius: '50%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        //aspectRatio: 1/1,
        //transform: [{ translateY: 20 }],
        //resizeMode: 'contain'
    }
})