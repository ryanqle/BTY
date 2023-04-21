import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoVector.svg';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="BTY logo" className="mb-8" />
      <h1 className="text-4xl font-bold mb-8 text-blue-500 text-2xl">Welcome to BTY</h1>
      <div className="w-2/3 text-xl mb-8 text-center">
        Introducing our fitness tracker, <span className="font-bold text-blue-500">Better Than Yesterday</span>, designed to help you stay fit and healthy even while you're at your desk! With a variety of office-friendly exercises like seated leg raises, desk push-ups, and chair dips, this app makes it easy for users to incorporate physical activity into their workday. Say goodbye to sedentary habits and hello to a healthier, more active lifestyle with our desk-friendly fitness tracker.
      </div>
      <Link to="/authpage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GET STARTED</Link>
    </div>

  )
}
