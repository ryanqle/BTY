import React from 'react'
import WorkoutCard from '../../components/WorkoutCard/WorkoutCard'
import * as workoutsAPI from '../../utilities/workouts-api';
import { useState, useEffect, useRef } from 'react';

export default function DescriptionPage() {

    const [workouts, setWorkouts] = useState([])

    useEffect(function () {
        async function getAllWorkouts() {
            const workoutsList = await workoutsAPI.getWorkouts();
            const sortedWorkouts = workoutsList.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
            setWorkouts(sortedWorkouts)
        }
        getAllWorkouts()

    }, [])

    return (
        <>
            <div className="text-blue-500 text-2xl pt-20">Workout Details</div>
            <div className="flex flex-wrap justify-evenly pt-10">
                {workouts.map(workout => (
                    <WorkoutCard key={workout._id} workout={workout} />
                ))}
            </div>
        </>
    )
}
