import React from "react";
import { RxPerson } from "react-icons/rx";
import { IoPeopleSharp } from "react-icons/io5";
import { PiFiles } from "react-icons/pi";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LogoutAdmin } from "../../../Redux/AdminReducer/AdminReducer";
import { FaUserPlus } from "react-icons/fa6";

export default function LeftSide({ active, setActive }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAdminRe = async (e) => {
    navigate("/");
    dispatch(LogoutAdmin());
  };
  return (
    <div className="mt-[20vh] bg-darkRed shadow-md rounded-md w-fit  py-10 px-6 space-y-10">
      <div
        onClick={(e) => setActive(1)}
        className="shrink-0 items-center cursor-pointer flex gap-5"
      >
        <RxPerson size={25} color={`${active === 1 ? "white" : "black"}`} />
        <h1
          className={`${
            active == 1 ? "text-white" : "text-black"
          } hidden 800px:block`}
        >
          Profile
        </h1>
      </div>
      <div
        onClick={(e) => setActive(2)}
        className="shrink-0 items-center flex cursor-pointer gap-5"
      >
        <IoPeopleSharp
          size={25}
          color={`${active === 2 ? "white" : "black"}`}
        />
        <h1
          className={`${
            active == 2 ? "text-white" : "text-black"
          } hidden 800px:block`}
        >
          Users
        </h1>
      </div>
      <div
        onClick={(e) => setActive(3)}
        className="shrink-0 items-center flex cursor-pointer gap-5"
      >
        <PiFiles size={25} color={`${active === 3 ? "white" : "black"}`} />
        <h1
          className={`${
            active == 3 ? "text-white" : "text-black"
          } hidden 800px:block`}
        >
          Files
        </h1>
      </div>
      <div
        onClick={(e) => setActive(4)}
        className="shrink-0 items-center flex cursor-pointer gap-5"
      >
        <FaUserPlus size={25} color={`${active === 4 ? "white" : "black"}`} />
        <h1
          className={`${
            active == 4 ? "text-white" : "text-black"
          } hidden 800px:block`}
        >
          character
        </h1>
      </div>
      <div
        onClick={(e) => logoutAdminRe()}
        className="shrink-0 items-center flex cursor-pointer gap-5"
      >
        <AiOutlineLogout
          size={25}
          color={`${active === 5 ? "white" : "black"}`}
        />
        <h1
          className={`${
            active == 5 ? "text-white" : "text-black"
          } hidden 800px:block`}
        >
          Logout
        </h1>
      </div>
    </div>
  );
}
