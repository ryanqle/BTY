import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function Exercise({ exerciseId }) {
  const { id } = useParams();
  const [exercise, setExercise] = useState({})

  useEffect(() => {
    async function getExercises() {
      const fetchedExercise = await fitnessLogAPI.getExercise(id, exerciseId);
      setExercise(fetchedExercise)
    }
    getExercises()
  }, [])

  return (
    <div className='pb-2 mx-auto w-2/3'>
      {exercise && exercise.exercise ?
        <div className="border border-gray-400  rounded p-4 flex justify-evenly flex-wrap w-full">
          <p className="w-1/4">{exercise.exercise.exerciseName}</p>
          <p className="w-1/4">{exercise.category.categoryName}</p>
          <p className="w-1/4">Sets: {exercise.sets}</p>
          <p className="w-1/4">Reps: {exercise.reps}</p>
        </div>
        :
        'No Workouts Done'}

    </div>
  )
}
