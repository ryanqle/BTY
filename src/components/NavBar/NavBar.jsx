import React from 'react'
import { Link } from 'react-router-dom'
import UserLogOut from '../UserLogOut/UserLogOut'

export default function NavBar({user, setUser}) {
    return (
      <nav>
        <span><Link to="/">Home</Link></span>
        &nbsp; | &nbsp;
        <span><Link to="/fitnesslog">Fitness Log</Link></span>
        {user ? 
        <UserLogOut user={user} setUser={setUser}/>
        :
        <></>
        }
      </nav>
    )
  }