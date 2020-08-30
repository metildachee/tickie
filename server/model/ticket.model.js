const mongoose = require("mongoose");
const User = require("./user.model");

const Schema = mongoose.Schema;

var CounterSchema = Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
  index: { type: Number, default: 1 },
});

var counter = mongoose.model("Counter", CounterSchema);

const ticketSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    priority: {
      type: String,
      enum: ["Low", "Moderate", "High"],
    },
    key: Number,
    index: Number,
    status: {
      type: String,
      enum: ["Open", "Assigned", "In-progress", "Resolved", "Archived"],
      default: "Open",
    },
    remarks: {
      type: String,
    },
    created_by: { type: Schema.Types.ObjectId, ref: "User" },
    assigned_to: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

ticketSchema.pre("save", function (next) {
  var doc = this;
  counter
    .findByIdAndUpdate(
      { _id: "entityId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    )
    .then(function (count) {
      doc.key = count.seq;
      doc.index = count.seq - 1;
    })
    .catch(function (error) {
      throw error;
    });

  User.findOne({ fname: "Unassigned" })
    .then((user) => {
      console.log(user);
      doc.assigned_to = user._id;
      console.log(doc);
      next();
    })
    .catch((error) => {
      throw error;
    });
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
