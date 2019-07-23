const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

router
  .route("/register")
  // @route   POST api/users/register
  // @desc    Register new user
  // @access  Public
  .post(UserController.registerUser);

router
  .route("/login")
  // @route   POST api/users/login
  // @desc    Authenticate user
  // @access  Public
  .post(UserController.loginUser);

router
  .route("/user")
  // @route   GET api/users/user
  // @desc    Get user data (by token)
  // @access  Private
  .get(auth, UserController.getUserData);

module.exports = router;
