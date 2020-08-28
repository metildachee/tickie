const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    name: {
      type: String, 
      required: true
    },
    desc: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    priority: {
      type: String, 
      enum: ["low", "moderate", "high"]
    },
    created_by: { type: Schema.Types.ObjectId, ref: "User" },
    assigned_to: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;