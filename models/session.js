const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  weight: {
    type: Number
  },
  category: {
    type: String
  }
}, {
  timestamps: true,
});

const sessionSchema = new Schema({
  sessionName: {
    type: String,
    default: 'Workout Session'
  },
  exercise: [exerciseSchema]

}, {
  timestamps: true,
});

module.exports = mongoose.model('Session', sessionSchema);
