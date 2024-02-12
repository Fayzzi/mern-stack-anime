import React from "react";
import bground from "./../../assets/bakiback.jpg";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

export default function Story() {
  const [burger, setBurger] = useState(false);
  const { user } = useSelector((state) => state.user);
  const cardStytle = (
    displayimage,
    redtext,
    afterRedText,
    numberofcard,
    lastText
  ) => {
    return (
      <div className=" hover:opacity-70 transition duration-300 cursor-pointer select-none ease-in-out rounded-md overflow-hidden">
        <div className="flex flex-col  items-center justify-center">
          <img className="rounded-md " src={displayimage} alt="" />
          <div>
            <span className="font-bold text-darkRed text-[17px]">
              {redtext}
              <span className="text-white ml-2">{afterRedText}</span>
            </span>
          </div>
          <p className="text-[17px] text-white font-semibold">
            #{numberofcard}&nbsp;{lastText}
          </p>
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bground})` }}
        className="w-full  relative"
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
        <div className="1000px:w-[85%] w-[90%] pt-[5%] pb-2 mx-auto ">
          <div className="w-[189px] mx-auto ">
            <img
              className="w-full"
              src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/story/ttl.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 my-[50px] sm:grid-cols-2 md:grid-cols-3 1000px:grid-cols-4">
            {cardStytle(
              "	https://baki-anime.jp/wp-content/uploads/2021/09/bk3_01_147.jpg",
              "第1話",
              "世界一の高校生",
              "1",
              "The World's Strongest Senior"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_02_173B.jpg",
              "第2話",
              "異“種”格闘技",
              "2",
              "Mixed species' martial arts"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_03_120.jpg",
              "第3話",
              "監獄と地獄",
              "3",
              "Prison and Hell"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_04_027.jpg",
              "第4話",
              "2(セカン)",
              "4",
              "The Second"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_05_324.jpg",
              "第5話",
              "恐怖の三つ子",
              "5",
              "Terrible Triplets"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_06_269.jpg",
              "第6話",
              "海の賊",
              "6",
              "Man of the Sea"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_07_193.jpg",
              "第7話",
              "超雄と超雄",
              "7",
              "Hyper male and Hyper male"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_08_196.jpg",
              "第8話",
              "ジルベルトスタイル",
              "8",
              "Gilberto Style"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_09_102.jpg",
              "第9話",
              "決着の刻",
              "9",
              "Decision Time"
            )}
            {cardStytle(
              "	https://baki-anime.jp/wp-content/uploads/2021/09/bk3_10_265.jpg",
              "第10話",
              "笑えねぇのかい！？",
              "10",
              "Can't you laugh?"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_11_276.jpg",
              "第11話",
              "刑務官は語る",
              "11",
              "The Prison Guard talks about it"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2021/09/bk3_12_175.jpg",
              "第12話",
              "筋肉の向こう側",
              "12",
              "Beyond the Brawn"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_13_114.jpg",
              "第13話",
              "新説人類史",
              "13",
              "New History of Mankind"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_14_074.jpg",
              "第14話",
              "完全包囲",
              "14",
              "Completely Surrounded"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_15_265.jpg",
              "第15話",
              "自然力VS武力",
              "15",
              "Nature Power VS Battle Power"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_16_026.jpg",
              "第16話",
              "ピクルの涙",
              "16",
              "Pickle's Tears"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_17_315.jpg",
              "第17話",
              "ただ会いたくて",
              "17",
              "Just Want to See You"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_18_127.jpg",
              "第18話",
              "音速の向こう側",
              "18",
              "Beyond the Sound Barrier"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_19_091.jpg",
              "第19話",
              "灼熱の時",
              "19",
              "Moment of Heat"
            )}
            {cardStytle(
              "	https://baki-anime.jp/wp-content/uploads/2023/07/bk4_20_285.jpg",
              "第20話",
              "祈る野生",
              "20",
              "Praying Savage"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_21_034.jpg",
              "第21話",
              "喰らい合い",
              "21",
              "Devouring Each Other"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_22_262.jpg",
              "第22話",
              "早贄",
              "22",
              "Food Reserve"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_23_325.jpg",
              "第23話",
              "強肉弱食",
              "23",
              "The Weak Eats the Mighty"
            )}
            {cardStytle(
              "https://baki-anime.jp/wp-content/uploads/2023/07/bk4_24_022.jpg",
              "第24話",
              "最終形態",
              "24",
              "Final Form"
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
