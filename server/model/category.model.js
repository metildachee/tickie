const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
  index: { type: Number, default: 1 },
});

var counter = mongoose.model("CounterCat", CounterSchema);

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  key: Number,
});

categorySchema.pre("save", function (next) {
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

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
