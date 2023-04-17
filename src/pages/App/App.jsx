import { useState } from 'react'
import '../App/App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';


function App() {
  const [user, setUser] = useState(null);
  return (
   <>
   <NavBar user={user} setUser={setUser}/>
   <h1>Welcome to BTY</h1>
   <div>
   Welcome to Better Than Yesterday, the ultimate fitness app that will help you become the best version of yourself! With a wide range of features, including personalized workout plans and progress monitoring, our app is designed to help you stay motivated and on track towards your goals.
   </div>
   <button>Get Started</button>
   {user ? 
   <>
   </> : <AuthPage setUser={setUser}/>
   } 
   </>
  )
}

export default App
