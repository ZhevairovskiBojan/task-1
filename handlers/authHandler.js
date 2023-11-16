const User = require ("../pkg/userModel/userSchema");

const jwt = require ("jsonwebtoken");
const bcrypt = require ("bcryptjs");

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
        //proverka dali korisnikot ima vneseno email i pass
      const { email, password } = req.body;
      if(!email || !password) {
        return res.status(400).send("Please provide email and password")
      }
       //proverka dali korisnikot veke postoi
      const user = await User.findOne({ email });
      if(!user) {
        res.status(400).send("This user with this email doesn't exist in databe")
      }

      //sporeduvame pass
      const IsStongPasswordValid = bcrypt.compareSync(password, user.password);
        if(!IsStongPasswordValid) {
            return res.status(400).send("Invalid email or password");
        }

        //generirame i isprakame token
        const token = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_SECRET, 
            {
                expiresIn: process.env.JWT_EXPIRES
            }
        );

        res.status(201).json({
            status: "success",
            token,
        })


    } catch (err) {
        return res.status(500).send("Internal server error");
    }
};

exports.protect = async (req, res) => {
    try{

    } catch (err) {}
};