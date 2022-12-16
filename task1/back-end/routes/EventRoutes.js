const express = require('express');

const {
  getAllEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} = require('../controllers/EventController');

const router = express.Router();

router.route('/').get(getAllEvents);
router.route('/').post(createEvent);
router.route('/:id').get(getEventById);
router.route('/:id').patch(updateEvent);
router.route('/:id').delete(deleteEvent);

module.exports = router;
