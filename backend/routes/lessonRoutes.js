const express = require('express');
const router = express.Router();
const {
  getLessons,
  createLesson
} = require('../controllers/lessonController');

router.get('/', getLessons);
router.post('/', createLesson);

module.exports = router;
