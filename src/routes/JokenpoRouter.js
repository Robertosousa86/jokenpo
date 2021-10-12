const express = require('express');
const router = express.Router();
const JokenpoService = require('../controller/JokenpoService');

router.get('/', (req, res) => {
  res.send('JOKENPO!');
});

router.post('/', (req, res) => {
  const { key } = req.body;
  const robot = JokenpoService.jokenbot();

  return res.send(JokenpoService.game(key, robot));
});

module.exports = router;
