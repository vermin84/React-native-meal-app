import { createContext, useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../services/services";

export const FavoriteContext = createContext()

export function FavoriteContextProvider({children}){

    const [favMeals, setFavMeals] = useState([])


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
    
    function favoriteToggle(id){
        const isFav = favMeals.includes(id)

        if (isFav) {
            setFavMeals( favMeals=> favMeals.filter(item => item !== id))
            
        } else setFavMeals([...favMeals, id])

        
    }


    const value = {
        favMeals: favMeals,
        favoriteToggle: favoriteToggle
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}