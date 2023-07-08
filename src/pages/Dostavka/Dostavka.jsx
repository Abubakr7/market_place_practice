import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import img from "../../assets/kar41.png"
import img2 from "../../assets/kar42.png"

import React from "react";

const Dostavka = () => {
  return (
    <div>
      <div className="w-[90%] m-auto">
        <ul className="flex justify-between pt-5 text-gray-400">
          <Link to={"/About"}>
            <li>Как сделать заказ</li>
          </Link>
          <Link to={"/Career"}>
            <li>Способы оплаты</li>
          </Link>
          <Link to={"/Dostavka"}>
            <li>Доставка</li>
          </Link>
          <Link to={"/Vozvrat"}>
          <li>Возврат товара</li>
          </Link>
          <Link to={"/VozvratDen"}>
          <li>Возврат денежных средств</li>
          </Link>
          <Link to={"/Pprodaji"}>
          <li>Правила продажи</li>
          </Link>
          <Link to={"/Pptp"}>
          <li>Правила пользования торговой площадкой</li>
          </Link>
        </ul>
         <div>
        <p className="font-bold text-2xl mt-5">Доставка</p>

        <img  className="mt-5 rounded-3xl" src={img} alt="" />
         
         <p className="text-5xl mt-5">28 194</p>
         <p>Пунктов выдачи</p>

         <p className="font-bold text-2xl mt-5">Информация о доставке и пунктах выдачи</p>
         <div>
          <img src={img2} alt="" />
         </div>
        </div>




      </div>
    </div>
  );
};

export default Dostavka;
