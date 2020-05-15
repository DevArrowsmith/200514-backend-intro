const express = require('express');

const router = express.Router();

router.get('/:string', (req, res) => {
  const string = req.params.string;
  res.status(200).send(`Hey there ${string}!`)
});

module.exports = router;