// FileUploads.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

export default function FileUploads() {
  const [left, setLeft] = useState(1);

  return (
    <>
      <div className="w-fit flex mx-auto text-white gap-2">
        <div
          onClick={() => setLeft(1)}
          className={`${
            left === 1 ? "bg-darkRed text-white" : "bg-black text-darkRed"
          } p-2  text-[17px] 800px:px-4 800px:py-3 cursor-pointer select-none rounded-md 800px:text-[22px] font-extrabold`}
        >
          <h1>Upload New Episode</h1>
        </div>
        <div
          className={`${
            left === 2 ? "bg-darkRed text-white" : "bg-black text-darkRed"
          } p-2  text-[17px] 800px:px-4 800px:py-3 cursor-pointer select-none rounded-md 800px:text-[22px] font-extrabold`}
          onClick={(e) => setLeft(2)}
        >
          <h1>Uploaded&nbsp;Episodes</h1>
        </div>
      </div>
      {left === 1 && <LeftSide />}

      {left === 2 && <RightSide />}
    </>
  );
}
