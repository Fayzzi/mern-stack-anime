const mongoose = require("mongoose");
// Create a video schema
const videoSchema = new mongoose.Schema(
  {
    uploader: {
      type: mongoose.Types.ObjectId,
      ref: "web-Admin",
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    episode: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const VideoUploads = mongoose.model("Video", videoSchema);
module.exports = VideoUploads;
