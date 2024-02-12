const User = require("../Models/UserModel");
const CatchAsyncErrors = require("../Utils/CatchAsyncErrors");
const ErrorHandler = require("../Utils/ErrorHandeler");
const jwt = require("jsonwebtoken");
exports.isAuthenticated = CatchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("Please login first", 400));
  }
  const UserData = jwt.verify(token, process.env.JSON_WEB_SECRET);
  req.user = await User.findById(UserData.id);
  next();
});
