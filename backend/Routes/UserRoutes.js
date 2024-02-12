const express = require("express");
const {
  loginUser,
  SignUpUser,
  ActivateUser,
  getUser,
  logoutUser,
  getAllUsers,
  removeUser,
} = require("./../Controller/UserController");
const uploads = require("../multer");
const { isAuthenticated } = require("../Helpers/isAuthenticated");
const router = express.Router();
router.post("/login", loginUser);
router.post("/signUp", uploads.single("file"), SignUpUser);
router.post("/activation", ActivateUser);
router.get("/getUser", isAuthenticated, getUser);
router.post("/logout", logoutUser);
router.get("/", getAllUsers);
router.delete("/:id", removeUser);
module.exports = router;
