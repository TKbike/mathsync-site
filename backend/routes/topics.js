const express = require('express');
const router = express.Router();

const topics = [
  { id: 1, title: 'Limits', difficulty: 'Medium' },
  { id: 2, title: 'Differential Equations', difficulty: 'Hard' },
  { id: 3, title: 'Laplace Transform', difficulty: 'Hard' },
  { id: 4, title: 'Probability', difficulty: 'Easy' }
];

router.get('/', (req, res) => {
  res.json(topics);
});

module.exports = router;
