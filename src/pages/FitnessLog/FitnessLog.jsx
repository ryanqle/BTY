import React from 'react'
import PastExercise from '../../components/PastExercise/PastExercise'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { Link } from 'react-router-dom'
import Session from '../Session/Session'

export default function FitnessLog({user}) {
    const [fitnessLog, setFitnessLog] = useState({});
    const [updateLog, setUpdateLog] = useState(false)
    const [editMode, setEditMode] = useState(false);
  const [newLogName, setNewLogName] = useState('');

    useEffect(function() {
        async function getUserFitnessLog(){
            const userFitnessLog = await fitnessLogAPI.getFitnessLog(user._id);
            setFitnessLog(userFitnessLog);
        }
        getUserFitnessLog();
        setUpdateLog(false)
    }, [updateLog]);

    const handleLogNameChange = (event) => {
        setNewLogName(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const updatedFitnessLog = { ...fitnessLog, logName: newLogName };
        await fitnessLogAPI.updateFitnessLog(updatedFitnessLog, user._id);
        setFitnessLog(updatedFitnessLog);
        setEditMode(false);
      };

    return (
        <>
        <div>
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input type="text" value={newLogName} onChange={handleLogNameChange} />
            <button type="submit">Save</button>
          </form>
        ) : (
          <p onDoubleClick={() => setEditMode(true)}>{fitnessLog.logName}</p>
        )}
      </div>
        <Link to="/fitnesslog/sessionform" className="button btn-sm"><button>Create New Session</button></Link>
        {fitnessLog.session ? 
        fitnessLog.session.map((s) => (<PastExercise key={s} setUpdateLog={setUpdateLog} sessionId={s} user={user}/>))
        :
         ''}
        </>
    )
}
