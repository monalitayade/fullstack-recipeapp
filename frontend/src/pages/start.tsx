import React from 'react';
import { useNavigate } from 'react-router-dom';


const Start:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='fixed w-full flex flex-col justify-center items-center h-screen'>
      <img
        src="/images/glance-img.png"
        alt="Delicious Food"        
        className='w-full h-full'       
      />
      <div className='absolute w-full h-full flex flex-col justify-between items-center py-7'>     
        <img
        src="/images/chef-hat.png"
        alt="Delicious Food"
        width={1500}
        height={3248}
        className='w-[30%]'       
      />
      
        <div className='text-center text-white font-sans text-5xl font-bold'>Get Cooking</div>
        <button className='w-auto bg-teal-600 text-white font-sans px-24 py-5 mobile:px-4 mobile:py-3 rounded-lg text-3xl mobile:text-xl font-bold hover:bg-white hover:text-teal-600 transition-colors duration-300 ease-in-out' 
        onClick={() => navigate('/searchfood')}>Start Cooking</button>      
      </div>
    </div>
  )
}

export default Start;
