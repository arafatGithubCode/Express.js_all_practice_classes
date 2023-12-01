const userRouter = require("express").Router();

const { body, validationResult } = require("express-validator");
const { runValidation } = require("../validation/user.validate");
const { registerUser, loggedIn } = require("../controllers/user.controller");
const {
  userRegistrationValidator,
  userLoginValidation,
} = require("../validation/user.auth");

userRouter.post(
  "/register",
  //input validation
  userRegistrationValidator,
  runValidation,
  registerUser
);

userRouter.post(
  "/login",
  //input validation
  userLoginValidation,
  runValidation,
  loggedIn
);

module.exports = userRouter;
