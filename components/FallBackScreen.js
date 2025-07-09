import { StyleSheet, Text, View } from "react-native";

export default function FallBackScreen({children}){
    return <View style={styles.wrapper}>
        <Text>{children}
        </Text>
        </View>
}

const styles = StyleSheet.create({
    wrapper: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
    },
    text: {

    }
})