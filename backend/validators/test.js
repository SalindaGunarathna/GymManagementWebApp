const { check } = require("express-validator");

exports.userRegisterValidator =[
    check("email").not().isEmail().withMessage("Please enter a valid email address."),
]