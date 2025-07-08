import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../Global";

export default function FavButton({ onPress, isFavorite}){
    

    return <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
        <Ionicons size={32} name={isFavorite ?'heart' : 'heart-outline'} color={colors.error}/>
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
    opacity: 0.5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.background,
    borderRadius:30,
    position: 'absolute',
    top: "11%",
    right: '15%'
  }
})