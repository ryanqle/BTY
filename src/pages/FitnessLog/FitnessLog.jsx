import React from 'react'
import PastExercise from '../../components/PastExercise/PastExercise'

export default function FitnessLog() {
    return (
        <>
        <h1>My Workouts</h1>
        <button>Create New Workout</button>
        <div>If past workouts not empty, display past workouts below</div>
        <PastExercise />
        </>
    )
}
