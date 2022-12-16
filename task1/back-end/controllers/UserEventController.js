const UserEventService = require('../services/UserEventService');

exports.getAllUserEvents = async (req, res) => {
  try {
    const events = await UserEventService.getAllUserEventsByUserId(req.user.userId);
    res.json(events);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.createUserEvent = async (req, res) => {
  try {
    const event = await UserEventService.createUserEvent(req.body);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserEventById = async (req, res) => {
  try {
    const event = await UserEventService.getUserEventById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateUserEvent = async (req, res) => {
  try {
    const event = await UserEventService.updateUserEvent(req.params.id, req.body);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteUserEvent = async (req, res) => {
  try {
    const event = await UserEventService.deleteUserEvent(req.user.userId, req.params.id);
    res.json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTypes = async (req, res) => {
  try {
    const types = await UserEventService.getTypes();
    res.json(types);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
