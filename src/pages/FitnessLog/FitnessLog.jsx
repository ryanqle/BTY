import React from 'react'
import PastExercise from '../../components/PastExercise/PastExercise'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { Link } from 'react-router-dom'
import Session from '../Session/Session'

export default function FitnessLog({user}) {
    const [fitnessLog, setFitnessLog] = useState({});


    useEffect(function() {
        async function getUserFitnessLog(){
            const userFitnessLog = await fitnessLogAPI.getFitnessLog(user._id);
            setFitnessLog(userFitnessLog);
        }
        getUserFitnessLog();
    }, []);

    return (
        <>
        <p>{fitnessLog.logName}</p>
        <button>Create New Workout</button>
        <Link to="/fitnesslog/exercise" className="button btn-sm">Create New Workout</Link>
        <Session />

        <div>If past workouts not empty, display past workouts below</div>
        <PastExercise />
        </>
    )
}
