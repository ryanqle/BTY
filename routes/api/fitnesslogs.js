// routes/api/fitnesslogs.js

const express = require('express');
const router = express.Router();
const fitnessLogCtrl = require('../../controllers/api/fitnesslogs');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/fitnesslogs
router.get('/', ensureLoggedIn, fitnessLogCtrl.index)
router.get('/categories', ensureLoggedIn, fitnessLogCtrl.getCategory)
router.get('/workouts', ensureLoggedIn, fitnessLogCtrl.getWorkouts)
router.get('/:id/exercise', ensureLoggedIn, fitnessLogCtrl.getAllExercises)
router.get('/:id', ensureLoggedIn, fitnessLogCtrl.getSession)

// PUT /api/fitnesslogs
router.put('/', ensureLoggedIn, fitnessLogCtrl.updateLogName)

// POST /api/fitnesslogs
router.post('/session', ensureLoggedIn, fitnessLogCtrl.createSession)
router.post('/:id/end', ensureLoggedIn, fitnessLogCtrl.endWorkout)
router.post('/:id/exercise', ensureLoggedIn, fitnessLogCtrl.addExercise)


// DELETE /api/fitnesslogs
router.delete('/:id', ensureLoggedIn, fitnessLogCtrl.deleteSession)

module.exports = router;
