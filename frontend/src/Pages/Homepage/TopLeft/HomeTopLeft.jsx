import React, { useState } from "react";
import ImageSlider from "../../Components/ImageSlider";
import season2 from "./../../../assets/season2.mp4";
import { RxCross1 } from "react-icons/rx";
export default function HomeTopLeft({ images, current, setCurrent }) {
  const [popUp, sePopUp] = useState(false);

  return (
    <div className=" 1000px:min-h-[180vh]  mb-[100px] 1000px:mb-[0]  h-fit relative shrink-0">
      <div className="relative">
        <div className="800px:px-2 1000px:w-[90%] min-w-[350px] w-[80%] mx-auto 1000px:block hidden px-4 1000px:my-16 mb-12 mt-[20px]">
          <img
            src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/logo_black.png"
            alt=""
            className=" flex mx-auto w-[100%] "
          />
        </div>
        <div className="1000px:px-2  1000px:w-[90%] min-w-[350px]  w-[80%]   mx-auto px-4 1000px:my-16 my-12">
          <img
            src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/onair_231001.png"
            alt=""
            className="flex w-[90%] mx-auto"
          />
        </div>
        <div
          onClick={(e) => {
            sePopUp(true);
          }}
          className="cursor-pointer  w-[90%] mx-auto 1000px:my-16 my-12"
        >
          <video
            src={season2}
            className="h-[300px] 1000px:h-[250px] object-contain  mx-auto w-[100%] rounded-md "
            loop
            autoPlay
            muted
          ></video>
        </div>
        {popUp ? (
          <div className="w-screen flex items-center z-[50] justify-center h-screen bg-black bg-opacity-70 fixed  top-0 right-0">
            <div className="1000px:h-[80vh] z-[50] h-[50%] relative 1000px:w-[76%] w-[90%] mx-auto bg-transparent bg-opacity-90 rounded-[2rem] overflow-hidden">
              <div className="absolute top-4 cursor-pointer right-4 z-[50] p-3  rounded-full">
                <RxCross1
                  color="white"
                  size={40}
                  onClick={(e) => sePopUp(false)}
                />
              </div>
              <div className="w-full h-full">
                <iframe
                  id="trailer"
                  className="w-full h-full object-cover bg-cover"
                  allowfullscreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="アニメ『範馬刃牙』2期 PV第三弾│Baki Hanma Season 2 PV 3│TV＆Netflix Anime"
                  src="https://www.youtube.com/embed/bZjIQrQ6UKo?autoplay=1&amp;controls=1&amp;loop=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;widgetid=1&amp;mute=0"
                ></iframe>
              </div>
            </div>
          </div>
        ) : null}

        <ImageSlider />
      </div>
      <div className="hidden 1000px:flex left-[3vw] w-[50%%]   absolute bottom-9 gap-5">
        {images &&
          images.map((d, i) => (
            <div
              onClick={(e) => {
                setCurrent(i);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`${
                current === i ? "bg-darkRed" : "bg-white"
              } h-8 w-8 rounded-lg cursor-pointer`}
              key={i}
            ></div>
          ))}
      </div>
    </div>
  );
}
