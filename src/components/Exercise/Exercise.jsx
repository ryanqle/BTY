import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function Exercise({exerciseId}) {
  const { id } = useParams();
  const [exercise, setExercise] = useState({})


  useEffect(() => {
    async function getExercises() {
      const fetchedExercise = await fitnessLogAPI.getExercise(id, exerciseId);
      setExercise(fetchedExercise)
    }
    getExercises()
  }, [])
  console.log(exercise)
  return (
    <div>
      {exercise && exercise.exerciseName ? 
      <div>
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
