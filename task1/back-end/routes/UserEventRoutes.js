const express = require('express');

const {
  getAllUserEvents,
  createUserEvent,
  getUserEventById,
  updateUserEvent,
  deleteUserEvent,
} = require('../controllers/UserEventController');

const router = express.Router();

router.route('/').get(getAllUserEvents);
router.route('/').post(createUserEvent);
router.route('/:id').get(getUserEventById);
router.route('/:id').patch(updateUserEvent);
router.route('/:id').delete(deleteUserEvent);

module.exports = router;
