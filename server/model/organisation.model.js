const mongoose = require("mongoose");

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Organisation = mongoose.model("Organisation", organisationSchema);

module.exports = Organisation;
