const Users = require("../models/User");

exports.findById = (id) => {
    return Users.User.findById(id, { password: 0 });
};

exports.getUser = (field, value) => {
    return Users.User.findOne({ [field]: value });
};

exports.updateItemById = (id, item) => {
    return Users.User.updateOne({ _id: id }, { $set: item });
};