const express = require('express');

const {
  getTypes,
} = require('../controllers/UserEventController');

const router = express.Router();

router.route('/').get(getTypes);

module.exports = router;
