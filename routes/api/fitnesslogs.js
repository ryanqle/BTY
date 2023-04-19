// routes/api/fitnesslogs.js

const express = require('express');
const router = express.Router();
const fitnessLogCtrl = require('../../controllers/api/fitnesslogs');

// GET /api/fitnesslogs
router.get('/', fitnessLogCtrl.index)
router.get('/:id', fitnessLogCtrl.getSession)

router.post('/session', fitnessLogCtrl.createSession)
router.post('/:id/end', fitnessLogCtrl.endWorkout)


module.exports = router;
