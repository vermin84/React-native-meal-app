import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../Global";

export default function IngredientList({ ingredients }) {
  if (!ingredients || ingredients.length === 0) {
    return <Text style={styles.emptyText}>No ingredients found.</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Ingredients</Text>

      {ingredients.map((item, index) => (
        <View key={index} style={styles.item}>
          <Ionicons
            name="checkmark-circle-outline"
            size={20}
            color={colors.accent || '#4CAF50'}
            style={styles.icon}
          />
          <Text style={styles.text}>
            {item.ingredient} — {item.measure}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.textPrimary,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary || '#333',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});
