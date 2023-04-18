import React from 'react'
import PastExercise from '../../components/PastExercise/PastExercise'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function FitnessLog({user}) {
    //use state
    //spread operator show map of past exericises
    const [fitnessLog, setFitnessLog] = useState({});

    useEffect(function() {
        async function getUserFitnessLog(){
            const userFitnessLog = await fitnessLogAPI.getFitnessLog(user._id);
            setFitnessLog(userFitnessLog);
        }
        getUserFitnessLog();
    }, []);
    console.log(fitnessLog)

    return (
        <>
        <p>{user._id}</p>
        <p>{fitnessLog.logName}</p>
        <h1>My Workouts</h1>
        <button>Create New Workout</button>
        <div>If past workouts not empty, display past workouts below</div>
        <PastExercise />
        </>
    )
}
