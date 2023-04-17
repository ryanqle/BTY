const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const FitnessLog = require('../../models/fitnesslog')

module.exports = {
  create,
  login
}

async function create(req, res){
  try {
    const user = await User.create(req.body)
    const fitnessLog = await FitnessLog.create({ user: req.body._id })
    user.fitnessLog = fitnessLog._id
    await user.save();
    const token = createJWT(user)
    res.json(token)
  } catch (error) {
    res.status(400).json(error)
  }
}

function createJWT(user){
  return jwt.sign(
    {user},
    process.env.SECRET,
    { expiresIn: '24hr'}
  )
}

async function login(req,res){
  try{
    const user = await User.findOne({email: req.body.email})
    if(!user){
      throw new Error('User not found');
    }
    const match = await bcrypt.compare(req.body.password, user.password)
    if(match){
      const token = createJWT(user)
      res.json(token)
    } else {
      throw new Error('Password does not match');
    }

  } catch (error) {
    res.status(400).json({error: error.message})
  }
}