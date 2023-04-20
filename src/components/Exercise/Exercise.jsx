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
      {exercise && exercise.exerciseName ?
        <div className="border border-gray-400  rounded p-4 flex justify-between flex-wrap w-full">
          <p>{exercise.exerciseName[0].exerciseName}</p>
          <p>{exercise.categoryName[0].categoryName}</p>
          <p>Sets: {exercise.sets}</p>
          <p>Reps: {exercise.reps}</p>
        </div>
        :
        ''}

    </div>
  )
}
