const UserService = require("../services/UserService");

exports.findByToken = async (req, res) => {
    const id = req.user ? req.user.userId : "";
    const user = await UserService.findById(id);
    if (!user) {
        return res.status(401).send("User not found!");
    }
    return res.status(200).json(user);
};

exports.updateItemById = async (req, res) => {
    try {
        const result = await UserService.updateItemById(req.params.id, req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};
