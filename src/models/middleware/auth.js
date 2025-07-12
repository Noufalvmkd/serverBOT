const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || "secretkey";

function auth(req, res, next) {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access denied, no token provided" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // save user data in request
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}

module.exports = auth;
