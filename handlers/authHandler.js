const User = require ("../pkg/userModel/userSchema");

const jwt = require ("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const newUser = await User.create ({
            name: req.body.name, 
            email: req.body.email,
            password: req.body.password, //objekt za pogolema bezbednost
        });
        //generirame token
        const token = jwt.sign(
            { id: newUser._id, name: newUser.name }, 
            process.env.JWT_SECRET, 
            { 
                expiresIn: process.env.JWT_EXPIRES,
        });

        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser,
            },
        });

    }   catch (err) {
        return res.status(500).send(err);
    }
};

exports.login = async (req, res) => {
    try {

    } catch (err) {}
};

exports.protect = async (req, res) => {
    try{

    } catch (err) {}
};