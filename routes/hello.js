const express = require('express');
const helloController = require ('../controllers/hello')

const router = express.Router();

router.get('/:string', helloController.hello);

module.exports = router;