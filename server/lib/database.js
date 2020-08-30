require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(
  process.env.DATABASE,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("mongodb connected!");
  }
);

module.exports = mongoose;
