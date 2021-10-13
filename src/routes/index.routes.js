const express = require('express');
const router = express.Router();

const { home } = require('../controllers/index.controller');

// get the home
router.get('/', home);

module.exports = router;