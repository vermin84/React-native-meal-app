import { createContext, useEffect, useState } from "react";
import { getCategories, getFromStorage, getTopTenMeals, saveToStorage } from "../services/services";

export const FavoriteContext = createContext()

export function FavoriteContextProvider({children}){
    const [isLoading, setIsLoading] = useState(true);
    const [favMeals, setFavMeals] = useState([])
    const [categories, setCategories] = useState([])
    const [randomMeals, setRandomMeals] = useState([])


    useEffect(()=>{
        async function getData(){
            const res= await getFromStorage('favorite')
            setFavMeals(res || [])
        
        }
        getData()
        
    },[])
    useEffect(() => {
        saveToStorage('favorite', favMeals);
    }, [favMeals]);
    
     useEffect(() => {
      async function fetchData() {
        try {
          const [cat, rand] = await Promise.all([
            getCategories(),
            getTopTenMeals(10)
          ]);
          setCategories(cat);
          setRandomMeals(rand);
        } catch (error) {
          console.error("Error fetching data", error);
        } finally {
          setIsLoading(false);
        }
      }
    
      fetchData();
    }, []);


    function favoriteToggle(id){
        const isFav = favMeals.includes(id)

        if (isFav) {
            setFavMeals( favMeals=> favMeals.filter(item => item !== id))
            
        } else setFavMeals([...favMeals, id])

        
    }


    const value = {
        favMeals: favMeals,
        favoriteToggle: favoriteToggle,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
        categories: categories,
        setCategories: setCategories,
        randomMeals: randomMeals,
        setRandomMeals: setRandomMeals
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}