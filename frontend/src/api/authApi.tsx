
import { SignupData, User, SignInData} from "../types/user.d";
interface SignupResponse {
  user: User;
  token: string;
  message: string;
}

export async function signUpUser(data: SignupData):Promise<SignupResponse>{
   
    const res = await fetch(`http://localhost:5000/api/auth/signup`,{
        method:'POST',
        headers:{ 'content-type' :'application/json'},
        body:JSON.stringify(data)
    });

    if(!res.ok){ const error = await res.json(); throw new Error('Failed to create user.');}

    return res.json();
}

export async function signInUser(data: SignInData): Promise<SignupResponse> {
  const res = await fetch(`http://localhost:5000/api/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await res.json();

  if (!res.ok) {
    // const error = await res.json();
    console.error("Server Error Response:", result);
    throw new Error(result?.message || 'Unable to login');
  }

  return result;
}
