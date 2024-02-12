const User = require("./../Models/UserModel");
const CatchAsyncErrors = require("./../Utils/CatchAsyncErrors");
const ErrorHandler = require("./../Utils/ErrorHandeler");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const sendMail = require("../Helpers/SendMail");
const sendToken = require("../Helpers/SendToken");
const loginUser = CatchAsyncErrors(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email }).select("+password");
    if (checkUser) {
      const ispasswordValid = await checkUser.comparePassword(password);
      if (ispasswordValid) {
        sendToken(checkUser, 200, res);
      } else {
        return next(new ErrorHandler("Invalid Password!!", 400));
      }
    } else {
      return next(new ErrorHandler("User not found", 400));
    }
  } catch (error) {}
});
const SignUpUser = CatchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!req.file) {
    return next(new ErrorHandler("Image is required", 400));
  }
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    const filename = req.file.filename;
    const filepath = "uploads/" + filename;
    fs.unlink(filepath, (err) => {
      if (err) {
        res.status(500).json({ message: "Error deleting file" });
      }
    });
    return next(new ErrorHandler("User Already exists", 400));
  }
  const filename = req.file.filename;

  const avatar = filename;
  const newUser = {
    name,
    email,
    password,
    avatar: avatar,
  };
  const activationToken = createActivationToken(newUser);
  const activationUrl = "http://localhost:5173/activation/" + activationToken;
  try {
    await sendMail({
      email: newUser.email,
      subject: "Activate your account",
      text: `Hello ${newUser.name} please activate your account by clicking the link: ${activationUrl}`,
    });
    res.status(201).json({
      success: true,
      message: `Please check your email (${newUser.email}) for activating your account.`,
    });
  } catch (error) {}
});

const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN, {
    expiresIn: "5m",
  });
};
const ActivateUser = CatchAsyncErrors(async (req, res, next) => {
  try {
    const { activation_token } = req.body;
    const userData = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN);

    if (userData) {
      const { name, email, password, avatar } = userData;

      // Check if the user already exists
      let user = await User.findOne({ email: email });

      if (!user) {
        user = await User.create({
          name,
          email,
          password,
          avatar,
        });

        sendToken(user, 200, res);
      } else {
        res.json({ message: "User already activated" });
      }
    } else {
      return next(new ErrorHandler("Invalid activation token", 400));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

const getUser = CatchAsyncErrors(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.status(200).json({
      success: true,
      user,
    });
  }
});
const getAllUsers = async (req, res) => {
  const user = await User.find();
  res.json({
    user,
  });
};
const logoutUser = CatchAsyncErrors(async (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out",
  });
});
const removeUser = async (req, res, next) => {
  const { id } = req.params;
  const deleted = await User.findByIdAndDelete(id);
  res.json({ success: true, deleted: deleted });
};

module.exports = {
  loginUser,
  SignUpUser,
  ActivateUser,
  getUser,
  logoutUser,
  getAllUsers,
  removeUser,
};
