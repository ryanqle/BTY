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
        <Link to="/fitnesslog/sessionform" className="button btn-sm"><button>Create New Session</button></Link>

        <div>If past workouts not empty, display past workouts below</div>
        <PastExercise />
        </>
    )
}
