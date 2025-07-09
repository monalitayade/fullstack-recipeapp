import React, { createContext, useState, useContext, useEffect } from 'react';
import { Food } from '../types/food.d';
import { getFoods } from '../api/foodApi';

interface RecipeContextType {
    trendingRecipes: Food[];
    fetchTrendingRecipes: () => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeListProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [trendingRecipes, setTrendingRecipes] = useState<Food[]>([]);

    const fetchTrendingRecipes = async () => {
        try {
            const response:Food[] = await getFoods(); // Replace with your API endpoint
            // const data: Food[] = await response.json();
            setTrendingRecipes(response);
        } catch (error) {
            console.error('Error fetching trending recipes:', error);
        }
    };

    useEffect(() => {
        fetchTrendingRecipes();
    }, []);

    return (
        <RecipeContext.Provider value={{ trendingRecipes, fetchTrendingRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
}

export const useRecipeList = () => {
    const context = useContext(RecipeContext);
    if (!context) {
        throw new Error('useRecipeList must be used within a RecipeListProvider');
    }
    return context;
};