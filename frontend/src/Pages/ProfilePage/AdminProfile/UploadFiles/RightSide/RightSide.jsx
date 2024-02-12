import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../../../../Redux/VideoReducer/VideoReducer";
import { Link, useNavigate } from "react-router-dom";
import { format, isToday, isYesterday } from "date-fns";

export default function RightSide() {
  const { videos, vidloading } = useSelector((state) => state.allvideo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViews = async (e, id, views) => {
    e.preventDefault();
    axios
      .put("/api/v2/admin/video/" + id, {
        views: views + 1,
      })
      .then(() => {
        navigate("/adminProfile/video?video=" + id);
      });
  };

  useEffect(() => {
    dispatch(getAllVideos());
  }, [dispatch]);

  const handleVideoHover = (e) => {
    e.target.play();
  };

  const handleVideoOut = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };
  if (vidloading) {
    return (
      <div className="min-h-full flex flex-col items-center justify-center text-white">
        ....loading
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto">
      <h2 className="text-[20px] md:text-[30px] my-4 text-white font-bold">
        Uploaded Videos
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 1300px:grid-cols-3 ">
        {videos.map((v) => (
          <div
            className="cursor-pointer"
            onClick={(e) => handleViews(e, v._id, v.views)}
            key={v?._id}
          >
            <h3 className="text-white  text-[22px] font-extrabold  line-clamp-1">
              {v?.title}
            </h3>
            <div className="flex gap-2">
              <h3 className="text-white mb-2 text-[12px] ">
                season:{v?.season}
              </h3>
              <h3 className="text-white mb-2 text-[12px] ">
                Episode:{v?.episode}
              </h3>
            </div>
            <video
              src={"http://localhost:3000/" + v.path}
              width="320"
              height="240"
              controls
              muted
              className=" rounded-md"
              onMouseOver={(e) => handleVideoHover(e)}
              onMouseOut={(e) => handleVideoOut(e)}
              onError={(e) => console.error("Video error:", e)}
            ></video>
            <div>
              <h1 className="px-3 text-white">
                views: <strong>{v?.views}</strong>
              </h1>
              {v.createdAt && (
                <>
                  {isToday(new Date(v?.createdAt)) && (
                    <span className="text-white text-[12px] px-3">
                      Today at {format(new Date(v?.createdAt), "h:mm a")}
                    </span>
                  )}
                  {isYesterday(new Date(v?.createdAt)) && (
                    <span className="text-white text-[12px] px-3">
                      Today at {format(new Date(v?.createdAt), "h:mm a")}
                    </span>
                  )}
                  {!isToday(new Date(v?.createdAt)) &&
                    !isYesterday(new Date(v?.createdAt)) && (
                      <span className="text-white text-[12px] px-3">
                        {format(new Date(v?.createdAt), "yyyy-MM-dd h:mm a")}
                      </span>
                    )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
