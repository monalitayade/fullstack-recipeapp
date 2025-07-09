import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";

const SignUp:React.FC = () => {
    const {signUp} = useAuth();
    const [formData, setFormData] = useState({
        email:'',
        uname:'',
        pwd:'',
        cpwd:''
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
    }

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        if(formData.pwd != formData.cpwd) {
            alert('Password do not match');
            return;
        }

        try{
            await signUp({
                email:formData.email,
                username:formData.uname,
                password:formData.pwd
            });
            alert("sign up successful");

        } catch(err){
            console.log(err);
            alert("signUp Failed");
        }
    };
    return(
        <div className='flex w-full h-[100vh] justify-center items-center bg-slate-100'>
            <div className='w-1/3 bg-slate-50 flex flex-col shadow-lg p-3'>
                <div className='text-lg font-semibold text-center font-sans text-amber-700'>Sign Up</div>
                <form className='flex w-full flex-col' onSubmit={handleSubmit}>
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                            Email
                        </label>
                        <input type='email' name="email" placeholder='email' className='w-flex border rounded-md  p-2'
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                            Username
                        </label>
                        <input type='text' name="uname" placeholder='username' className='w-flex border rounded-md  p-2'
                        value={formData.uname}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                            Password
                        </label>
                        <input type='password' name="pwd" placeholder='password' className='w-flex border rounded-md  p-2'
                        value={formData.pwd}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col mb-2'>
                        <label className='flex w-auto text-sm font-semibold text-center font-sans text-amber-700 mb-2'>
                            Confirm Password
                        </label>
                        <input type='password' name="cpwd" placeholder='confirm password' className='w-flex border rounded-md  p-2'
                        value={formData.cpwd}
                        onChange={handleChange}
                        />
                    </div>                    
                    <div className='flex flex-col my-2'>
                        <button className='w-full bg-amber-800 text-white py-2 rounded-md cursor-pointer'>Sign Up</button>
                    </div>
                    <div className='flex flex-col font-sans text-sm my-2'>
                        <span>Already have an Account?<Link to="/sign-in" className='w-auto text-amber-800 mx-1 border-b-2 border-amber-800'>SignIn</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;