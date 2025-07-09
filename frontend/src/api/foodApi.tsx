import { Food } from "../types/food.d";
import { Recipe } from "../types/recipe.d";
console.log(process.env.REACT_APP_API_FOODS_URL)
const API_URL = process.env.REACT_APP_API_FOODS_URL || 'http://localhost:5000/api';
const RECIPE_DETAIL_URL = process.env.REACT_APP_API_RECIPE_DETAIL_URL || 'http://localhost:5000/api/recipe';

export async function getFoods(): Promise<Food[]> {
    const res = await fetch(API_URL);
    
    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json();
};
export async function getRecipeDetail(id:number): Promise<Recipe> {
    const res = await fetch(`${API_URL}/recipe/${id}`);

    if(!res.ok) throw new Error('Failed to fetch data');
    return res.json();    
}
export async function addFood(food: Omit<Food,'id'>): Promise<Food> {
    const res = await fetch(`${API_URL}/create`, {
        method:'POST',
        headers: {
            'content-type' :'application/json'},
        
        body:JSON.stringify(food),
    });
    if (!res.ok) {
    throw new Error('Failed to add food');
  }

  return res.json();
};

export async function updateFood(id:number, food: Omit<Food, 'id'>): Promise<Food> {
    const res = await fetch(`${API_URL}/update/${id}`, {
        method: 'PUT',
        headers: {'content-type' :'application/json'},
        body: JSON.stringify(food),
    });
    if (!res.ok) {
        throw new Error('Failed to update food');
    }

    return res.json();
};

export async function deleteFood(id:number): Promise<void> {
    const res = await fetch(`${API_URL}/delete/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        throw new Error('Failed to delete food');
    }
}
export async function searchFood(query:string): Promise<Food[]> {
    const searchRes = await fetch(API_URL +`/search?name=${query}`);
    if(searchRes.ok) {
       const data = await searchRes.json();
       return Array.isArray(data.foods) ? data.foods : [];
    } else {
        throw new Error('Failed to search foods');
    }
}
