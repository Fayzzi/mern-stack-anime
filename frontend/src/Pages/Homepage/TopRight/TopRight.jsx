import React, { useEffect, useState } from "react";

export default function TopRight({ images, currentImage }) {
  return (
    <div className="1300px:w-[85%]  w-full min-h-[180vh] hidden 1000px:block relative overflow-hidden   mx-auto  ">
      <img
        src={images[currentImage]}
        className="h-full   absolute top-0 right-0 block  "
        alt=""
      />
    </div>
  );
}
