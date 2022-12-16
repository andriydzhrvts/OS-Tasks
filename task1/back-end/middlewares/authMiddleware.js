let jwt = require("jsonwebtoken");
require('dotenv').config();


exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (token) {
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "Token is not valid",
                });
            }
            req.user = decoded;
            return next();
        });

        return;
    }
    return res.status(401).json({
        success: false,
        message: "Auth token is not supplied",
    });
};