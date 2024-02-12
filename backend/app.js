const express = require("express");
const app = express();
const errors = require("./Utils/error");
const cookieparser = require("cookie-parser");
const admin = require("./Routes/AdminRoutes");
const user = require("./Routes/UserRoutes");

const cors = require("cors");
const bodyParser = require("body-parser");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}
//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));

//routes
app.use("/api/v2/user", user);
app.use("/api/v2/admin", admin);
app.use(errors);
module.exports = app;
