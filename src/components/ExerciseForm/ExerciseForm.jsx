import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function ExerciseForm({ setShowAddExercise }) {
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const { id } = useParams();

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [workout, setWorkout] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      const fetchedCategories = await fitnessLogAPI.getCategories();
      setCategories(fetchedCategories);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchWorkout() {
      const fetchedWorkouts = await fitnessLogAPI.getWorkouts(selectedCategory);
      setWorkout(fetchedWorkouts);
    }
    if (selectedCategory) {
      fetchWorkout();
    }
  }, [selectedCategory]);

  function handleCategoryChange(evt) {
    setSelectedCategory(evt.target.value);
    setSelectedWorkout('');
  }

  function handleWorkoutChange(evt) {
    setSelectedWorkout(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const formData = {
        exercise: selectedWorkout,
        sets: sets,
        reps: reps,
        category: selectedCategory
      }
      await fitnessLogAPI.addExercise(id, formData);
      setShowAddExercise(false);
  } catch (error){
    console.log(error)
  }
  }

  return (
    <>
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handleSubmit}>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Select a category:</label>
          <select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category._id} value={category._id}>{category.categoryName}</option>
            ))}
          </select>

          {selectedCategory && (
            <div>
              <label className='pt-4 block text-gray-700 text-sm font-bold mb-2'>Select a workout:</label>
              <select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' id="workout" value={selectedWorkout} onChange={handleWorkoutChange}>
                <option value="">Select a workout</option>
                {workout.map(w => (
                  <option key={w._id} value={w._id}>{w.exerciseName}</option>
                ))}
              </select>
            </div>
          )}
          <label className='pt-4 block text-gray-700 text-sm font-bold mb-2'>Sets:</label>
          <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="number" value={sets} onChange={(evt) => setSets(evt.target.value)} />
          <label className='pt-4 block text-gray-700 text-sm font-bold mb-2'>Reps:</label>
          <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="number" value={reps} onChange={(evt) => setReps(evt.target.value)} />
          <div className="flex justify-between pt-4">
          <button className="w-1/4 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" type="submit">+</button>
          <button className="w-1/4 bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"type="button" onClick={() => setShowAddExercise(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
