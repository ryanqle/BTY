const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessLogSchema = new Schema({
    logName: {
        type: String,
        default: 'My Fitness Log'
    },
    session: [{
        type: mongoose.Types.ObjectId,
        ref: 'Session'
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
});


module.exports = mongoose.model('FitnessLog', fitnessLogSchema);
