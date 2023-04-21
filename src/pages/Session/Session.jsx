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
    <div className="mb-4 pt-20 relative">
      {session && (
        <>
          <h1 className="pb-10 text-blue-500 text-2xl">{session.sessionName}</h1>
          {session.isEnded ? '' :
            <>
              {showAddExercise ?
                <ExerciseForm setShowAddExercise={setShowAddExercise} /> : ''
              }
              <div className="flex justify-between w-2/3 mx-auto">
                <div className="w-full flex justify-center pb-6">
                  <button className="w-1/8 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" onClick={handleAddWorkout}>ADD EXERCISE</button>
                </div>
                <div className="w-full flex justify-center pb-6">
                  <button className="w-1/8 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" onClick={handleEndWorkout}>END WORKOUT</button>
                </div>
              </div>
            </>
          }
          {session.exercise ?
            session.exercise.map((e) => (<Exercise key={e} exerciseId={e} />))
            :
            ''}



        </>
      )}
    </div>
  )
}
