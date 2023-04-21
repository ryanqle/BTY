import React from 'react'

export default function WorkoutCard({workout}) {

  return (
    <div className="w-1/4 mx-2 mb-4">
      <div className="bg-white rounded-lg border border-gray-300 p-6 flex flex-col h-full">
        <div className="text-center mb-4 pb-4 border-b border-gray-300">
          <div className="text-blue-900 text-lg font-medium">{workout.exerciseName}</div>
          <div className="text-sm font-medium text-gray-500">{workout.category.categoryName}</div>
        </div>
        <div className="flex-grow">
          <div className="text-gray-600">{workout.description}</div>
        </div>
      </div>
    </div>
  )
}
