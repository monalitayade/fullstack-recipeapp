import React, { createContext, useContext, useState, useEffect } from 'react';
import {signInUser, signUpUser } from '../api/authApi';
import {User,SignupData, SignInData} from "../types/user.d";


interface AuthContextType{
    user:User|null;
    signUp:(data:SignupData) => Promise<void>;
    signIn:(data:SignInData) => Promise<void>;
    logOut:()=> void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [user,setUser] = useState<User | null>(null);

    useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
    
    const signUp = async(data: SignupData) => {
        try{
            const response = await signUpUser(data);
            setUser(response?.user);
            localStorage.setItem('token',response?.token);
        } catch(err){
            throw err;
        }
    }

    const signIn = async(data: SignInData) => {
        try{
            const response = await signInUser(data);
            setUser(response?.user);
            localStorage.setItem('token',response?.token);
            localStorage.setItem("user", JSON.stringify(response.user));
        } catch(err){
            throw err;
        }
    }

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return(
        <AuthContext.Provider value={{user, signUp, logOut,signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if(!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}