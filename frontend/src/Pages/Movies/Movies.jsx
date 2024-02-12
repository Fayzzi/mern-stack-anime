import React, { useState } from "react";
import bg from "./../../assets/bakiback.jpg";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Movies() {
  const [burger, setBurger] = useState(false);
  const [videolink, setVideoLink] = useState({});
  const [popUp, setPopUp] = useState(false);
  const { user } = useSelector((state) => state.user);

  const setVidetoshow = (value) => {
    setVideoLink({
      linkofvideo: value,
    });
    setPopUp(true);
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="min-h-screen   w-full bg-center bg-cover bg-no-repeat "
      >
        <div
          onClick={() => setBurger(true)}
          className="fixed select-none h-fit  cursor-pointer top-2 right-3 bg-[#a70819] p-4 rounded-md text-white"
        >
          <RxHamburgerMenu className="font-extrabold" size={35} />
          <h1 className="mt-1 800px:block">Menu</h1>
        </div>
        {burger ? (
          <div className="w-screen  min-h-screen z-[50] bg-black bg-opacity-70 h-full fixed top-0 right-0 transition-opacity duration-1000 ease-in-out">
            <div className="1000px:w-[29%] overflow-x-hidden z-[50] w-full overflow-auto fixed top-0 right-0 h-full bg-darkRed">
              <div className="relative  z-[1] h-screen">
                <div className="absolute top-4 right-4">
                  <RxCross1
                    size={30}
                    color="white"
                    className="cursor-pointer"
                    onClick={(e) => setBurger(false)}
                  />
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
        <div className="pt-[5%]  justify-center">
          <div className="w-[189px] mx-auto">
            <img
              className="w-full   object-contain"
              src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/ttl.png"
              alt=""
            />
          </div>
        </div>
        <div className=" w-[90%] pb-[40px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-11 mt-[50px]">
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/fdwPzXqA9UE?si=OzTZcohkeHPeJZWd"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.redd.it/lqfhnj10rt961.png"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              範馬勇次vs海皇角 ||
              <strong className="text-darkRed">
                {" "}
                Yujiro Hanma vs Kaku Kaioh{" "}
              </strong>
              || バキ 大擂台賽編
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/48POqJsCC2M?si=sgK3vF7i35CeLEa9"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://wallpapers.com/images/hd/baki-hd-versus-yujiro-hanma-9fijqckwkepqra1i.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">Baki VS Yujiro </strong>
              Full Fight 4K - Father VS Son | Baki Hanma Season 2 Part 2
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/unkG0N-kgck?si=xJsHg2pludFFg4fR"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://www.spieltimes.com/wp-content/uploads/2023/05/Baki-Hanma-Season-2_-Can-Baki-finally-beat-Yujiro_-2.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">Yujiro Hanma </strong>
              All Fights Compilation (ハンマユジロウオールファイト-編集)
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>

          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/sFweyF2LoHo?si=_auFt8PHxvfhTBHt"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://fictionhorizon.com/wp-content/uploads/2023/05/baki-vs-oliva.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Baki Hanma VS Biscuit Olivia the Mr.Chain{" "}
              </strong>
              Full Fight in Prison
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/WmzEMIv_Ae4?si=BqK5l91VJ2US3E6q"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/CxQokCReFTI/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">Baki Hanma VS Pickle </strong>
              Final form full Fight 4K UHD
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/VPHFPbnkp-s?si=tFn8lQFDH6Z0F09u"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/jYMkEtPiyUc/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Jack Hammer/Hanma vs Pickle{" "}
              </strong>
              - Baki hanma season 2 - English dub
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/F9VcN6t0vd4?si=_nsoFLlPbF48bQGb"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/MUBUMGxjrv8/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">Baki Hanma VS lee kaioh </strong>
              Full fight 4k
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/Lv4sz6pVxQA?si=poFsC9RucBhT3Aum"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/GqO9gm7-7FQ/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Baki Hanma VS Shunsei Kaku{" "}
              </strong>
              Quick fight Baki hanma Season 2
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/iDzWkPzbhbg?si=CntOxr1mSKAGxnql"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Baki.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Baki hanma VS Muhammed Alai Jr{" "}
              </strong>
              Baki(ONA) season 1 raitai tournament
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>

          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/itQidyfpkJk?si=Wjj737_deuhOap81"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://staticg.sportskeeda.com/editor/2023/04/b3653-16816186055488-1920.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Yuijiro Hanma VS Biscuit Olivia{" "}
              </strong>
              Baki Hanma season 2 part 2
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>

          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/c2uuGiKdtKI?si=QuAxG_Xy5LtUXiR1"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/jmoK8D5ESGM/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">
                Muhammad Ali Jr VS Jack Hanma{" "}
              </strong>
              Baki (ONA) 2020 - English Dub [60FPS]
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>

          <div
            onClick={() =>
              setVidetoshow(
                "https://www.youtube.com/embed/CDkqd-3SyRY?si=ScXMvRor6G5rIlTw"
              )
            }
            className="relative rounded-md overflow-hidden p-2 cursor-pointer hover:opacity-50 transition duration-500 hover:scale-[.95] ease-in-out"
          >
            <img
              className=" rounded-lg mb-2 object-cover "
              src="https://i.ytimg.com/vi/kpgj12VdeyM/maxresdefault.jpg"
              alt=""
            />

            <span className="text-[20px] text-white leading-9 font-semibold">
              <strong className="text-darkRed">Dinosaur Power </strong>-
              Hanayama vs Pickle | Baki Hanma S2
            </span>
            <div className="absolute top-[30%] left-0 right-0 mx-auto w-full">
              <img
                className="w-[14%] mx-auto"
                src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7.1/assets/img/movie/play.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {popUp && videolink && (
        <div className="fixed top-0 right-0 z-[50] w-full h-screen bg-black bg-opacity-50 flex items-center justify-center">
          <div className="1000px:w-[80%] w-full z-[50] relative h-[80vh] bg-transparent flex items-center justify-center  rounded-md overflow-hidden">
            <div
              onClick={(e) => {
                setPopUp(false);
              }}
              className="absolute top-4 right-4 p-6 bg-white rounded-full"
            >
              <RxCross1
                color="black"
                size={30}
                className="cursor-pointer rounded-full"
              />
            </div>
            <iframe
              width="560"
              className="w-full h-full object-cover overflow-hidden rounded-md"
              height="315"
              src={`${videolink.linkofvideo}&amp;autoplay=1&amp;mute=0&amp;loop=1&amp;controls=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
