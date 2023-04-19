import React from 'react'
import Exercise from '../../components/Exercise/Exercise'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function Session({user}) {
  const [session, setSession] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getSessionData() {
      const sessionData = await fitnessLogAPI.getSession(id);
      setSession(sessionData);
    }
    getSessionData();
  }, []);

  return (
    <>
      {session && (
        <>
          <p>{session.sessionName}</p>
          <button>START/STOP</button>
          <Exercise />
        </>
      )}
    </>
  )
}
