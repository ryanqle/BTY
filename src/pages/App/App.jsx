import { useState } from 'react'
import '../App/App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import FitnessLog from '../FitnessLog/FitnessLog';
import Profile from '../Profile/Profile';


function App() {
  const [user, setUser] = useState(null);


  return (
   <>
   {user ? 
   <>
  <NavBar user={user} setUser={setUser}/>
   <Routes>
    <Route path="/fitnesslog" element={<FitnessLog user={user}/>}></Route>
    <Route path="/*" element={<Navigate to="/fitnesslog" />} />
   </Routes>
   </> : <>
   <h1>Welcome to BTY</h1>
   <div>
   Welcome to Better Than Yesterday, the ultimate fitness app that will help you become the best version of yourself! With a wide range of features, including personalized workout plans and progress monitoring, our app is designed to help you stay motivated and on track towards your goals.
   </div>
   <AuthPage setUser={setUser}/>
   </>
   } 
   </>
  )
}

export default App
