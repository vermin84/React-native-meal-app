import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_URL = 'https://www.themealdb.com/api/json/v1/1/'

export async function  getCategories(){
    const res =  await axios.get(`${API_URL}categories.php`);
     
    return res.data.categories
}

export async function getTopTenMeals(num) {
    const random = []

    while (random.length < num) {
    try {
      const res = await axios.get(`${API_URL}random.php`);
      const meal = res.data.meals?.[0];

      // Проверка по ID, чтобы не было дублей
      const exists = random.some(m => m.idMeal === meal.idMeal);

      if (!exists) {
        random.push(meal);
      }
    } catch (error) {
      console.error('Error fetching random meal:', error);
    }
  }
  return random
}

export async function getMealsByCategory(category){
  const res =  await axios.get(`${API_URL}filter.php?c=${category}`);
  return res.data.meals
}

export async function getMealById(id){
  const res = await axios.get(`${API_URL}lookup.php?i=${id}`)
  
  return res.data.meals
}



export function parseIngredients(mealData) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = mealData[`strIngredient${i}`];
    const measure = mealData[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  return ingredients;
}



export async function saveToStorage(key, data){
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Данные сохранены');
  } catch (e) {
    console.error('Ошибка сохранения:', e);
  }
}

export async function getFromStorage(key){
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Ошибка загрузки:', e);
    return null;
  }
}



export async function getListByIds(ids) {
  const promises = ids.map(id => getMealById(id));
  const mealsList = await Promise.all(promises);
  
  return mealsList;
}


export async function searchByName(name){
  const res = await axios.get(`${API_URL}search.php?s=${name}`)
  return res.data
}