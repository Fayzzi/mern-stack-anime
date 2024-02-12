const app = require("./app");
const mongoose = require("mongoose");
const server = app.listen(process.env.PORT, () => {
  console.log("listening on port=" + process.env.PORT);
});
//Mongoose Connect
mongoose.connect(process.env.MONGOOSE).then((data) => {
  console.log("Connected to Mongoose=" + data.connection.host);
});
process.on("uncaughtException", (err) => {
  console.log("uncaught exception", err.message);
});
process.on("unhandledRejection", (err) => {
  console.log("unhandled rejection", err.message);
  server.close(() => {
    process.exit(1);
  });
});
