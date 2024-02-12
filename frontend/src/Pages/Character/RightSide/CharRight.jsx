import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcharacters } from "../CharacterReducer/CharReducers";
import Card from "./CharacterCard/Card";

export default function CharRight() {
  const { characters } = useSelector((state) => state.allchar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcharacters());
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-white text-[1.5rem]  pt-[3%] lg:text-[30px] font-bold ">
        All Characters
      </h1>
      <div className="grid my-6 gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols:3 xl:grid-cols-4">
        {characters && characters.map((d, i) => <Card key={i} data={d} />)}
      </div>
    </div>
  );
}
