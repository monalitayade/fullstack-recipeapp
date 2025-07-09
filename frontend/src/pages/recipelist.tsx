import React, { useEffect, useState } from 'react';
import { useRecipeList } from '../context/RecipeContext';
import RecipeGrid from '../components/RecipeGrid';
import HeroBanner from '../components/HeroBanner';


const RecipeList:React.FC = () => {

  const {trendingRecipes, fetchTrendingRecipes} = useRecipeList();

  useEffect(() => {
    fetchTrendingRecipes();
  },[]);

  return (
    <div className='w-full flex flex-col items-center mt-24'>
      {/* <HeroBanner /> */}
      <div className='w-full flex flex-col justify-center items-center mb-6 sm:px-10'>
          <h3 className='w-full flex justify-between items-center text-4xl font-semibold font-sans text-amber-700 mb-10'>Trending recipes
            <a href="" className='w-auto text-xl border-amber-700 border-b-2 text-amber-700'>View More</a>
          </h3>
          <div className='w-full grid grid-cols-4 gap-4 tablet:grid-cols-3 mobile:grid-cols-2'> 
            <RecipeGrid recipeList={trendingRecipes.slice(0, 8)} variant="home" />        
          </div>
      </div>
    </div>
  )
}

export default RecipeList;