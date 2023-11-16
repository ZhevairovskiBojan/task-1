const mongoose = require ("mongoose");
const validator = require ("validator");
// const { default: isEmail } = require("validator/lib/isEmail");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"], //validacija dali vrednosta e email
    },
    role: {
        type: String,
        enum: ["user", "admin"], //enum koristime koga imame tocno zadadeni parametri
        default: "user",
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [4, "Password must be at least 4 characters"],
        // validate: [validator.IsStongPassword, "Please provide a strong password"],
    },
});

userSchema.pre("save", async function (next){
    if(!this.isModified ("password")) return next ();
    this.password = await bcrypt.hash(this.password, 12);
    next()
})

const User = mongoose.model ("User", userSchema);

module.exports = User;