const router = require("express").Router();
const Organisation = require("../model/organisation.model");

router.get("/", async (req, res) => {
  try {
    let orgs = await Organisation.find();
    res.status(200).send(orgs);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Oops! Something went wrong. Please try again later." });
  }
});

router.post("/", async (req, res) => {
  try {
    let orgs = await Organisation.create(req.body);
    res.status(201).send(orgs);
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Oops! Something went wrong. Please try again later." });
  }
});

module.exports = router;
