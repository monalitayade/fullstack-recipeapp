import React from 'react'
import Header from './Header';
import { useLocation, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

  const location = useLocation();

  const hideonLocation = ['/sign-in','/sign-up'];
  const isHeaderHidden = hideonLocation.includes(location?.pathname);
    
  return (
    <div className='max-w-screen-2xl sm:max-w-screen-xl w-full flex flex-col justify-center items-center mx-auto'>
      {!isHeaderHidden && <Header />}
     
      <div className='w-full flex flex-col '>         
          <Outlet />
      </div>
      
    </div>
  )
}

export default Layout;
