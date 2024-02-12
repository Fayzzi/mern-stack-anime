import React, { useState } from "react";
import bg from "../../assets/bakiback.jpg";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
export default function Cast() {
  const [burger, setBurger] = useState(false);
  const [navi, setNavi] = useState(1);
  const { user } = useSelector((state) => state.user);
  const setNavigation = (value) => {
    setNavi(value);
  };
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col items-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="800px:w-[85%] w-full  mt-[7%]">
          <div className="w-[250px] 1000px:w-[350px] 1000px:mb-[60px] mx-auto ">
            <img
              className="w-full object-contain"
              src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/ttl.png"
              alt=""
            />
          </div>
          <div className="my-[40px] items-center justify-center flex gap-2">
            <button
              onClick={(e) => {
                setNavigation(1);
              }}
              className={`px-6 py-3 rounded-md ${
                navi === 2 ? "bg-darkRed text-white" : "bg-black text-darkRed"
              } text-[14px] md:text-[16px] lg:text-[22px] font-bold`}
            >
              シャドー編・監獄バトル編（1期）
            </button>
            <button
              onClick={(e) => {
                setNavigation(2);
              }}
              className={`p-3 rounded-md ${
                navi === 1 ? "bg-darkRed text-white" : "bg-black text-darkRed"
              } text-[14px] md:text-[16px] lg:text-[22px] font-bold`}
            >
              野人戦争編・親子喧嘩編（2期）
            </button>
          </div>
          {navi === 1 ? (
            <>
              <div className="flex flex-col">
                <div className="w-[75%] mx-auto">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-8 my-[50px] sm:grid-cols-3 md:grid-cols-3 1000px:grid-cols-3">
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/0.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;地下闘技場チャンピオン
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;範馬刃牙
                        </p>
                        <p className="text-[16px] text-white">
                          Baki&nbsp;Hanma
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/1.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;地上最強の生物
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;範馬勇次郎
                        </p>
                        <p className="text-[16px] text-white">
                          Yujiro &nbsp;Hanma
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/2.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp; 地上最自由
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;ビスケット・オリバ
                        </p>
                        <p className="text-[16px] text-white">
                          Biscuit &nbsp;Oliva
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[50px] w-[98%] mx-auto">
                  <div className="grid items-center justify-center grid-cols-3 gap-y-8 gap-x-6 md:grid-cols-3 lg:grid-cols-5">
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/5.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ジュン・ゲバル
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Jun&nbsp;Guevara
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/6.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;マリア;
                          </span>
                        </div>

                        <p className="text-[16px] text-white">Maria</p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/4.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;鮎川ルミナ
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Rumina&nbsp;Ayukawa
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/3.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ゲリー・ストライダム
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Gerry&nbsp;Strydum
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/10.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;鮎川ルミナ
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Rumina&nbsp;Ayukawa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-[40px] w-[75%]  mx-auto">
                  <div className="grid items-center justify-center grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/7.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;アイアン・マイケル
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Iron&nbsp;Michael
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/8.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;リップ、トゥース、タング
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Lips,Teeth,Tongue
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/11.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;カモミール・レッセン
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Chamomile&nbsp;Lessen
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/1st/9.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ボブ・マッカーシー
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Bob&nbsp;McCarthy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {navi === 2 ? (
            <>
              <div className="flex flex-col">
                <div className="w-[75%] mx-auto">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-8 my-[50px] sm:grid-cols-3 md:grid-cols-3 1000px:grid-cols-3">
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/0.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;地下闘技場チャンピオン
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;範馬刃牙
                        </p>
                        <p className="text-[16px] text-white">
                          Baki&nbsp;Hanma
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/1.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;地上最強の生物
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;範馬勇次郎
                        </p>
                        <p className="text-[16px] text-white">
                          Yujiro &nbsp;Hanma
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/2.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp; 時空を超えた最強野性
                          </span>
                        </div>
                        <p className="text-[20px] lg:text-[22px] text-white my-1 font-bold">
                          &nbsp;ピクル
                        </p>
                        <p className="text-[16px] text-white">Pickle</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="1000px:mb-[50px] w-[75%] mx-auto">
                  <div className="grid items-center justify-center grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-4">
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/4.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;烈海王
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Retsu&nbsp;Kaioh
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/5.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;愚地克巳;
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Katsumi&nbsp;Orochi
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/6.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ジャック・ハンマー
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Jack&nbsp;Hammer
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/7.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;愚地独歩
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Doppo&nbsp;Orochi
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/8.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;渋川剛気
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Goki&nbsp;Shibukawa
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/9.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;鎬昂昇
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Kosho&nbsp;Shinogi
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/10.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;鎬紅葉
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Kureha&nbsp;Shinogi
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/11.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;寂海王
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Jaku&nbsp;Kaioh
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/12.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ガイア
                          </span>
                        </div>

                        <p className="text-[16px] text-white">Gaia</p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/13.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;花山薫
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Kaoru&nbsp;Hanayama
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/18.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;柴千春
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Chiharu&nbsp;Shiba
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/14.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;郭海皇
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Kaku&nbsp;Kaioh
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/19.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;松本梢江
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Kozue&nbsp;Matsumoto
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/15.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;朱沢江珠
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Emi&nbsp;Akezawa
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/17.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;カイザー
                          </span>
                        </div>

                        <p className="text-[16px] text-white">Kaiser</p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/3.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;アルバート・ペイン
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Albert&nbsp;Payne
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/20.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;徳川光成
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Mitsunari&nbsp;Tokugawa
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/21.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;ゲリー・ストライダム
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Gerry&nbsp;Strydum
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/22.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;鮎川ルミナ
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Rumina&nbsp;Ayukawa
                        </p>
                      </div>
                    </div>
                    <div className=" rounded-md overflow-hidden">
                      <div className="flex flex-col  items-center justify-center">
                        <img
                          className="object-contain aspect-square"
                          src="	https://baki-anime.jp/wp-content/themes/baki3_theme_v7/assets/img/character/nav/2nd/16.jpg"
                          alt=""
                        />
                        <div>
                          <span className="text-white text-[16px] ml-2">
                            &nbsp;範馬勇一郎
                          </span>
                        </div>

                        <p className="text-[16px] text-white">
                          Yuichiro&nbsp;Hanma
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
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
      </div>
      <Footer />
    </>
  );
}
