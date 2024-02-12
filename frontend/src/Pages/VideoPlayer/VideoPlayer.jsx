import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import bg from "./../../assets/bakiback.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideos } from "../../Redux/VideoReducer/VideoReducer";
import { FaRegEye } from "react-icons/fa";
import { format, isToday, isYesterday } from "date-fns";

export default function VideoPlayer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("video");
  const navigate = useNavigate();
  const [video, setVideo] = useState(null);

  const { videos } = useSelector((state) => state.allvideo);
  const dispatch = useDispatch();
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
    axios.get("/api/v2/admin/videos/" + videoId).then((response) => {
      setVideo(response.data);
      dispatch(getAllVideos());
    });
  }, [dispatch, videoId]);

  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };

    const handlePopstate = () => {
      reloadPage();
    };

    const handleHashchange = () => {
      reloadPage();
    };

    window.addEventListener("popstate", handlePopstate);
    window.addEventListener("hashchange", handleHashchange);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
      window.removeEventListener("hashchange", handleHashchange);
    };
  }, []);

  const mouseIn = (e) => {
    e.target.play();
  };

  const mouseOut = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  };

  const recommendedVideos = videos.filter((v) => v._id !== videoId);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-screen py-10 bg-no-repeat"
    >
      <div className="flex w-[95%] mx-auto items-center justify-between">
        <Link to={"/"}>
          <img
            className="w-[210px]"
            src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/footer/logo_BW.png"
            alt=""
          />
        </Link>
        <div></div>
      </div>
      <div className="1300px:w-11/12 w-[95%] mt-8 mx-auto">
        <div className="1000px:flex 1000px:flex-row flex-col gap-10">
          <div className="w-full flex-[3]">
            <video
              controls
              autoPlay
              className="1000px:w-[75vw] h-[66vh] rounded-md aspect-video bg-black"
              src={"http://localhost:3000/" + video?.path}
            ></video>
            <div className="my-6 px-2">
              <h1 className="text-[22px] text-white 1000px:text-[30px] font-bold">
                {video?.title}
              </h1>
              <div className="my-2 flex gap-2">
                <div className="flex text-white gap-2">
                  <FaRegEye className="h-6 w-6" color="white" />
                  <span className="text-white">{video?.views}</span>
                </div>
                <div>
                  {video?.createdAt && (
                    <>
                      {isToday(new Date(video.createdAt)) && (
                        <span className="text-white">
                          Today at {format(new Date(video.createdAt), "h:mm a")}
                        </span>
                      )}
                      {isYesterday(new Date(video.createdAt)) && (
                        <span className="text-white">
                          Yesterday at{" "}
                          {format(new Date(video.createdAt), "h:mm a")}
                        </span>
                      )}
                      {!isToday(new Date(video.createdAt)) &&
                        !isYesterday(new Date(video.createdAt)) && (
                          <span className="text-white">
                            {format(
                              new Date(video.createdAt),
                              "yyyy-MM-dd h:mm a"
                            )}
                          </span>
                        )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full min-w-[300px] hidden  1000px:block flex-[1] ">
            <div>
              <h1 className="text-white  800px:text-[32px] text-[20px] font-bold">
                Recommended
              </h1>
            </div>
            <div className="flex my-6 bg-gray-300 p-2 rounded-md h-fit flex-col gap-8">
              {recommendedVideos &&
                recommendedVideos.map((v, i) => (
                  <div
                    onClick={(e) => handleViews(e, v._id, v.views)}
                    className="flex cursor-pointer gap-2 line-clamp-3"
                    key={i}
                  >
                    <video
                      onMouseOut={(e) => mouseOut(e)}
                      onMouseOver={(e) => mouseIn(e)}
                      muted
                      className="h-full rounded-md w-[45%]"
                      src={"http://localhost:3000/" + v?.path}
                    ></video>
                    <div>
                      <h1 className="text-black text-[12px] 1000px:text-[12px] 1300px:text-[15px] font-bold line-clamp-2">
                        {v?.title.length > 50
                          ? v?.title.slice(0, 40) + "..."
                          : v.title}
                      </h1>
                      <div className="flex items-center gap-2">
                        <FaRegEye />
                        <h1 className="text-black text-[14px]">{v?.views}</h1>
                      </div>
                      {v?.createdAt && (
                        <>
                          {isToday(new Date(v?.createdAt)) && (
                            <span className="text-black">
                              Today at{" "}
                              {format(new Date(v?.createdAt), "h:mm a")}
                            </span>
                          )}
                          {isYesterday(new Date(v?.createdAt)) && (
                            <span className="text-black">
                              Today at{" "}
                              {format(new Date(v?.createdAt), "h:mm a")}
                            </span>
                          )}
                          {!isToday(new Date(v?.createdAt)) &&
                            !isYesterday(new Date(v?.createdAt)) && (
                              <span className="text-black">
                                {format(
                                  new Date(v?.createdAt),
                                  "yyyy-MM-dd h:mm a"
                                )}
                              </span>
                            )}
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
