import React, {createContext, useContext, useEffect, useState} from "react";
import { Recipe } from "../types/recipe.d";
import { getRecipeDetail } from "../api/foodApi";
import { useParams } from "react-router-dom";

interface RecipeDetailContextType  {
    recipeDetail: Recipe | null;
    setRecipeDetail: React.Dispatch<React.SetStateAction<Recipe | null>>;
    fetchRecipeDetail?: (id: number) => Promise<void>;
}

const RecipeDetailContext = createContext<RecipeDetailContextType | undefined>(undefined);

export const RecipeDetailProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [recipeDetail, setRecipeDetail] = useState<Recipe | null>(null);
    const { id } = useParams<{ id: string }>();

    const fetchRecipeDetail = async (id: number) => {       
         
        try{
            const response:Recipe = await getRecipeDetail(id);
            console.log("Recipe Detail response:", response);
            if(response) {
                setRecipeDetail(response);
            }
        } catch (error) {
            console.error('Error fetching recipe detail:', error);
        }
    }
    useEffect(() => {
       if (id) {
            fetchRecipeDetail(Number(id));
        }
    },[id]);
    console.log("Recipe Detail context:", recipeDetail);
    return (
        <RecipeDetailContext.Provider value={{ recipeDetail, setRecipeDetail, fetchRecipeDetail }}>
            {children}
        </RecipeDetailContext.Provider>
    );
};

export const useRecipeDetail = () => {
    const context = useContext(RecipeDetailContext);
    if (!context) {
        throw new Error('useRecipeDetail must be used within a RecipeDetailProvider');
    }
    return context;
};