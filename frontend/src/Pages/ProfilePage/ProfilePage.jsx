// ProfilePage.js
import React from "react";
import bg from "./../../assets/bakiback.jpg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Logoutuser, getSingleUser } from "../../Redux/UserReducer/Reducer";

const ProfilePage = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    navigate("/");
    dispatch(Logoutuser());
  };
  if (loading) {
    return <div className="min-h-screen bg-black text-white">...Loading</div>;
  }
  if (!loading && !isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="w-[75%] 1000px:pt-[60px] pt-[20px] mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-white font-bold text-[55px]">Profile Page</h1>
        </div>
      </div>
      <div className="mt-[30px] w-[80%] mx-auto">
        <h1 className="text-white font-bold text-[35px]">
          Logged in as:<strong className="text-darkRed">{user?.email}</strong>
        </h1>
        <button
          onClick={handleLogout}
          className="px-6 py-2 mt-5 bg-darkRed text-white rounded-xl"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
