import React, {createContext, useState, useContext, useEffect} from 'react';
import { Food } from '../types/food.d';
import { addFood } from '../api/foodApi';

interface AddRecipeContextType {
    recipe:Food[],
    postRecipe:(data:Food) =>  Promise<void>;
    loading:boolean,
    error:string | null
}

const CreateRecipeContext = createContext<AddRecipeContextType | undefined>(undefined);

export const RecipeSetterProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [recipe, setRecipe] = useState<Food[]>([]);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState<string | null>(null);

    const postRecipe = async(data:Food) => {
        setLoading(true);
        setError(null);
       try{
        const res = await addFood(data);
        setRecipe(recipe);
       } catch(err:any) {
        console.log(err);
        setError(err);
       } finally {
         setLoading(false);
       }
    }
    return(
        <CreateRecipeContext.Provider value={{postRecipe,recipe,loading,error}}>
            {children}
        </CreateRecipeContext.Provider>
    )
}

export const useRecipeCreate = () => {
    const context = useContext(CreateRecipeContext);
    if(!context) {
        throw new Error("useRecipePost must be used within a RecipePostProvider")
    }
    return context;
}