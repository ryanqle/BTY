// routes/api/fitnesslogs.js

const express = require('express');
const router = express.Router();
const fitnessLogCtrl = require('../../controllers/api/fitnesslogs');

// GET /api/fitnesslogs
router.get('/', fitnessLogCtrl.index)
router.get('/:id', fitnessLogCtrl.showSession)

router.post('/session', fitnessLogCtrl.createSession)


module.exports = router;
