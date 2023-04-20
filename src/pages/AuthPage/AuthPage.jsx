import React from 'react'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ?
        <div className="flex justify-center items-center h-screen">
          <div>
            <LoginForm setUser={setUser} />
            <p>Don't have an account? <span className='text-blue-500' onClick={() => setShowLogin(!showLogin)}>Sign Up</span></p>
          </div>
        </div>
        :
        <div className="flex justify-center items-center h-screen">
          <div>
            <SignUpForm setUser={setUser} />
            <p>Already have an account? <span className='text-blue-500' onClick={() => setShowLogin(!showLogin)}>Login</span></p>
          </div>
        </div>
      }
    </div>

  )
}
