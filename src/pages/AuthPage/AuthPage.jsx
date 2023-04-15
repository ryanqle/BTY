import React from 'react'
import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
    {showLogin ? 
    <div><LoginForm setUser={setUser}/><p>Don't have an account? <span onClick={() => setShowLogin(!showLogin)}>Sign Up</span></p>
    </div> 
    : 
    <div><SignUpForm setUser={setUser}/><p>Already have an account? <span onClick={() => setShowLogin(!showLogin)}>Login</span></p>
    </div>}
    </div>
  )
}
