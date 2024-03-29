const router = require("express").Router();
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkToken = require("../lib/config");

/*
    @route POST api/auth/register
    @desc registers user
    @access public
*/

router.post("/register", async (req, res) => {
  console.log(req.body);
  let {
    fname,
    lname,
    email,
    password,
    type,
    role,
    organisation,
    description,
  } = req.body;
  try {
    let user = new User({
      fname,
      lname,
      email,
      type,
      role,
      organisation,
      description,
    });
    let hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "User not registered successfully!" });
  }
});

/*
    @route POST api/auth/login
    @desc login user
    @access public
*/

router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // found his email address and he is in my app
    // check password matching
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Wrong password la" });
    }

    // his password and email all matches
    // then I will send the actual data (payload)
    const payload = {
      user: {
        id: user._id,
      },
    };

    // in order to make a token, I need to call sign method from jwt
    jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: 360000000 },
      (err, token) => {
        if (err) throw err; // if error, go to catch
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

router.get("/user", checkToken, async (req, res) => {
  try {
    let user = await User.findById(req.user.id, "-password");

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

router.get("/user/agents", checkToken, async (req, res) => {
  try {
    let users = await User.find({ type: "Agent" }, "-password");
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

router.get("/users", checkToken, async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: "Oops! Something went wrong" });
  }
});

module.exports = router;
