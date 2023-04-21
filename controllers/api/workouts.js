const Workout = require('../../models/workout')

module.exports = {
  getWorkouts
}

async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({}).populate('category')
    res.json(workouts)
  } catch (error) {
    console.log(error)
  }
}