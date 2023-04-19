import React from 'react'
import Exercise from '../../components/Exercise/Exercise'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { useNavigate } from 'react-router-dom';

export default function Session({user}) {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getSessionData() {
      const sessionData = await fitnessLogAPI.getSession(id);
      setSession(sessionData);
    }
    getSessionData();
  }, []);

  async function handleEndWorkout(){
    await fitnessLogAPI.endWorkout(id);
    navigate(`/fitnesslog`)
  }
  console.log(session)
  console.log(id)

  return (
    <>
      {session && (
        <>
          <p>{session.sessionName}</p>
          {session.isEnded ? '' :
          <button onClick={handleEndWorkout}>STOP</button>
}
          <Exercise />

        </>
      )}
    </>
  )
}
