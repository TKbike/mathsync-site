const Lesson = require('../models/Lesson');

// GET all lessons
exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// POST a new lesson
exports.createLesson = async (req, res) => {
  try {
    const newLesson = new Lesson(req.body);
    const saved = await newLesson.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid Data' });
  }
};
