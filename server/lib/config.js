const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({ msg: "You are unauthorised." });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token not valid." });
  }
};
