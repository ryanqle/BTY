const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exerciseName: {
        type: String
    },
    description: {
      type: String
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    }
  }, {
    timestamps: true,
  });
  
  module.exports = mongoose.model('Workout', workoutSchema);