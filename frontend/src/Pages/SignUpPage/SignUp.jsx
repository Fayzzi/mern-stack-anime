import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxPerson, RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import baki from "../../assets/back.png";
import Store from "../../Redux/UserStore";
export default function SignUp() {
  const navigate = useNavigate();
  const [visible, setVisble] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState();
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("file", picture);
    axios
      .post("/api/v2/user/signUp", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
        setPicture();
        setName("");
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        console.log(e);
      });
  };
  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };
    const popChnages = () => {
      reloadPage();
    };
    const hashchange = () => {
      reloadPage();
    };
    window.addEventListener("popstate", popChnages);
    window.addEventListener("hashchange", hashchange);
    return () => {
      window.removeEventListener("popstate", popChnages);
      window.removeEventListener("hashchange", hashchange);
    };
  });
  const handelfile = (e) => {
    setPicture(e.target.files[0]);
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/common/bg.jpg)`,
      }}
      className="relative overflow-hidden bg-no-repeat b-cover bg-center flex  justify-center "
    >
      {" "}
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
          <img className=" opacity-50" src={baki} alt="" />
        </div>
        <div className="sm:w-full 800px:mt-[5rem] z-[1] sm:max-w-md sm:mx-auto">
          <h1 className="text-3xl font-extrabold text-center text-white">
            SignUp to Your Account
          </h1>
        </div>
        <div className="w-[90%] z-[1] px-8 py-5 border shadow-md rounded-md mt-6 sm:max-w-md mx-auto">
          <form action="" onSubmit={HandleSubmit} className="space-y-5">
            <div>
              <div className="mb-2">
                <label className="text-sm font-medium text-white" htmlFor="">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="w-full appearance-none border py-2 px-3 block  rounded-md border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
              />
            </div>
            <div>
              <div className="mb-2">
                <label className="text-sm font-medium text-white" htmlFor="">
                  Email
                </label>
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full border shadow-sm p-2 rounded-md appearance-none select-none focus:border-blue-500 focus:ring-blue-500  focus:outline-none"
              />
            </div>
            <div>
              <div className="mb-2">
                <label className="text-sm font-medium text-white" htmlFor="">
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
            <div className="mt-2 flex items-center">
              <span>
                {picture ? (
                  <img
                    src={URL.createObjectURL(picture)}
                    alt="Picture"
                    className="h-10 w-10 object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar color="white" className="h-10 w-10" />
                )}
              </span>
              <label
                htmlFor="fileInput"
                className="ml-5 flex items-center text-sm font-medium text-black cursor-pointer  bg-gray-300 hover:bg-gray-50 justify-center px-4 py-2 border-gray-300 rounded-md shadow-sm"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name="profile"
                  className="w-full h-full hidden"
                  id="fileInput"
                  accept=".jpg,.jpeg,.png"
                  onChange={handelfile}
                />
              </label>
            </div>
            <button className="w-full !mt-7 bg-darkRed h-[50px]  flex items-center justify-center text-white rounded-xl cursor-pointer">
              Sign Up
            </button>
          </form>
          <h1 className="mt-3 text-white">
            Already registered?{" "}
            <Link className="ml-2 text-darkRed font-[600]" to={"/login"}>
              Login here!!
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
