import React from 'react'
import Exercise from '../../components/Exercise/Exercise'
import ExerciseForm from '../../components/ExerciseForm/ExerciseForm'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';
import { useNavigate } from 'react-router-dom';

export default function Session({ user }) {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [showAddExercise, setShowAddExercise] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getSessionData() {
      const sessionData = await fitnessLogAPI.getSession(id);
      setSession(sessionData);
    }
    getSessionData();
  }, [showAddExercise]);

  async function handleEndWorkout() {
    await fitnessLogAPI.endWorkout(id);
    navigate(`/fitnesslog`)
  }

  async function handleAddWorkout() {
    setShowAddExercise(true);
  }

  return (
    <>
      {session && (
        <>
          <p>{session.sessionName}</p>
          {session.exercise ?
            session.exercise.map((e) => (<Exercise key={e} exerciseId={e} />))
            :
            ''}
          {session.isEnded ? '' :
            <>
              {showAddExercise ?
                <ExerciseForm setShowAddExercise={setShowAddExercise} /> : ''
              }
              <button onClick={handleAddWorkout}>ADD EXERCISE</button>
              <button onClick={handleEndWorkout}>END WORKOUT</button>
            </>
          }


        </>
      )}
    </>
  )
}
