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
    <>
    <div>{session.sessionName}</div>
    <div>{new Date(session.updatedAt).toLocaleDateString()}</div>
    <button onClick={handleView}>VIEW</button>
    <button onClick={handleDelete}>DELETE</button>
    </>
  )
}
