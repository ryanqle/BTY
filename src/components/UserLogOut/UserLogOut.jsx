import React from 'react'
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({user, setUser}) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }
  return (
    <div className="UserLogOut">
    <div>{user.name}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
  )
}
