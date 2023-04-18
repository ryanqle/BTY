import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to BTY</h1>
            <div>
                Welcome to Better Than Yesterday, the ultimate fitness app that will help you become the best version of yourself! With a wide range of features, including personalized workout plans and progress monitoring, our app is designed to help you stay motivated and on track towards your goals.
            </div>
            <Link to="/authpage" className="button btn-sm"><button>GET STARTED</button></Link>
        </div>
    )
}
