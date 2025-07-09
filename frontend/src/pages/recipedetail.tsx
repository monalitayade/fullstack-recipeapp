import react, {useState, useEffect} from 'react';
import { getRecipeDetail } from '../api/recipeApi';
import { useParams } from 'react-router-dom';
import { useRecipeDetail } from '../context/RecipeDetailContext';
import StarRating from '../components/StarRating';

const RecipeDetail:React.FC = ()  => {
   
    const {recipeDetail, fetchRecipeDetail} = useRecipeDetail();
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        if(id && fetchRecipeDetail) {
            fetchRecipeDetail(Number(id));
        }
    },[id])

    console.log("22",recipeDetail);


    return(
        <div className='w-full flex flex-col items-center justify-center px-4 mt-24'>
            <div className='w-full flex flex-col py-2 border-b border-gray-200'>
                <h1 className='w-full font-sans font-semibold text-4xl text-left sm:text-2xl'>{recipeDetail?.recipe_name}</h1>
                <div className='w-full flex items-center justify-start my-4'>
                    <div className='w-auto flex justify-center items-center font-sans font-semibold text-lg text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#92400e" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='ml-1'>{recipeDetail?.author_name}</span>
                    </div>
                    <div className='w-auto flex justify-center items-center font-sans font-semibold text-lg text-gray-500 ml-9'>
                        Rating: <span className='ml-1'>{recipeDetail?.recipe_rate}</span>
                        <StarRating rating={recipeDetail?.recipe_rate || 0} />
                    </div>
                </div>
                {/* <div className='w-full flex my-10 ipad:flex-col mobile:mt-3'>
                    <div className='w-1/2 ipad:w-full ipad:mb-9'>
                        <img src="/images/food-detail.png" className='w-full' />
                    </div>
                    <div className='w-1/2 px-8 ipad:w-full mobile:px-0'>
                        <div className='w-full flex items-center justify-start mb-4 mobile:flex-wrap'>
                            <div className='text-3xl font-semibold font-sans mr-2 sm:text-2xl mobile:flex-grow-0 mobile:flex-shrink-0 mobile:basis-full mobile:mr-0 mobile:mb-3'>{recipeDetail?.name}</div>
                            <div className='text-sm font-normal text-gray-400 mobile:flex-1'>(13k Reviews)</div>
                            <button className='flex w-8 ml-auto mobile:flex-1 mobile:h-9'>
                                <img src='/images/save.svg' alt='Chef Hat' className='w-full block' />
                            </button>
                        </div>
                        <p className='w-auto font-sans text-normal text-left my-2'>{recipeDetail?.description}</p>
                        <div className='w-full flex items-center justify-start mobile:justify-between'>
                            <div className='flex items-center'>
                                <div className='flex text-lg text-gray-400 '>
                                    <img src="/images/timer.svg" alt="timer" className='w-5 mr-2'/>
                                    <div className='flex text-gray-400 mobile:hidden'>Cooking Time :</div></div>
                                <div className='flex text-gray-400 ml-2 mobile:ml-1'>{recipeDetail?.time} Mins</div>
                            </div>
                            <div className='flex items-center ml-5'>
                                <div className='flex text-lg text-gray-400'>
                                    <img src="/images/serve.svg" alt="timer" className='w-5 mr-1'/>
                                    </div>
                                <div className='flex text-gray-400'>{recipeDetail?.serve} Serve</div>
                            </div>
                            <span
                            className='bg-teal-600 w-[60px] h-8 rounded-full flex justify-between items-center text-white font-semibold text-sm px-2 ml-auto mobile:ml-0'>
                                <img src='/images/star.svg' alt='Arrow Right' className='w-5' />
                                {recipeDetail?.rating}.0
                            </span>
                        </div>
                        <div className='w-full flex flex-col mt-10'>
                            <div className='w-full flex'>
                                <button className={`w-1/2 text-center mx-3 ${activeTab === 'ingredients' ? 'bg-teal-600 text-white ':'text-teal-600 bg-white'} text-lg font-sans font-semibold py-2 rounded-md hover:bg-teal-600 hover:text-white transition-colors duration-300 ease-in-out'`} onClick={() => setActiveTab('ingredients')}>Ingrident</button>
                                <button className={`w-1/2 text-center mx-3 ${activeTab === 'procedure' ? 'bg-teal-600 text-white ':'text-teal-600 bg-white' }   text-lg font-sans font-semibold py-2 rounded-md hover:bg-teal-600 hover:text-white transition-colors duration-300 ease-in-out'`} onClick={() => setActiveTab('procedure')}>Procedure</button>
                            </div>
                            {
                                activeTab === 'ingredients' && (
                                    <div className='w-full flex flex-col mt-4'>
                                        {
                                            recipeDetail?.ingredients?.map((ingre, i) => {
                                                console.log("ingre", ingre.name);
                                                return(
                                                    <div className='w-full flex items-center bg-gray-100 shadow-lg p-4 sm:p-2 rounded-lg mb-6'>
                                                        <div className='flex items-center font-sans font-semibold text-xl'>
                                                            <img src="/images/ing-1.png" alt="ingredient-1" className='w-16 mr-3'/>
                                                            {ingre?.name}
                                                        </div>
                                                        <div className='flex ml-auto text-lg font-semibold font-sans text-gray-500'>{ingre?.quantity}</div>
                                                    </div>
                                                            )
                                            })
                                        }
                                        
                                
                                    </div>
                                )
                            }
                            {
                                activeTab === 'procedure' && (
                                    <div className='w-full flex flex-col mt-4'>
                                        {
                                            recipeDetail?.steps.map((step, index) => {
                                                return(
                                                    <div className='w-full flex flex-col bg-gray-100 p-3 rounded-xl mb-5'>
                                                        <h6 className='text-lg font-semibold font-sans text-left'>Step {index + 1}</h6>
                                                        <p className='text-[16px] font-normal text-slate-500 font-sans text-left'>
                                                        {step}
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                    
                                    </div>
                                )
                            }
                        
                            
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='w-full flex items-center justify-center my-10 tablet:flex-col'>
                <div className='w-3/5 flex flex-col sm:w-1/2 tablet:w-full tablet:px-5'>
                    <div className='w-full'>
                        <img src="/images/food-detail.png" className='w-full' alt="Recipe Detail" />
                    </div>
                    <div className='w-full flex  justify-around items-center p-4 sm:p-2 rounded-lg mb-6 mt-6'>
                        <div className='w-1/2 flex flex-col font-sans font-semibold border-r-2 border-gray-200 pr-4'>
                            Preparation Time: <span className='text-slate-500'>{recipeDetail?.prep_time} Mins</span>
                        </div>
                        <div className='w-1/2 flex flex-col font-sans font-semibold'>
                            Serving: <span className='text-gray-500'>{recipeDetail?.serving_people_count} People</span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start justify-start mb-4  pl-[20px]  mobile:flex-wrap'>
                        <div className='text-3xl font-semibold font-sans mr-2 sm:text-2xl mobile:flex-grow-0 mobile:flex-shrink-0 mobile:basis-full mobile:mr-0 mobile:mb-3'>Ingredients:</div>
                        <ul className='list-disc p-0 text-left my-2'>                            
                                {recipeDetail?.ingredients.map((ingredient, index) => (
                                    <li key={index} className='font-sans text-lg'>{ingredient}</li>
                                ))}                            
                        </ul>
                        
                    </div>
                    <div className='w-full flex flex-col items-start justify-start mb-4 mobile:flex-wrap'>
                        <div className='text-3xl font-semibold font-sans mr-2 mb-4 sm:text-2xl mobile:flex-grow-0 mobile:flex-shrink-0 mobile:basis-full mobile:mr-0 mobile:mb-3'>Instruction:</div>
                        <ul className='list-none p-0  text-left my-2'>                            
                                {recipeDetail?.steps.map((steps, s) => (
                                    <li key={s} className='flex font-sans text-lg mb-5'><div className='w-7 h-7 bg-amber-800 rounded-full flex justify-center items-center text-white'>{s+1}</div><p className='w-[calc(100%-35px)] ml-[7px]'>{steps}</p></li>
                                ))}                            
                        </ul>
                        
                    </div>
                </div>
                <div className='w-2/5 sm:w-1/2 px-8'>
                    <h3>Trending</h3>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;