const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    name: String,
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", articleSchema);

module.exports = Ticket;