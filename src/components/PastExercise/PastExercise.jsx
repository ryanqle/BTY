import React from 'react'
import { useState, useEffect, useRef } from 'react';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function PastExercise({sessionId, user}) {

  const [session, setSession] = useState({})

  useEffect(function() {
    async function showSession(){
      const currentSession = await fitnessLogAPI.getSession(sessionId)
      setSession(currentSession);
    }
    showSession();
  },[])
  console.log(session)
  return (
    <>
    <div>{session.sessionName}</div>
    <div>{new Date(session.updatedAt).toLocaleDateString()}</div>
    </>
  )
}
