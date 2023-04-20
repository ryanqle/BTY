import React from 'react'
import PastExercise from '../../components/PastExercise/PastExercise'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { Link } from 'react-router-dom'

export default function FitnessLog({ user }) {
  const [fitnessLog, setFitnessLog] = useState({});
  const [updateLog, setUpdateLog] = useState(false)
  const [editMode, setEditMode] = useState(false);
  const [newLogName, setNewLogName] = useState('');

  useEffect(function () {
    async function getUserFitnessLog() {
      const userFitnessLog = await fitnessLogAPI.getFitnessLog(user._id);
      userFitnessLog.session.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setFitnessLog({ ...userFitnessLog, session: userFitnessLog.session.reverse() });
    }
    getUserFitnessLog();
    setUpdateLog(false)
  }, [updateLog]);

  function handleLogNameChange(evt) {
    setNewLogName(evt.target.value);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedFitnessLog = { ...fitnessLog, logName: newLogName };
    await fitnessLogAPI.updateFitnessLog(updatedFitnessLog, user._id);
    setFitnessLog(updatedFitnessLog);
    setEditMode(false);
  };

  return (
    <>
      <div className="mb-4 pt-16">
        {editMode ? (
          <form onSubmit={handleSubmit}>
            <input className="border border-blue-500 text-blue-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700" type="text" value={newLogName} onChange={handleLogNameChange} />
            <button className="m1-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
          </form>
        ) : (
          <h1 className="text-blue-500 text-2xl" onDoubleClick={() => setEditMode(true)}>{fitnessLog.logName}</h1>
        )}
      </div>
      <Link to="/fitnesslog/sessionform" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><button>Create New Session</button></Link>

      <div className='pt-10'>
        {fitnessLog.session ?
          fitnessLog.session.map((s) => (<PastExercise key={s} setUpdateLog={setUpdateLog} sessionId={s} user={user} />))
          :
          'No Past Exercises Logged'}
      </div>
    </>
  )
}
