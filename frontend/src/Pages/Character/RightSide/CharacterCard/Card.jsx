import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletecharacter } from "../../CharacterReducer/CharReducers";
import { MdDelete } from "react-icons/md";

export default function Card({ data }) {
  const [currentimag, setcurrentimage] = useState(0);
  const dispatch = useDispatch();
  const deleteChar = (id) => {
    dispatch(deletecharacter(id));
  };
  const previousImage = () => {
    const newIndex =
      (currentimag - 1 + data.photos.length) % data.photos.length;
    setcurrentimage(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentimag + 1) % data.photos.length;
    setcurrentimage(newIndex);
  };

  return (
    <div className="flex flex-col h-[300px] relative transition-opacity duration-300 ease-in-out hover:opacity-80">
      <div
        className=" h-[13rem] border rounded-lg aspect-square group transition-all ease-in-out duration-300 w-full bg-center  bg-contain bg-no-repeat relative"
        style={{
          backgroundImage: `url(http://localhost:3000/${data.photos[currentimag]})`,
        }}
      >
        {data.photos.length > 1 && (
          <div className=" relative top-[50%] flex w-full justify-between items-center">
            <button
              onClick={previousImage}
              className="transition-opacity ease-in-out duration-1000 opacity-0 group-hover:opacity-100 rounded-full"
            >
              <FaArrowCircleLeft className="w-6 h-6" color="white" />
            </button>
            <button
              onClick={nextImage}
              className="transition-opacity ease-in-out duration-1000 opacity-0 group-hover:opacity-100 rounded-full"
            >
              <FaArrowCircleRight className="w-6 h-6" color="white" />
            </button>
          </div>
        )}
        <div className="bottom-0 right-4 absolute">
          <button className="text-white" onClick={() => deleteChar(data._id)}>
            <MdDelete size={25} color="red" />
          </button>
        </div>
      </div>
      <h1 className="text-white select-none text-[19px]">{data.name}</h1>
    </div>
  );
}
