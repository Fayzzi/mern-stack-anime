// middleware/errorHandler.js
//statusCode and message speelings must be alike of ones used in ErrorHandler.js
module.exports = (err, req, res, next) => {
  // Set default values for status code and message
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  // Send the error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
