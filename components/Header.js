import { StyleSheet, Text, View } from "react-native";
import ButtonIcon from "./ButtonIcon";
import { colors } from "../Global";
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";

export function Header(){ 
    const isFavorite = useRoute().name === 'Favorite'
    const navigation = useNavigation()
    const isRiot = useNavigationState(state =>{
        return state.index ===0
    })
    const isSearch = useNavigationState(state => {const route = state.routes[state.index];
  return route.name ==="Search";})
    
    function navigateHandler(path){
        navigation.navigate(path)
    }
    return <View style={styles.headerWrapper}>
        {!isRiot &&(<ButtonIcon size={24}
                                    color={colors.textPrimary}
                                     
                                     name='arrow-back-outline'
                                     onPress={()=>navigation.goBack()}/>)}
        {!isSearch &&<ButtonIcon onPress={()=>navigateHandler('Search')} color={colors.textPrimary} name='search-outline' size={24} title='Search...'/>}
        {!isFavorite && <ButtonIcon onPress={()=>navigateHandler('Favorite')} color={colors.error} name='heart' size={24} title='To favotite'/>}
        
    </View>
}

const styles=StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        backgroundColor: colors.background
    }
})