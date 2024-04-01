//User Model
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema({
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},

});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
    return token
};
const User = mongoose.model("Users", userSchema);
// const validate = (data) => {
//     const schema = joi.object({
//         firstName: joi.string().required().label("first Name"),
//         LastName: joi.string().required().label("Last Name"),
//         email: joi.string().required().label("Email"),
//         password: joi.passwordComplexity().required().label("Password"),

//     });



//     return schema.validate(data)
// }
const complexityOptions = {
    min: 8,             // Minimum password length
    max: 30,            // Maximum password length
    lowerCase: 1,       // Require at least one lowercase letter
    upperCase: 1,       // Require at least one uppercase letter
    numeric: 1,         // Require at least one number
    symbol: 1,          // Require at least one special character
    requirementCount: 4 // Number of requirements to enforce
};

const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("Password").custom((value, helpers) => {
            // Validate password complexity using joi-password-complexity
            const complexity = passwordComplexity(complexityOptions).validate(value);
            if (complexity.error) {
                return helpers.error('any.invalid');
            }
            return value;
        })
    });

    return schema.validate(data);
};


module.exports = {User, validate};
