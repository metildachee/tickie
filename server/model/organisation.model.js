const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
  index: { type: Number, default: 1 },
});

var counter = mongoose.model("CounterOrg", CounterSchema);

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  key: Number,
});

organisationSchema.pre("save", function (next) {
  var doc = this;
  counter
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (count) {
      doc.key = count.seq;
      next();
    })
    .catch(function (error) {
      throw error;
    });
});

const Organisation = mongoose.model("Organisation", organisationSchema);

module.exports = Organisation;
