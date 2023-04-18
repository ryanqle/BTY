const User = require('../../models/user')
const FitnessLog = require('../../models/fitnesslog')

module.exports = {
  index,
  createExercise
  }

  async function index(req,res){
    try{
    const user = await User.findById(req.query.userId)
    const fitnesslog = await FitnessLog.findOne({user: user._id});
    console.log(fitnesslog)
    res.json(fitnesslog)
    }
    catch (error){
      console.log(error)
    }
  }

  async function createExercise(req,res){
    try{
      const user = await User.findById(req.query.userId)
      const fitnesslog = await FitnessLog.findOne({user: user._id});
      console.log(fitnesslog)
      res.json(fitnesslog)
      }
      catch (error){
        console.log(error)
      }
  }