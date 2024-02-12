import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import bg from "./../../../assets/bakiback.jpg";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useSelector } from "react-redux";
export default function AdminProfile() {
  const [active, setActive] = useState(1);
  const { isAdminAuthenticated, isLoading } = useSelector(
    (state) => state.admin
  );
  if (isLoading) {
    return <div className="min-h-screen bg-white text-black">...Loading</div>;
  }
  if (!isLoading && !isAdminAuthenticated) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-[85%] mx-auto gap-2 flex py-10 ">
        <div className=" shrink-0 w-fit  ">
          <LeftSide active={active} setActive={setActive} />
        </div>
        <RightSide active={active} />
      </div>
    </div>
  );
}
