import React from 'react'
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({user, setUser}) {
    function handleLogOut() {
        logOut();
        setUser(null);
    }
  return (
    <div className="UserLogOut flex items-center">
    <div className="mr-4 font-bold text-gray-800">{user.name}</div>
    <button className="font-bold text-blue-500 btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
  )
}
