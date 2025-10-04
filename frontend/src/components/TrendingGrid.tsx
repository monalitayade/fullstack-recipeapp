import react from "react";
import {Food} from '../types/food.d';
import { Link } from 'react-router-dom';

interface RecipeListProps  {
    recipeList: Food;
    variant?:string;
}
const TrendingGrid:React.FC<RecipeListProps> = ({recipeList, variant="Home"}) => {
    
    return(
        <Link key={recipeList?.recipe_id} to={`/recipe-detail/${recipeList?.recipe_id}`} className='w-full flex relative border border-gray-300 rounded-lg p-4 items-center justify-center mb-4 hover:bg-gray-100 transition-all duration-300 '>               
            <div className='w-20 mr-2'>
                <img src='/images/food-1.png' alt="food-image" className='mobile:p-3'/>
            </div>
            <div className='w-full'>
            <div className='text-lg font-semibold text-left'>{recipeList?.recipe_name}</div>
            
            <div className='flex justify-between'>               
                <div className='flex font-sans font-semibold'>Calories:{recipeList?.calories}</div>
            </div>
        
            </div>
        </Link>
    )
}

export default TrendingGrid;