// videomulter.js
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const filename = file.originalname.split(".")[0];
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(null, filename + "_" + uniqueSuffix + ".mp4");
  },
});

const videoUploads = multer({
  storage: storage,
});

module.exports = videoUploads;
