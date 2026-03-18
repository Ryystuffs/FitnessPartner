import React from 'react'
import { useState } from 'react'
import { API_URL } from '../config'
const LoginForm = () => {
  const initialState = {
    credentials: "",
    password: "",
  }
 
  const [isSubmitting ,setIsSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);
  const resetForm = () => {
    setForm((prev)=>({
      ...prev,
      password: ""
    }));
  }
  const handleChange = (e) => {
    setForm((prev) =>({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/login`, {
      method: "POST" ,
      body: JSON.stringify(form),
      headers:{
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    if (response.status === 200){
      console.log(json.message);
    }else{
      console.error(json.error);
    }
    resetForm();
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsSubmitting(false);
    }
}
  return (
    <div>
        <div>Login</div>
        <div>
            <form>
                <input type="text" placeholder='email or username' name='credentials' onChange={handleChange} value={form.credentials}/>
                <input type="password" placeholder='password' name='password' onChange={handleChange} value={form.password}/>
                <button onClick={handleSubmit} disabled={isSubmitting}> {isSubmitting ? "Logging in" : "Log in"}</button>
            </form>
        </div>

    </div>
    
  )
}

export default LoginForm