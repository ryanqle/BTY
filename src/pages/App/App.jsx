import { useState } from 'react'
import '../App/App.css'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import FitnessLog from '../FitnessLog/FitnessLog';
import Profile from '../Profile/Profile';
import HomePage from '../HomePage/HomePage';
import Session from '../Session/Session';
import SessionForm from '../../components/SessionForm/SessionForm'
import DescriptionPage from '../DescriptionPage/DescriptionPage';


function App() {
  const [user, setUser] = useState(null);


  return (
   <>
   {user ? 
   <>
  <NavBar user={user} setUser={setUser}/>
   <Routes>
    <Route path="/fitnesslog" element={<FitnessLog user={user}/>}></Route>
    <Route path="/fitnesslog/sessionform" element={<SessionForm user={user}/>}></Route>
    <Route path="/fitnesslog/:id" element={<Session user={user}/>}></Route>
    <Route path="/*" element={<Navigate to="/fitnesslog" />} />
   </Routes>
   </> : <>
   <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/workout" element={<DescriptionPage />}></Route>
    <Route path="/authpage" element={<AuthPage setUser={setUser}/>}></Route>
    <Route path="/*" element={<Navigate to="/" />} />
   </Routes>
   
   </>
   } 
   </>
  )
}

export default App
