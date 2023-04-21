import React from 'react';
import { Link } from 'react-router-dom';
import UserLogOut from '../UserLogOut/UserLogOut';

export default function NavBar({ user, setUser }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow-md py-4 px-8">
      {user ? (
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/">Home</Link>
            </span>
            <span className="text-xl font-bold text-blue-500 mx-4">|</span>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/workouts">Workout Descriptions</Link>
            </span>
            <span className="text-xl font-bold text-blue-500 mx-4">|</span>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/fitnesslog">Fitness Log</Link>
            </span>


          </div>
          <UserLogOut user={user} setUser={setUser} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/">Home</Link>
            </span>
            <span className="text-xl font-bold text-blue-500 mx-4">|</span>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/workouts">Workout Descriptions</Link>
            </span>
          </div>
          <div>
            <span className="text-xl font-bold text-blue-500">
              <Link to="/authpage">Log In</Link>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
