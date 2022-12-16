const UserEventModel = require('../models/UserEvent');

exports.getAllUserEvents = async () => {
  return await UserEventModel.find();
};

exports.getAllUserEventsByUserId = async (userId) => {
  return await UserEventModel.find({ userId });
};

exports.createUserEvent = async (event) => {
  return await UserEventModel.create(event);
};

exports.getUserEventById = async (id) => {
  return await UserEventModel.findById(id);
};

exports.updateUserEvent = async (id, event) => {
  return await UserEventModel.findByIdAndUpdate(id, event);
};

exports.deleteUserEvent = async (userId, eventId) => {
  return await UserEventModel.findOneAndDelete({ _id: eventId, userId });
};

exports.getTypes = async () => {
  return await UserEventModel.find().distinct('type');
};