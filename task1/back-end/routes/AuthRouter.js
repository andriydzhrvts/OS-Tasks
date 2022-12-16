const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const router = require('express').Router();
const auth = require("../middlewares/authMiddleware")

router.post("/register", AuthController.registerUser);
router.post('/login', AuthController.loginUser);
router.get('/me', auth.verifyToken, UserController.findByToken);

module.exports = router;
