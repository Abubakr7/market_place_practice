import React from "react";
import img from "../../assets/tovar/kar1.jpg";
import img2 from "../../assets/tovar/kar2.jpg";
import img3 from "../../assets/tovar/kar3.jpg";
import img4 from "../../assets/tovar/kar4.jpg";
import img5 from "../../assets/tovar/kar5.jpg";
import img6 from "../../assets/tovar/kar6.jpg";
import img7 from "../../assets/tovar/kar7.jpg";
import img8 from "../../assets/tovar/kar8.jpg";
import img9 from "../../assets/tovar/kar9.jpg";
import img10 from "../../assets/tovar/kar.jpg";
import Swiper from "../../components/Swiper";

import "animate.css";

import { useTranslation } from "react-i18next";

import "../../App.css";

import "../Home/home.css";
import Card from "../../components/Card";

const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const menu = [
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
    {
      img: img9,
      title1: " 1 819 ₽  ",
      title11: "  2 599 ₽ ",
      title2: "RayXona shop / Рубашка с объемным рукавом",
      title3: "4.3 214 оценок",
      title4: "42 44 46 48 50",
      title5: "Доставка после завтра",
    },
  ];

  return (
    <div className="dark:bg-gray-950 dark:text-white rounded-3xl">
      <div className="w-[95%] m-auto pt-5 ">
        <Swiper />

        <div className="mt-5">
          <div className="flex justify-between items-center">
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img2}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img3}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img4}
              alt=""
            />
          </div>
          <div className="flex justify-between items-center mt-5">
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img5}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img6}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img7}
              alt=""
            />
            <img
              className=" rounded-2xl hover:animate-pulse w-[23%]"
              src={img8}
              alt=""
            />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-3xl">Хиты продаж</h1>
        </div>
        <div >
          <div className="w-[100%] flex mt-5">
            {menu.map((el) => {
              return <Card  key={el.id} {...el} />;
            })}
          </div>
        </div>
        <div >
          <div className="w-[100%] flex mt-5 pb-10">
            {menu.map((el) => {
              return <Card  key={el.id} {...el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
