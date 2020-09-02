const router = require("express").Router();
const Ticket = require("../model/ticket.model");
const User = require("../model/user.model");
const checkToken = require("../lib/config");

/* 
    @route GET api/ticket
    @desc Gets all ticket of the given individual
    @access public
*/
router.get("/", checkToken, async (req, res) => {
  try {
    let tickets = [];
    let person = await User.findById(req.user.id);
    switch (person.type) {
      case "Client": {
        tickets = await Ticket.find({ created_by: req.user.id }).populate(
          "created_by category assigned_to"
        );
        break;
      }
      case "Agent": {
        tickets = await Ticket.find({ assigned_to: req.user.id }).populate(
          "created_by category assigned_to"
        );
        break;
      }
      case "Admin": {
        tickets = await Ticket.find().populate(
          "created_by category assigned_to"
        );
        break;
      }
    }

    tickets = translate(tickets);
    res.send(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Uh oh! Something went wrong. Please check if you have logged in.",
    });
  }
});

/* 
    @route POST api/ticket/create
    @desc  create articles
    @access public
*/
router.post("/create", checkToken, async (req, res) => {
  try {
    let ticket = await Ticket.create({ ...req.body, created_by: req.user.id });
    res.send(ticket);
  } catch (error) {
    console.error(error);
    res.json({ msg: "Ticket creation was unsuccessful. " });
  }
});

/* 
    @route PUTS api/ticket/update
    @desc Updates the ticket with ALL information
    @access public
*/
router.put("/update/open", checkToken, async (req, res) => {
  let assigned_to;

  try {
    if (!req.body.assigned_to) {
      let findTic = await Ticket.findById(req.body._id);
      assigned_to = findTic.assigned_to;
    } else {
      assigned_to = req.body.assigned_to;
    }

    await Ticket.findByIdAndUpdate(req.body._id, {
      priority: req.body.priority,
      assigned_to: assigned_to,
      status: req.body.status,
    });

    let ticket = await Ticket.findById(req.body._id).populate(
      "created_by assigned_to category"
    );
    res.status(200).send(translateOne(ticket));
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: `${req.body.name} was not able to update.` });
  }
});

function translate(tempTic) {
  let tickets = [];
  for (let i = 0; i < tempTic.length; i++) {
    let tic = tempTic[i];
    tickets[i] = {
      ...tic._doc,
      created_by: `${tic.created_by.fname} ${tic.created_by.lname}`,
      category: `${tic.category.name}`,
      assigned_to: `${tic.assigned_to.fname} ${tic.assigned_to.lname}`,
    };
  }
  return tickets;
}

function translateOne(tic) {
  console.log(tic);
  if (tic === []) return;
  return {
    ...tic._doc,
    created_by: `${tic.created_by.fname} ${tic.created_by.lname}`,
    category: `${tic.category.name}`,
    assigned_to: `${tic.assigned_to.fname} ${tic.assigned_to.lname}`,
  };
}

module.exports = router;
