// authRoutes.js
const express = require("express");
const Admin = require("./../Models/AdminModel");
const CatchAsyncErrors = require("../Utils/CatchAsyncErrors");
const ErrorHandler = require("../Utils/ErrorHandeler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("./../Models/UserModel");
const uploads = require("../multer");
const router = express.Router();
const fs = require("fs");
const sendEmailtoAdmin = require("../Helpers/SendAdminMail/SendAdmin");
const SendAdminToken = require("./../Helpers/SendAdminToken/SendTokenAdmin");
const {
  AdminisAuthenticated,
} = require("../Helpers/AdminIsAuthenticated/AdminIsAuthenticated");
const UserModel = require("./../Models/UserModel");
const sendToken = require("../Helpers/SendToken");
router.post(
  "/AdminSignUp",
  uploads.single("adminImage"),
  CatchAsyncErrors(async (req, res, next) => {
    const { email, password, name } = req.body;
    const avatar = req.file.filename;

    const existingAdmin = await Admin.findOne({ email: email });
    if (existingAdmin) {
      const filename = req.file.filename;
      const filepath = "uploads/" + filename;
      fs.unlink(filepath, (err) => {
        if (!err) {
          console.log(err);
        }
      });
      return next(new ErrorHandler("Email is already registred", 400));
    } else {
      const newAdmin = {
        email,
        password,
        name,
        avatar,
      };
      const adminactivation = creatadminactivatiolink(newAdmin);
      const activationadminurl =
        "http://localhost:5173/admin/activation/" + adminactivation;
      try {
        await sendEmailtoAdmin({
          email: newAdmin.email,
          message: `You will set ${newAdmin.email} as admin by clicking on this link:${activationadminurl}`,
          subject: `${newAdmin.email} has put the request to be admin`,
        });
        res.json({
          success: true,
          message: `A request was made to the owner`,
        });
      } catch (error) {}
    }
  })
);
const creatadminactivatiolink = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_TOKEN, {
    expiresIn: "5m",
  });
};

router.post(
  "/activation",
  CatchAsyncErrors(async (req, res, next) => {
    const { admin_activation } = req.body;

    try {
      const userData = jwt.verify(
        admin_activation,
        process.env.ACTIVATION_TOKEN
      );
      if (userData) {
        const { name, email, password, avatar } = userData;
        const existingAdmin = await Admin.findOne({ email: email });

        if (!existingAdmin) {
          existingUser = await Admin.create({
            name,
            email,
            password,
            avatar,
          });
          SendAdminToken(existingUser, 200, res);
        } else {
          return next(new ErrorHandler("Email is already registered", 400));
        }
      } else {
        return next(new ErrorHandler("Email is already registered", 400));
      }
    } catch (error) {
      return next(new ErrorHandler("Invalid or expired activation token", 400));
    }
  })
);
router.post(
  "/AdminLogin",
  CatchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    const checkUser = await Admin.findOne({ email: email }).select("+password");

    if (checkUser) {
      const passwordValid = await checkUser.comparePassword(password);

      if (passwordValid) {
        SendAdminToken(checkUser, 200, res);
      } else {
        return next(new ErrorHandler("Password is not valid", 400));
      }
    } else {
      return next(new ErrorHandler("Email is not registered", 400));
    }
  })
);
router.get(
  "/getAdmin",
  AdminisAuthenticated,
  CatchAsyncErrors(async (req, res, next) => {
    const admin = await Admin.findById(req.admin.id);
    if (admin) {
      res.status(200).json({
        success: true,
        admin,
      });
    }
  })
);
router.put(
  "/updateAdmin",
  AdminisAuthenticated,
  uploads.single("changedImage"),
  CatchAsyncErrors(async (req, res, next) => {
    const { name, contact, address } = req.body;
    const isAdmin = await Admin.findById(req.admin.id);
    if (req.file) {
      const file = req.file.filename;
      isAdmin.avatar = file;
      isAdmin.name = name;
      isAdmin.address = address;
      isAdmin.contact = contact;
      await isAdmin.save();
      res.json({
        message: "Update Successfull!!",
      });
    } else {
      isAdmin.name = name;
      isAdmin.address = address;
      isAdmin.contact = contact;
      await isAdmin.save();
      res.json({
        message: "Update Successfull!!",
      });
    }
  })
);
router.post(
  "/adduser",
  uploads.single("file"),
  CatchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    const userExist = await UserModel.findOne({ email: email });
    const file = req.file.filename;
    if (userExist) {
      const path = "uploads/" + file;
      fs.unlink(path, (err) => {
        if (err) {
          console.log(err);
        }
      });
      return next(new ErrorHandler("user already exists", 400));
    }
    const create = await UserModel.create({
      name,
      email,
      password,
      avatar: file,
    });
    res.status(200).json({
      message: "User created successfully",
      create,
    });
  })
);

