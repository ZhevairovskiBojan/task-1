const mongoose = require("mongoose");

const kursSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "the name is required"]
    },
    adress: {
        type: String,
        required: [true, "the address is required"]
    },
    type: {
        type:String,
    }
});

const Kurs = mongoose.model("kurs", kursSchema);

module.exports = Kurs;