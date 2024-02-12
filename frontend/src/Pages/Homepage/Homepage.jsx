import React, { useState } from "react";
import HomeTopLeft from "./TopLeft/HomeTopLeft";
import { CiMenuBurger } from "react-icons/ci";
import AfterTop from "./AfterTop/AfterTop";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import TopRight from "./TopRight/TopRight";
import MobileTop from "./MobileTop/MobileTop";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

export default function Homepage() {
  const [burger, setBurger] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { user } = useSelector((state) => state.user);
  const { admin } = useSelector((state) => state.admin);

  const images = [
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual4.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual3.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual2.jpg",
    "https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/top/visual1.jpg",
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/common/bg.jpg)`,
        }}
        className="m-0 p-0  bg-no-repeat bg-center bg-cover"
      >
        <div className="1000px:grid  flex flex-col m-0 p-0 1000px:grid-cols-[1fr_2fr] w-full">
          <MobileTop />
          <HomeTopLeft
            images={images}
            current={currentImage}
            setCurrent={setCurrentImage}
          />
          <TopRight images={images} currentImage={currentImage} />
        </div>
        <div className="">
          <AfterTop />
        </div>
        <Footer />
        <div
          onClick={() => setBurger(true)}
          className="fixed z-[50] select-none h-fit  cursor-pointer top-2 right-3 bg-[#a70819] p-4 rounded-md text-white"
        >
          <RxHamburgerMenu className="font-extrabold" size={35} />
          <h1 className="mt-1 800px:block">Menu</h1>
        </div>
        {burger ? (
          <div className="w-screen  min-h-screen z-[50] bg-black bg-opacity-70 h-full fixed top-0 right-0 transition-opacity duration-1000 ease-in-out">
            <div className="1000px:w-[29%] overflow-x-hidden z-[50] w-full overflow-auto fixed top-0 right-0 h-full bg-darkRed">
              <div className="relative  z-[1] h-screen">
                <div className="flex p-2 items-center justify-between">
                  <div>
                    {admin ? (
                      <Link to={"/adminProfile"} className="p-2">
                        <img
                          src={"http://localhost:3000/" + admin.avatar}
                          className="h-12 rounded-full bg-white w-12 object-cover "
                          alt=""
                        />
                      </Link>
                    ) : null}
                  </div>
                  <div className="">
                    <RxCross1
                      size={30}
                      color="white"
                      className="cursor-pointer"
                      onClick={(e) => setBurger(false)}
                    />
                  </div>
                </div>
                <ul className="flex flex-col z-[1] pt-[1rem] px-8">
                  <div className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      NEWS
                    </li>
                    <h1 className="mt-[-5px] font-bold">news</h1>
                  </div>
                  <Link to={"/story"} className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      STORY
                    </li>
                    <h1 className="mt-[-5px] font-bold">story</h1>
                  </Link>
                  <Link to={"/cast"} className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      CAST&STAFF
                    </li>
                    <h1 className="mt-[-5px] font-bold">cast and staff</h1>
                  </Link>
                  <Link to={"/movies"} className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      MOVIE
                    </li>
                    <h1 className="mt-[-5px] font-bold">movie</h1>
                  </Link>
                  <div className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      PRODUCTS
                    </li>
                    <h1 className="mt-[-5px] font-bold">
                      products information
                    </h1>
                  </div>
                  <div className="my-2 p-0">
                    <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                      SPECIAL
                    </li>
                    <h1 className="mt-[-5px] font-bold">special</h1>
                  </div>
                  {user ? (
                    <Link to={"/profile"} className="my-2 p-0">
                      <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                        {user.name}
                      </li>
                    </Link>
                  ) : (
                    <Link to={"/login"} className="my-2 p-0">
                      <li className="list-none no-underline font-extrabold 1000px:text-[2.4rem] text-[1.9rem] text-white ">
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
                <div className="absolute top-[1rem] 1000px:right-[-30%] right-[-10%] z-[-1]">
                  <img
                    className="h-[90vh]"
                    src=" https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/footer/baki_zensin.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
