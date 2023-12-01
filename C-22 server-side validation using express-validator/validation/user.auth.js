const { check } = require("express-validator");

exports.userRegistrationValidator = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("name is missing")
    .isLength({ min: 5 })
    .withMessage("Name must have al least 5 characters")
    .isLength({ max: 30 })
    .withMessage("Name can have maximum 30 characters"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("password is missing")
    .isLength({ min: 5 })
    .withMessage("Password must have at least 5 characters"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("dob is missing")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid date"),
];

exports.userLoginValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("password is missing")
    .isLength({ min: 5 })
    .withMessage("Password must have at least 5 characters"),
];
