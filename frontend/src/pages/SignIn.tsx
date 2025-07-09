import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const SignIn:React.FC = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',            
        pwd:''           
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
    }

     const handleSubmit = async(e:React.FormEvent) => {
            e.preventDefault();
            
            try{
                await signIn({
                    email:formData.email,                   
                    password:formData.pwd
                });
                alert("Login successful");
                navigate('/');
            } catch(err:any){
                console.log(err);
                alert("Login Failed");
            }
        };

    return(
        <div className='flex w-full h-[100vh] justify-center items-center bg-slate-100'>
            <div className='w-1/3 bg-slate-50 flex flex-col shadow-lg p-3'>
                <div className='text-lg font-semibold text-center font-sans text-amber-700'>Sign In</div>
                <form className='flex w-full flex-col' onSubmit={handleSubmit}>
                    
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                           Email
                        </label>
                        <input type='text' name="email" placeholder='username' value={formData?.email} className='w-flex border rounded-md  p-2' onChange={handleChange}/>
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                            Password
                        </label>
                        <input type='password' name="pwd" placeholder='password' value={formData?.pwd} className='w-flex border rounded-md  p-2' onChange={handleChange}/>
                    </div>
                                     
                    <div className='flex flex-col my-2'>
                        <button className='w-full bg-amber-800 text-white py-2 rounded-md cursor-pointer'>Sign In</button>
                    </div>
                    <div className='flex flex-col font-sans text-sm my-2'>
                        <span>Don't have an Account?<Link to="/sign-up" className='w-auto text-amber-800 mx-1 border-b-2 border-amber-800'>SignUp</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;