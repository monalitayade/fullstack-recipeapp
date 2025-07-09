import React, { useEffect, useState } from 'react';
import { useRecipeList } from '../context/RecipeContext';
import RecipeGrid from '../components/RecipeGrid';
import HeroBanner from '../components/HeroBanner';


const Home:React.FC = () => {

  const {trendingRecipes, fetchTrendingRecipes} = useRecipeList();

  useEffect(() => {
    fetchTrendingRecipes();
  },[]);

  return (
    <div className='w-full flex flex-col items-center'>
      <HeroBanner />
      <div className='w-full flex flex-col justify-center items-center mb-6 sm:px-10 tablet:px-4'>
          <h3 className='w-full flex justify-between items-center text-4xl font-semibold font-sans text-amber-700 mb-10 mobile:text-2xl'>Trending recipes
            <a href="" className='w-auto text-xl border-amber-700 border-b-2 text-amber-700 mobile:text-lg'>View More</a>
          </h3>
          <div className='w-full grid grid-cols-4 gap-4 tablet:grid-cols-3 mobile:grid-cols-1'> 
            <RecipeGrid recipeList={trendingRecipes.slice(0, 8)} variant="home" />        
          </div>
      </div>
    </div>
  )
}

export default Home;