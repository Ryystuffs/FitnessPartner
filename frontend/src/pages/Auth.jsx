import React from 'react'
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { useState } from 'react';
const Auth = () => {
    const [form, setForm] = useState('login');
  return (
    <div>
        <div>Welcome</div>
        <div>
            <div role='button' onClick={(e)=> setForm('login')} className={`${form === 'login' ? 'bg-red-600' : 'none' }`}>Login</div>
            <div role='button' onClick={(e)=> setForm('signup')} className={`${form === 'signup' ? 'bg-red-600' : 'none' }`}>Signup</div>
        </div>

        <div>
            {form === 'login' ? (<LoginForm/>): (<SignupForm/>)}
        </div>
    </div>
  )
}

export default Auth