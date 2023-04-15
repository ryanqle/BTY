import { useState } from 'react'
import '../App/App.css'
import AuthPage from '../AuthPage/AuthPage'


function App() {
  const [user, setUser] = useState(null);
  return (
   <>
   {user ? <>
   
   </> : <AuthPage setUser={setUser}/>
   } 
   </>
  )
}

export default App
