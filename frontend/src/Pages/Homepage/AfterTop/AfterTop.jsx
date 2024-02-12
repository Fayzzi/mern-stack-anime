import React from "react";
import bakihanma from "../../../assets/checkbaki.png";
export default function AfterTop() {
  return (
    <>
      <div className="relative ">
        <video
          className="w-screen h-fit object-cover object-center"
          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/intro/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute  overflow-hidden  w-full  text-center text-white z-10 top-[5px] 1000px:top-[20px] right-0">
          <img
            className="w-[45%]  mx-auto opacity-[.7]  object-cover"
            src={bakihanma}
            alt=""
          />

          <img
            src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/intro/japan_1_pc.png"
            alt="Text overlay"
            className="opacity-[.7] w-[60%] mt-1 mx-auto object-contain "
          />
        </div>
      </div>
    </>
  );
}
