import { useState } from 'react'
import '../App/App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import FitnessLog from '../FitnessLog/FitnessLog';
import Profile from '../Profile/Profile';


function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false)


  return (
   <>
   <NavBar user={user} setUser={setUser}/>
   {user ? 
   <>
   <Routes>
    <Route path="/" element={<FitnessLog />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
   </Routes>
   </> : <>
   <h1>Welcome to BTY</h1>
   <div>
   Welcome to Better Than Yesterday, the ultimate fitness app that will help you become the best version of yourself! With a wide range of features, including personalized workout plans and progress monitoring, our app is designed to help you stay motivated and on track towards your goals.
   </div>
   <button onClick={() => setShowAuth(!showLogin)}>Get Started</button>
   <AuthPage setUser={setUser}/>
   </>
   } 
   </>
  )
}

export default App
