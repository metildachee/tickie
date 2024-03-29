const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./lib/database");
app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/ticket", require("./routes/ticket.route"));
app.use("/api/category", require("./routes/category.route"));
app.use("/api/org", require("./routes/organisation.route"));

app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);
