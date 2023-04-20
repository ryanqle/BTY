const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exercise: {
        type: mongoose.Types.ObjectId,
        ref: "Workout"
    },
    sets: {
      type: Number
    },
    reps: {
      type: Number
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
  }, {
    timestamps: true,
  });
  
  module.exports = mongoose.model('Exercise', exerciseSchema);