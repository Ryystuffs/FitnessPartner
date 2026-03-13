import React from 'react'

const SignupForm = () => {
  return (
    <div>
        <div>
            Signup
        </div>

        <form>
            <input type="username" placeholder='username' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <input type="confirmPassword" placeholder='confirm password' />
        </form>
    </div>
  )
}

export default SignupForm