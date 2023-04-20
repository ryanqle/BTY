const User = require('../../models/user')
const FitnessLog = require('../../models/fitnesslog')
const Session = require('../../models/session')
const Category = require('../../models/category')
const Workout = require('../../models/workout')
const Exercise = require('../../models/exercise')

module.exports = {
  index,
  createSession,
  getSession,
  endWorkout,
  getCategory,
  getWorkouts,
  addExercise,
  getAllExercises,
  deleteSession
}

async function index(req, res) {
  try {
    const user = await User.findById(req.query.userId)
    const fitnesslog = await FitnessLog.findOne({ user: user._id });
    res.json(fitnesslog)
  }
  catch (error) {
    console.log(error)
  }
}

async function createSession(req, res) {
  try {
    const user = await User.findById(req.query.userId)
    const fitnesslog = await FitnessLog.findOne({ user: user._id });
    const session = await Session.create({ sessionName: req.body.sessionName });
    fitnesslog.session.push(session)
    await fitnesslog.save()
    res.json(session)
  }
  catch (error) {
    console.log(error)
  }
}

async function getSession(req, res) {
  try {
    const session = await Session.findById(req.params.id);
    res.json(session);
  } catch (error) {
    console.log(error)
  }

}

async function endWorkout(req, res) {
  const session = await Session.findById(req.params.id);
  session.isEnded = true;
  await session.save();
  res.json(session)
}

async function getCategory(req, res) {
  try {
    const categories = await Category.find({}).sort({ sortOrder: 1 })
    res.json(categories)
  } catch (error) {
    console.log(error)
  }
}

async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({ category: req.query.category })
    res.json(workouts)
  } catch (error) {
    console.log(error)
  }
}

async function addExercise(req, res) {

  try {
    const session = await Session.findById(req.params.id);
    const newExercise = await Exercise.create(req.body)
    newExercise.session = session._id;
    await newExercise.save();
    session.exercise.push(newExercise)
    await session.save()
    res.json(session)
  } catch (error) {
    console.log(error)
  }
}

async function getAllExercises(req,res){
  try {
    const exercise = await Exercise.findById(req.query.exercise).populate('exerciseName')
    .populate('categoryName')
    .exec();
    res.json(exercise.toObject({ virtuals: true }));
  } catch (error) {
    console.log(error)
  }
}

async function deleteSession(req,res){
  try {
    const sessionId = req.params.id;
    const session = await Session.findById(sessionId);
    await Exercise.deleteMany({session: sessionId})
    await Session.deleteOne({_id: sessionId})
    await FitnessLog.updateOne({ "session": { "$in": [sessionId] } }, { "$pull": { "session": sessionId } });
    res.json(session)
  } catch (error) {
    console.log(error)
  }
}