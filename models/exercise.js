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
  
  exerciseSchema.virtual('exerciseName', {
    ref: 'Workout',
    localField: 'exercise',
    foreignField: '_id',
  });
  
  exerciseSchema.virtual('categoryName', {
    ref: 'Category',
    localField: 'category',
    foreignField: '_id',
  });


  module.exports = mongoose.model('Exercise', exerciseSchema);