const AuthService = require("../services/AuthService");

exports.registerUser = async (req, res) => {
    try {
        const result = await AuthService.RegisterUser(req.body);
        res.json(result);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const email = req.body.login;
        const password = req.body.password;
        if (email == "") {
            throw new Error("Enter your email!");
        }
        if (password == "") {
            throw new Error("Enter your password!");
        }
        const result = await AuthService.LoginUser(email, password);
        res.json(result);
    } catch (error) {
        return res.status(400).send(error.message);
    }
};