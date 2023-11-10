const mongoose = require("mongoose");

const kursSchema = new mongoose.Schema({
    name: {
        type:String,
        
    },
    adress: {
        type: String,
        
    },
    type: {
        type:String,
    }
});

const Kurs = mongoose.model("kurs", kursSchema);

module.exports = Kurs;