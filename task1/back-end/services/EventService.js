const EventModel = require('../models/Event');

exports.getAllEvents = async () => {
  return await EventModel.find();
};

exports.getAllEventsByUserId = async (userId) => {
  return await EventModel.find({ userId });
};

exports.createEvent = async (event) => {
  return await EventModel.create(event);
};

exports.getEventById = async (id) => {
  return await EventModel.findById(id);
};

exports.updateEvent = async (id, event) => {
  return await EventModel.findByIdAndUpdate(id, event);
};

exports.deleteMEvent = async (id) => {
  return await EventModel.findByIdAndDelete(id);
};
