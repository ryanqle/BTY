// routes/api/fitnesslogs.js

const express = require('express');
const router = express.Router();
const fitnessLogCtrl = require('../../controllers/api/fitnesslogs');

// GET /api/fitnesslogs
router.get('/', fitnessLogCtrl.index)


module.exports = router;
