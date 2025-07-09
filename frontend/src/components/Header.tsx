import react, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { MenuIcon, XIcon } from '@heroicons/react/solid';
// import {Profile} from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

const Header:React.FC = () => {     
    const navigate = useNavigate();
    const {user , logOut} = useAuth();
    console.log('user',user);    

    const [isOpen, setIsOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [animate, setAnimate] = useState(false);

    const showMenu = () => {
         if(!user) {
            navigate("/sign-in")
        } else {
            setShowProfileMenu(prev => !prev);
        }        
    }
    
    useEffect(() => {
        const handleScroll = () => {
            // setIsScrolled(window.scrollY > 50);
            if (window.scrollY > 50) {
                setIsScrolled(true);
                setAnimate(true);
            } else {
                setIsScrolled(false);
                setAnimate(false);
            }
            
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);       
    },[]);

    // useEffect(() => {
    //     if(!user) {
    //         navigate("/sign-in")
    //     }
    // },[user])

    return(
        <header className={`max-w-screen-2xl sm:max-w-screen-xl sm:px-10 mx-auto w-full flex justify-between items-center p-4 tablet:p-2 bg-transparent text-white fixed top-0 z-[1] transition-all duration-300 ${isScrolled ? `bg-white shadow-md` : `bg-transparent`} ${animate ? `animate-slideDown` : ''}`}>
             <div className='hidden tablet:flex'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-amber-900'>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                </button>
            </div>
            <Link to="/" className='w-[95px] text-2xl text-black font-bold'>
                <img src="/images/logo-resized-modified.png" alt="logo" className='w-full'/>
            </Link>
           
            <nav className='flex text-2xl text-amber-950 font-semibold sm:text-xl tablet:hidden'>
                <ul className='flex gap-4 '>
                    <li className='mx-6'><a href="/" className='hover:underline'>Home</a></li>
                    <li className='mx-6'><a href="/recipe-listing" className='hover:underline'>Recipes</a></li>
                    <li className='mx-6'><a href="/home" className='hover:underline'>Add Recipe</a></li>                    
                </ul>
            </nav>
            <div className='w-auto relative'>
            <button className='text-2xl text-black font-bold' onClick={showMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#92400e" className="size-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>                             
            </button>
                {
                    (showProfileMenu && user) && 
                    (<div className={`flex w-28 h-auto flex-col items-center justify-center absolute bg-white p-1 shadow right-0 top-[50px]`}>
                        {user ? <p className='w-full font-sans  text-sm text-gray-900 border-b-2 py-2'>{user.username}</p> : <p></p>}
                        <button className='w-full font-sans font-normal text-sm text-gray-900 py-2' onClick={logOut}>Logout</button>
                    </div>
                    )
                }
            </div>
            
            {/* Mobile Menu */}

            {isOpen && (
                <div className="hidden tablet:flex absolute top-0 left-0 w-full  justify-center overflow-hidden z-40">
                    
                    <div
                    className={`w-full bg-white h-[350px] mobile:h-[250px] rounded-b-full shadow-md flex flex-col items-center pt-20 mobile:pt-6 px-4 space-y-4 transform ${isOpen ? `animate-slideDown`:`animate-slideUp`}`}
                    >
                        <button className='w-11 h-11 flex' onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#92400e" className="size-10">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg></button>
                    <a href="/home" onClick={() => setIsOpen(false)} className="text-amber-800 font-semibold">
                        Home
                    </a>
                    <a href="/recipes" onClick={() => setIsOpen(false)} className="text-amber-800 font-semibold">
                        Recipes
                    </a>
                    <a href="/add" onClick={() => setIsOpen(false)} className="text-amber-800 font-semibold">
                        Add Recipe
                    </a>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header;