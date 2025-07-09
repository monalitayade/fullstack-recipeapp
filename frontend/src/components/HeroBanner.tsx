import react from 'react';

const HeroBanner: React.FC = () => {
    return(
        <div className='w-full flex justify-between '>            
             <div style={{ backgroundImage: "url('/images/hero-banner.png')" }} className="bg-cover bg-center w-full bg-no-repeat mb-10 tablet:mb-0 relative flex tablet:flex-col-reverse justify-between items-center py-28 tablet:py-20 mobile:pb-5">
                <div className='w-1/2 tablet:w-[80%] flex h-full flex-col justify-center items-start tablet:items-center text-left tablet:text-center mb-10 sm:pl-10 tablet:pl-0 mobile:w-[95%]'>
                    <h1 className='text-5xl text-amber-900 font-bold mb-4 mobile:text-3xl'>Welcome to Our Recipe App</h1>
                    <p className='text-lg mb-4 text-amber-95000'>Discover delicious recipes and share your culinary creations with the world.</p>
                    <button className='bg-amber-800 font-sans text-xl text-white px-6 tablet:px-11 py-2 tablet:py-3 rounded-lg hover:bg-amber-900 transition-all duration-300'>Get Started</button>
                </div>
                <div className='w-1/4 tablet:w-1/2 mr-11 tablet:mr-0'>
                    <img src="/images/banner-dish.png" alt="banner-dish" />                    
                </div>
           </div>
        </div>
    );
}

export default HeroBanner;