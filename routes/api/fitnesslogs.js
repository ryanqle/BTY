// routes/api/fitnesslogs.js

const express = require('express');
const router = express.Router();
const fitnessLogCtrl = require('../../controllers/api/fitnesslogs');

// GET /api/fitnesslogs
router.get('/', fitnessLogCtrl.index)
router.get('/categories', fitnessLogCtrl.getCategory)
router.get('/workouts', fitnessLogCtrl.getWorkouts)
router.get('/:id/exercise', fitnessLogCtrl.getAllExercises)
router.get('/:id', fitnessLogCtrl.getSession)

// POST /api/fitnesslogs
router.post('/session', fitnessLogCtrl.createSession)
router.post('/:id/end', fitnessLogCtrl.endWorkout)
router.post('/:id/exercise', fitnessLogCtrl.addExercise)

// DELETE /api/fitnesslogs
router.delete('/:id', fitnessLogCtrl.deleteSession)

module.exports = router;
