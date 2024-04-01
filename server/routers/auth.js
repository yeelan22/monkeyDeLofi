// // Login Route
// const router = require("express").Router();
// const { User } = require("../models/users");
// const joi = require("joi");
// const bcrypt = require("bcrypt");
// router.post("/", async(req, res) => {
//     try{
//        const {error} = validate(req.body);
//        if (error)
//          return res.status(400).send({message: error.details[0].message});
//        const user = await User.findOne({email: req.body.email});
//        if (!user){
//         return res.status(401).send({message: "Invalid Email or Password"})
//        };

//        const validPassword = await bcrypt.compare(
//         req.body.password, user.password
//        );

//        if(!validPassword)
//           return res.status(401).send({message: "Invalid Email or Password"});

//         const token = user.generateAuthToken();
//         res.status(200).send({data: token, message:"Logged in successfully"});
//     }catch(error) {
//        res.status(500).send({message: "Internal Server Error"});
//     }
// });

// const validate = (data) => {
//     const schema = joi.object({
//         email: joi.string().email().required().label("Email"),
//         password: joi.string().required().label("Password")
//     });

//     return schema.validate(data);
// }

// module.exports = router;


const router = require("express").Router();
const { User } = require("../models/users");
const joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            console.error("Validation Error:", error.message);
            return res.status(400).send({ message: error.details[0].message });
        }
        
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            console.error("User not found for email:", req.body.email);
            return res.status(401).send({ message: "Invalid Email or Password" });
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            console.error("Invalid password for email:", req.body.email);
            return res.status(401).send({ message: "Invalid Email or Password" });
        }

        const token = user.generateAuthToken();
        console.log("User logged in successfully:", user.email);
        res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
        console.error("Internal Server Error:", error.message);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

const validate = (data) => {
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("Password")
    });

    return schema.validate(data);
}

module.exports = router;
