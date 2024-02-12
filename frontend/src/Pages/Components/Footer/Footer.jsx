import React from "react";

export default function Footer() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/footer/bg.png)`,
        }}
        className=" flex items-center flex-col justify-center min-h-[50vh] bg-bottom bg-cover bg-no-repeat"
      >
        <div className="w-[90px]">
          <img
            src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/share/share.png"
            alt=""
          />
        </div>
        <div className="mt-4 flex gap-2">
          <div className="w-[50px]">
            <img
              src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/share/tw.png"
              alt=""
            />
          </div>
          <div className="w-[50px] ">
            <img
              src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/share/fb.png"
              alt=""
            />
          </div>
        </div>
        <p className="mt-7 select-none">
          &copy;板垣恵介(秋田書店)／範馬刃牙製作委員会
        </p>
      </div>
    </>
  );
}
