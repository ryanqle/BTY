import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
<div className="mt-16 bg-gray-100 py-12 px-8">
    <h1 className="text-4xl font-bold mb-8">Welcome to BTY</h1>
    <div className="text-xl mb-8">
      Welcome to Better Than Yesterday, the ultimate fitness app that will help you become the best version of yourself! With a wide range of features, including personalized workout plans and progress monitoring, our app is designed to help you stay motivated and on track towards your goals.
    </div>
    <Link to="/authpage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">GET STARTED</Link>
  </div>
    )
}
