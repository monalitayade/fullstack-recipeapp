import React from 'react';
import { Link } from 'react-router-dom';
import { Food } from '../types/food.d';
import StarRating from './StarRating';
import {BookmarkIcon as BookmarkOutline} from '@heroicons/react/24/outline';
import {BookmarkIcon as BookmarkSolid} from '@heroicons/react/24/solid';

interface RecipeListProps  {
    recipeList: Food[];
    variant?:string;
}

const RecipeGrid:React.FC<RecipeListProps> = ({recipeList, variant = 'home'}) => {
    // console.log("RecipeList", recipeList);
    if (variant !== 'home') return <h3>Not a valid variant</h3>;

    var homeList = recipeList.map((recipe, r) => {
        return(
            <Link key={recipe?.recipe_id} to={`/recipe-detail/${recipe?.recipe_id}`} className='w-full flex flex-col relative border border-gray-300 rounded-lg p-4 items-center justify-center hover:bg-gray-100 transition-all duration-300 '>
                <button className='absolute top-0 right-0  group'>
                    <BookmarkOutline className=" w-9 h-9 stroke-amber-600  rounded bg-white inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                    <BookmarkSolid className="absolute  opacity-0 w-9 h-9 stroke-amber-600 inset-0 rounded fill-amber-600 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <div className='w-full'>
                <img src='/images/food-1.png' alt="food-image" className='mobile:p-3'/>
                </div>
                <div className='w-full'>
                <div className='text-lg font-semibold'>{recipe?.recipe_name}</div>
                <div className='flex items-center font-sans font-semibold'>Rating: <StarRating rating={recipe?.recipe_rate}/></div>
                <div className='flex justify-between'>
                    <div className='flex font-sans font-semibold'>{recipe?.author_name}</div>
                    <div className='flex font-sans font-semibold'>Calories:{recipe?.calories}</div>
                </div>
            
                </div>
            </Link>
        )
    })
 return (
    <>
    {homeList}
    </>
 )

}

export default RecipeGrid