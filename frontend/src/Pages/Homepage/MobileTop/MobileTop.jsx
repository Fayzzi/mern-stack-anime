import React, { useEffect, useState } from "react";

export default function MobileTop() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(newImage, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);
  const images = [
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual4.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual3.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual2.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual1.jpg",
  ];
  const newImage = () => {
    const newsel = (currentImage + 1) % images.length;
    setCurrentImage(newsel);
  };
  const prevIma = () => {
    const newsel = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(newsel);
  };
  return (
    <div className="w-[100%] 1000px:hidden block  h-[125vh] overflow-hidden relative">
      <img
        className="absolute 800px:w-[85%] h-[100%]"
        src={images[currentImage]}
        alt=""
      />
      <div className="absolute w-[50%] left-0 right-0 mx-auto bottom-0 opacity-80">
        <img
          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/logo_black.png"
          alt=""
          className="w-full "
        />
      </div>
    </div>
  );
}
