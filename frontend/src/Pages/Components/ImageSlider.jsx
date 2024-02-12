import React, { useState, useEffect } from "react";

const images = [
  "https://baki-anime.jp/wp-content/uploads/2021/07/banner-top_past-1st.jpg",
  "https://baki-anime.jp/wp-content/uploads/2023/10/b4821aa8d6d8b6fd58c1f71e386d2fd7.jpg",
  "https://baki-anime.jp/wp-content/uploads/2023/10/70d8af43958b307f1d3621f54f0ef01e.jpg",
  "https://baki-anime.jp/wp-content/uploads/2023/09/bnr_baki-shironeko750.jpg",
  "https://baki-anime.jp/wp-content/uploads/2021/07/banner-top_baki30th.jpg",
  "https://baki-anime.jp/wp-content/uploads/2021/07/banner-top_past-2nd.jpg",
  "https://baki-anime.jp/wp-content/uploads/2021/07/banner-top_past-1st.jpg",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    const setNew = (currentImage + 1) % images.length;
    setCurrentImage(setNew);
  };

  const prevImage = () => {
    const setNew = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(setNew);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="overflow-hidden  relative mx-auto w-fit">
      <div
        style={{
          transform: `translateX(-${currentImage * 100}%)`,
        }}
        className="flex transition-transform z-[-1] ease-in-out duration-500 "
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="w-full h-auto object-cover"
          />
        ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        {images.length > 1 && (
          <div className="flex gap-1">
            {images.map((image, index) => (
              <div
                onClick={() => setCurrentImage(index)}
                key={index}
                className={`${
                  index === currentImage ? "bg-[#a70819]" : "bg-gray-100"
                } h-2 m-[2px] w-2 transition-all duration-1000 ease-in-out cursor-pointer rounded-full `}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
