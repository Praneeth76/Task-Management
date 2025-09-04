const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.get('/mentors', mentorController.getAllMentors);
router.post('/mentors', mentorController.createMentor);


module.exports = router;
