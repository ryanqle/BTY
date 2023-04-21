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

  workoutSchema.virtual('categoryName', {
    ref: 'Category',
    localField: 'category',
    foreignField: '_id',
  });
  
  module.exports = mongoose.model('Workout', workoutSchema);

