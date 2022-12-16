const eventService = require('../services/EventService');

exports.getAllEvents = async (req, res) => {
  try {
    const events = req.params.userId ? await eventService.getAllEventsByUserId(req.params.userId) : await eventService.getAllEvents();
    res.json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await eventService.deleteEvent(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
