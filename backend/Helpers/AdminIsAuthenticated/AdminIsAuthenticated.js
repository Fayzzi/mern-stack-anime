const AdminModel = require("../../Models/AdminModel");
const CatchAsyncErrors = require("../../Utils/CatchAsyncErrors");
const ErrorHandler = require("../../Utils/ErrorHandeler");
const jwt = require("jsonwebtoken");
exports.AdminisAuthenticated = CatchAsyncErrors(async (req, res, next) => {
  const { token_admin } = req.cookies;
  if (token_admin) {
    const AdminData = jwt.verify(token_admin, process.env.JSON_WEB_SECRET);
    if (AdminData) {
      req.admin = await AdminModel.findById(AdminData.id);
      next();
    } else {
      return next(new ErrorHandler("No user data found", 400));
    }
  } else {
    return next(new ErrorHandler("Please login first", 400));
  }
});