router.post("/", async (req, res) => {
  res.clearCookie("admin_token");
  res.status(200).json({
    message: "User logged out",
  });
});
router.post(
  "/Adminlogout",
  CatchAsyncErrors(async (req, res, next) => {
    res.clearCookie("token_admin");
    res.status(200).json({
      message: "User logged out",
    });
  })
);

const videoUploads = require("./../videomulter");
const VideoUploads = require("./../Models/VideoUpload");
router.post(
  "/upload-video",
  AdminisAuthenticated,
  videoUploads.single("video"),
  async (req, res) => {
    const isAdmin = await Admin.findById(req.admin.id);
    if (isAdmin) {
      const { title, season, description, episode } = req.body;

      const createUpload = await VideoUploads.create({
        uploader: isAdmin._id,
        title,
        path: req.file.filename,
        season,
        description,
        episode,
      });

      res.json(createUpload);
    } else {
      return next(new ErrorHandler("You are not allowed to post a video", 400));
    }
  }
);
router.get("/videos", async (req, res) => {
  const videosall = await VideoUploads.find().populate("uploader");
  res.json(videosall);
});

//Getting only MY Videos
// router.get("/videos",AdminisAuthenticated, async (req, res) => {
//   const videosall = await VideoUploads.find({uploader:req.admin.id}).populate("uploader");
//   res.json(videosall);
// });
router.get("/videos/:id", async (req, res) => {
  const { id } = req.params;
  const videosall = await VideoUploads.findById(id);
  res.json(videosall);
});
router.put("/video/:id", async (req, res) => {
  try {
    const { views } = req.body;
    const { id } = req.params;

    const video = await VideoUploads.findById(id);

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    video.views = views;
    await video.save();
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//uploading images by link
const IMAGEDOWNLOADER = require("image-downloader");
const Character = require("../Models/CharacterModel");
router.post(
  "/upload-by-link",
  AdminisAuthenticated,
  CatchAsyncErrors(async (req, res, next) => {
    const { link } = req.body;
    const NewName = "Photo" + Date.now() + ".jpg";
    await IMAGEDOWNLOADER.image({
      dest: __dirname + "./../uploads/" + NewName,
      url: link,
    });
    res.json(NewName);
  })
);
router.post(
  "/upload-from-gallery",
  uploads.array("photos", 100),
  async (req, res) => {
    try {
      const generatedFileNames = req.files.map((file) => file.filename);
      res.json({ generatedFileNames });
    } catch (error) {
      console.error("Error processing files:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.post(
  "/add-character",
  AdminisAuthenticated,
  CatchAsyncErrors(async (req, res, next) => {
    const { name, age, description, photos, gender } = req.body;
    try {
      const uploadnewChar = await Character.create({
        admin: req.admin.id,
        name,
        age,
        description,
        photos,
        gender,
      });
      res.json(uploadnewChar);
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  })
);
router.get(
  "/getallcharacters",
  AdminisAuthenticated,
  CatchAsyncErrors(async (req, res, next) => {
    const allcharacter = await Character.find();
    res.json(allcharacter);
  })
);
router.delete(
  "/delete/:id",
  AdminisAuthenticated,
  CatchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    res.json({ success: true });
  })
);
module.exports = router;
