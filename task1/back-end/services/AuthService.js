const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.RegisterUser = ({
    email,
    password,
    firstName,
    lastName,
}) => {
    const user = new User({
        email,
        password,
        firstName,
        lastName,
    });
    return user.save();
};

exports.LoginUser = async (email, password) => {
    const user = await User.findOne({ login: email });
    if (!user) {
        throw new Error("Try enter your email");
    }

    const passwordCompared = await user.comparePassword(password, user.password);
    if (!passwordCompared) {
        throw new Error("Try enter your password");
    }

    const token = jwt.sign(
        {
            email: user.email,
            userId: user._id,
        },
        process.env.SECRET,
        {
            expiresIn: "10d",
        }
    );

    if (!token) {
        throw new Error("Not found token");
    }

    const data = {
        token: token,
    };
    return data;
};