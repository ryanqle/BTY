const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    sessionName: {
        type: String,
        default: 'Workout Session'
    },
    exercise: [{
        type: mongoose.Types.ObjectId,
        ref: 'Exercise'
    }]

}, {
    timestamps: true,
});


module.exports = mongoose.model('Session', sessionSchema);
