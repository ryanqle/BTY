import React from 'react'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { useNavigate } from 'react-router-dom';

export default function PastExercise({sessionId, setUpdateLog}) {
  const navigate = useNavigate();
  const [session, setSession] = useState({})

  useEffect(function() {
    async function showSession(){
      const currentSession = await fitnessLogAPI.getSession(sessionId)
      setSession(currentSession);
    }
    showSession();
  },[])

function handleView() {
    try {
        navigate(`/fitnesslog/${session._id}`);
    } catch {
    }
  }

  async function handleDelete() {
    try {
        await fitnessLogAPI.deleteSession(sessionId)
        setUpdateLog(true)
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className='pb-2 mx-auto w-2/3'>
<div className="border border-gray-400  rounded p-4 flex justify-between flex-wrap w-full">
  <div className="flex justify-center items-center">
  <div className="flex-shrink mr-10">{new Date(session.updatedAt).toLocaleDateString()}</div>
    <div className="flex-shrink mr-10">{session.sessionName}</div>
  </div>
  <div className="flex justify-center items-center">
    <button className="mx-2 font-bold text-blue-500 btn-sm" onClick={handleView}>VIEW</button>
    <button className="mx-2 font-bold text-red-500 btn-sm" onClick={handleDelete}>DELETE</button>
  </div>
</div>
</div>
  )
}
