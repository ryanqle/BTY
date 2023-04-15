const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
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


module.exports = mongoose.model('Exercise', exerciseSchema);
