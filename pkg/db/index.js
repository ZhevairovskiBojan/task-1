const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({path: `${__dirname}/../../config.env`});

const DB = process.env.DATABASE.replace('<PASSWORD>',
  process.env.DATABASE_PASSWORD).replace("NAME");

const database = async () => {
  try {
    await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Succsessfuly connencted to database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  database
};