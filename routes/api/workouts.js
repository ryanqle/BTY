// routes/api/workouts.js

const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');


// GET /api/fitnesslogs
router.get('/workouts',  workoutsCtrl.getWorkouts)


module.exports = router;
