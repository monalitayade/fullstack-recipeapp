export interface SignupData { 
  email: string;
  password: string;
  username:string,
}

export interface User{
    username:string,
    email:string,
    password:string,
    token?: string; 
}

export interface SignInData {
    email:string,
    password:string,
    // token?: string; 
}