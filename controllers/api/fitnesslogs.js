const User = require('../../models/user')
const FitnessLog = require('../../models/fitnesslog')
const Session = require('../../models/session')

module.exports = {
  index,
  createSession,
  showSession
  }

  async function index(req,res){
    try{
    const user = await User.findById(req.query.userId)
    const fitnesslog = await FitnessLog.findOne({user: user._id});
    res.json(fitnesslog)
    }
    catch (error){
      console.log(error)
    }
  }

  async function createSession(req,res){
    try{
      const user = await User.findById(req.query.userId)
      const fitnesslog = await FitnessLog.findOne({user: user._id});
      const session = await Session.create({sessionName: req.body.sessionName});
      fitnesslog.session.push(session._id)
      await fitnesslog.save()
      res.json(session)
      }
      catch (error){
        console.log(error)
      }
  }

  async function showSession(req,res){
    
  }