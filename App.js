import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Catwgories from './screens/Categories';
import Favorite from './screens/Favorite';
import Search from './screens/Search';
import MealDetails from './screens/MealDetails';
import { FavoriteContextProvider } from './store/FavoriteContext';
import { colors } from './Global';

const Stack= createNativeStackNavigator()
export default function App() {
  return (
    <SafeAreaProvider >
      <FavoriteContextProvider>

    <NavigationContainer >
      <StatusBar style="auto" />
      
      <Stack.Navigator screenOptions={{headerShown: false, backgroundColor: colors.background}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Category' component={Catwgories}/>
        <Stack.Screen name='Favorite' component={Favorite}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='MealDetails' component={MealDetails}/>
      </Stack.Navigator>
      
    </NavigationContainer>
      </FavoriteContextProvider>
    </SafeAreaProvider>
  );
}

