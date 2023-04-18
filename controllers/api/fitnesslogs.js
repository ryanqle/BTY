const User = require('../../models/user')
const FitnessLog = require('../../models/fitnesslog')

module.exports = {
  index
  }

  async function index(req,res){
    try{
    const user = await User.findById(req.query.userId)
    const fitnesslog = await FitnessLog.find({user: user._id});
    res.json(fitnesslog)
    }
    catch (error){
      console.log(error)
    }
  }