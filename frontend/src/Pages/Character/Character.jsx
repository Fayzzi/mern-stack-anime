import React, { useState } from "react";
import CharLeft from "./LeftSide/CharLeft";
import CharRight from "./RightSide/CharRight";

export default function Character() {
  const [Char, setChar] = useState(1);
  return (
    <>
      <div className="w-fit mx-auto flex gap-2">
        <div
          onClick={(e) => setChar(1)}
          className={`p-2  text-[1.5rem] 800px:px-4 800px:py-3 cursor-pointer select-none rounded-md  font-extrabold ${
            Char === 1 ? "text-white bg-darkRed" : "text-darkRed bg-black"
          }`}
        >
          Add Character
        </div>
        <div
          onClick={(e) => setChar(2)}
          className={`p-2  text-[1.5rem] 800px:px-4 800px:py-3 cursor-pointer select-none rounded-md  font-extrabold ${
            Char === 2 ? "text-white bg-darkRed" : "text-darkRed bg-black"
          }`}
        >
          Characters
        </div>
      </div>
      {Char === 1 && <CharLeft />}
      {Char === 2 && <CharRight />}
    </>
  );
}
