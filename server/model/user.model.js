const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  organisation: { type: Schema.Types.ObjectId, ref: "Organisation" },
  role: { type: String },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Client", "Agent", "Admin"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
