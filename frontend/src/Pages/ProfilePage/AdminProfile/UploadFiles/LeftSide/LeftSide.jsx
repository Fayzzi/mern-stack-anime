import axios from "axios";
import React, { useState } from "react";
import { MdFileUpload } from "react-icons/md";
import { toast } from "react-toastify";
export default function LeftSide() {
  const [title, setTitle] = useState("");
  const [season, setSeason] = useState("");
  const [description, setDescription] = useState("");
  const [episode, setEpisode] = useState(1);
  const [video, setVideo] = useState(null);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);
    formData.append("season", season);
    formData.append("episode", episode);
    formData.append("description", description);

    // Upload video to the server
    axios
      .post("/api/v2/admin/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setVideo(null);
        setTitle("");
        setSeason("");
        setEpisode(1);
        setDescription("");
        toast.success("Video uploaded successfully");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };

  return (
    <div className="w-[80%] mx-auto text-white">
      <h1 className="pt-8 text-[20px] 800px:text-[30px] mb-5 font-bold">
        Video Upload
      </h1>
      <form onSubmit={handleUpload} action="">
        <div className="flex my-6 flex-col">
          <label className="text-[19px] mb-2">Title: </label>
          <input
            required
            title="Title of your video"
            name="title"
            id="title"
            className="text-black p-2 rounded-md resize-none active:border-darkRed outline-none"
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex my-6 flex-col">
          <label className="text-[19px] mb-2">Season: </label>
          <input
            required
            title="Season "
            name="season"
            id="season"
            className="text-black p-2 rounded-md active:border-darkRed outline-none"
            type="text"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>
        <div className="flex my-6 flex-col">
          <label className="text-[19px] mb-2">Episode: </label>
          <input
            required
            title="Episode No "
            name="Episode No"
            id="Episode No"
            className="text-black p-2 rounded-md active:border-darkRed outline-none"
            type="text"
            value={episode}
            onChange={(e) => setEpisode(e.target.value)}
          />
        </div>
        <div className="flex mb-8 flex-col">
          <label className="text-[19px] mb-2">Description: </label>
          <textarea
            title="Description"
            required
            name="description"
            id="description"
            rows={6}
            className="text-black p-2 rounded-md resize-none active:border-darkRed outline-none"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <label className="text-[19px] mb-2">Video: </label>
        <div className="grid p-2  grid-cols-1 800px:grid-cols-2 1000px:grid-cols-3 mt-3">
          {video ? null : (
            <label
              className="p-2 cursor-pointer font-bold flex items-center justify-center text-black rounded-md h-[200px] bg-gray-100"
              htmlFor="video"
            >
              <div className="flex items-center gap-2">
                <MdFileUpload size={30} className="shrink-0" />
                <h1>Select&nbsp;video</h1>
              </div>
              <input
                type="file"
                id="video"
                className="hidden "
                accept="video/*"
                onChange={handleVideoChange}
              />
            </label>
          )}
          <span>
            {video && (
              <video
                className=" aspect-video "
                controls
                src={URL.createObjectURL(video)}
              />
            )}
          </span>
        </div>
        <button className="bg-darkRed py-2 px-4 rounded-md text-white font-bold my-4">
          Upload Video
        </button>
      </form>
    </div>
  );
}
