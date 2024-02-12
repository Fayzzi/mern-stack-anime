import axios from "axios";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import baki from "../../assets/back.png";
import { useDispatch } from "react-redux";
import { getUserSingle } from "../../Redux/UserReducer/Reducer";

export default function LoginPage() {
  const [visible, setVisble] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("/api/v2/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
        dispatch(getUserSingle());
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/common/bg.jpg)`,
      }}
      className="relative overflow-hidden bg-no-repeat b-cover bg-center flex  justify-center "
    >
      <div className="flex-1  relative min-h-screen w-screen flex flex-col justify-center items-center">
        <div className="800px:absolute 800px:py-5 800px:px-5 mx-auto 800px:top-0 800px:left-0">
          <Link to={"/"}>
            <img
              className="w-[300px]"
              src="
              https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/footer/logo_BW.png"
              alt=""
            />
          </Link>
        </div>
        <div className=" absolute   hidden 1000px:block  overflow-hidden  1000px:right-[-100px]   p-0 m-0">
          {" "}
          <img className=" h-full opacity-50" src={baki} alt="" />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
            Login To Your Account
          </h1>
        </div>
        <div className="z-[1]  sm:max-w-md w-[90%] mx-auto  border shadow-md py-5  px-8 mt-6 rounded-lg">
          <form action="" onSubmit={handleLogin} className="space-y-4">
            <div className="mb-3">
              <div className="mb-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-white"
                >
                  {" "}
                  Email
                </label>
              </div>
              <input
                required
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                className="appearance-none p-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-3 ">
              <div className="mb-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-white"
                >
                  {" "}
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type={`${visible == true ? "text" : "password"}`}
                  autoComplete="email"
                  className="appearance-none select-none p-2 border rounded-lg w-full shadow-sm focus:outline-none focus:ring-blue-500  focus:border-blue-500"
                />
                {visible === true ? (
                  <AiOutlineEyeInvisible
                    onClick={(e) => setVisble(!visible)}
                    size={28}
                    className="absolute cursor-pointer select-none right-2 top-2"
                  />
                ) : (
                  <AiOutlineEye
                    onClick={(e) => setVisble(!visible)}
                    size={28}
                    className="absolute cursor-pointer select-none right-2 top-2"
                  />
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div className=" ml-1 flex gap-2 items-center">
                <input
                  id="rember-check"
                  type="checkbox"
                  className="h-4 cursor-pointer w-4"
                />
                <label
                  htmlFor="rember-check"
                  className="select-none cursor-pointer text-white text-md"
                >
                  remember me
                </label>
              </div>
              <h1 className="text-[16px] text-[red] cursor-pointer select-none">
                Forgot password?
              </h1>
            </div>
            <button className="w-full !mt-7 bg-darkRed h-[50px]  flex items-center justify-center text-white rounded-xl cursor-pointer">
              Log In
            </button>
          </form>
          <h1 className="mt-3 text-white">
            Not Have Account?
            <Link to={"/signUp"} className="ml-2 text-[red] font-[600] ">
              Signup here!
            </Link>
          </h1>
          <h1 className="mt-3 text-white">
            Login as admin
            <Link to={"/adminLogin"} className="ml-2 text-[red] font-[600] ">
              Login!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
