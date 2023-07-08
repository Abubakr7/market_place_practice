import React, { useState } from "react";
import img9 from "../../../assets/kar43.jpg";

import { Link } from "react-router-dom";
import "../Bluzki/BluzkiM.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const AboutProduct = () => {
  return (
    <div className="bg-[white] rounded-[30px]">
      <div className="container">
        <div className="py-[30px]">
          <p>
            <Link to={"/"}>
              <span className="text-[grey] hover:text-[black] hover:border-b-[1px] border-[black]">
                Главная
              </span>
            </Link>
          </p>
          <p className="font-bold text-[26px] mt-[10px]">
            <Link to={"/Bluzki"}>
            Женские блузки и рубашки
            </Link>
          </p>
          <p className="text-[grey] text-[14px]">
            14 075 оценок Артикул:
            <span className="text-[black]"> 28267395 </span>Купили более 10 300
            раз
          </p>
          <div className="flex gap-[20px] mt-[20px]">
            <div className="w-[30%]">
              <div className="imgDropdown">
                <img
                  className="hover:border-[#cb11ab] hover:border  rounded-[5px]"
                  src={img9}
                  alt=""
                />
                <div className="imgDropdown-content">
                  <img className="rounded-[5px] " src={img9} alt="" />{" "}
                </div>
              </div>
              <div className="imgDropdown">
                <img
                  className="hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]"
                  src={img9}
                  alt=""
                />
                <div className="imgDropdown-content">
                  <img className="rounded-[5px]" src={img9} alt="" />{" "}
                </div>
              </div>
              <div>
                <img
                  className="hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]"
                  src={img9}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="hover:border-[#cb11ab] hover:border  rounded-[5px] mt-[5px]"
                  src={img9}
                  alt=""
                />
              </div>
            </div>
            <div className="sticky">
              <div>
                <img className="rounded-[10px]" src={img9} alt="" />{" "}
              </div>
            </div>
            <div className="">
              <p className="text-[30px] font-bold">
                3 042 ₽
                <span className="text-[grey] text-[16px]"> 5 850 ₽ </span>
              </p>
              <p className="text-[grey] text-[14px] py-[10px] ">
                Состав:
                <span className="text-[black]"> хлопок, Эластан 2% </span>
              </p>
              <p className="text-[grey] flex  text-[14px] items-center gap-[10px]">
                Цвет:
                <span className="text-[black]"> серый, серый меланж </span>
              </p>
              <div className="flex gap-[7px] mt-[10px]">
                <div>
                  <img className=" rounded-[5px]" src={img9} alt="" />
                </div>
                <div>
                  <img className=" rounded-[5px]" src={img9} alt="" />
                </div>
                <div>
                  <img className=" rounded-[5px]" src={img9} alt="" />
                </div>
                <div>
                  <img className=" rounded-[5px]" src={img9} alt="" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-[7px] mt-[10px] items-center">
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    30-XS <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    38-XXL <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    30-XS <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    38-XXL <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    30-XS <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    38-XXL <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    30-XS <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                  <button className="border-[1px] text-[#000000] px-[18px] focus:border-[#cb11ab] focus:border-[2px] rounded-[10px] border-[grey] hover:border-[#cb11ab]">
                    38-XXL <p className="text-[12px] text-[grey]">30-35</p>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-[20px] my-[25px]">
                <button className="bg-[#cb11ab] hover:bg-[#eb12c7] text-[white] px-[40px] font-bold py-[12px] rounded-[10px]">
                  Добавить в корзину
                </button>
                <Link to={"/login"}>
                  <FavoriteBorderIcon className="hover:text-[#cb11ab]" />
                </Link>
              </div>
              <p className="text-[14px]">
                5 июля
                <span className="text-[grey]">
                  доставка со склада Подольск WB
                </span>
              </p>
              <div className="flex gap-[20px] my-[20px]">
                <div className="bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]">
                  <div className="w-[85%] m-auto py-[5px]">
                    <div className="flex gap-[10px]">
                      <ThumbUpOffAltIcon />
                      <p>297 829</p>
                    </div>
                    <p className="text-[grey]">товаров продано</p>
                  </div>
                </div>
                <div className="bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]">
                  <div className="w-[85%] m-auto py-[5px]">
                    <div className="flex gap-[10px]">
                      <TrendingDownIcon />
                      <p>0.4%</p>
                    </div>
                    <p className="text-[grey]">товаров с браком</p>
                  </div>
                </div>
                <div className="bg-[#f6f6f9] w-[160px] flex items-center rounded-[10px]">
                  <div className="w-[85%] m-auto py-[5px]">
                    <div className="flex gap-[10px]">
                      <AccessTimeIcon />
                      <p>2года и 4мес</p>
                    </div>
                    <p className="text-[grey]">на Wildberries</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-[30px]"> Bronks </p>
                <div className="flex gap-[20px]">
                  <div className="flex gap-[5px]">
                    <SyncAltIcon />
                    <p className="text-[14px]"> 14 дней на возврат </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <LoyaltyIcon />
                    <p> Примерка </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[24px] font-bold"> О товаре </p>
            <p className="text-[16px] mt-[10px]"> Дополнительная информация </p>
            <div className="text-[14px] mt-[5px] text-[grey]">
              <span>Назначени</span> --------------------------------------{" "}
              <span>большие размеры; школа; офис</span>
            </div>
            <div className="text-[14px] mt-[2px] text-[grey]">
              <span>Утеплитель</span> --------------------------------------{" "}
              <span>Без насчеса и утеплителя</span>
            </div>
            <div className="text-[14px] mt-[2px] text-[grey]">
              <span>Тип посадки</span> --------------------------------------{" "}
              <span>момы свободные</span>
            </div>
            <div className="text-[14px] mt-[2px] text-[grey]">
              <span>Тип посадки</span> --------------------------------------{" "}
              <span>момы свободные</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
