import { Recipe } from "../types/recipe.d";

const API_URL = process.env.REACT_APP_API_RECIPES_URL || 'http://localhost:5000/api';

export async function getRecipeDetail(id:number): Promise<{ recipe: Recipe }> {
    const res = await fetch(`${API_URL}/${id}`);

    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json();    
}