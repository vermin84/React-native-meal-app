import { StyleSheet, TextInput, View } from "react-native"
import ButtonIcon from "./ButtonIcon"
import { colors } from "../Global"
import { Shadow } from "react-native-shadow-2"

export default function SearchModule({onSubmit, value, onChange}){
    return <View style={styles.searchWrapper}>
        <Shadow containerViewStyle={{ margin: 10}}
  startColor={"rgba(0,0,0,0.1)"}
  stretch
  
  distance={4}
  offset={[0, 2]}
  inset  >

        <TextInput onChangeText={onChange} value={value} onSubmitEditing={onSubmit} style={styles.searchInput} placeholder="Search your meal ..."/>
        </Shadow>
        <ButtonIcon onPress={onSubmit} size={24} name='search-outline' color={colors.textPrimary}/>
    </View>
}

const styles = StyleSheet.create({
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.background
    },
    searchInput: {
       //width: '100%',
           // flex: 1,
            width: 200,
         height: 40,
          borderColor: "gray",
        borderWidth: 1,
          borderRadius: 15,
          paddingHorizontal: 8,
          borderColor: colors.textSecondary,
          backgroundColor: colors.card,
          //marginHorizontal: 12,
          color: colors.textPrimary
    }
})