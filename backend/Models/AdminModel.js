// AdminModel.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [4, "Password should be greater than 4 characters"],
    select: false, //false because we don't want to show the password field in the cookies
  },
  avatar: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Admin",
  },
  contact: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
});

// Hash the password before saving
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = bcrypt.hashSync(this.password, 12);
});

adminSchema.methods.createJWtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JSON_WEB_SECRET, {
    expiresIn: process.env.JSON_WEB_SECRET_EXPIRES,
  });
};
adminSchema.methods.comparePassword = async function (enteredPassword) {
  // Compare the entered password with the hashed password
  return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model("web-Admin", adminSchema);
