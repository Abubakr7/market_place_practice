import React from "react";

import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

const VozratDen = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="dark:bg-black dark:text-white">
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
        <div className="mt-5 pb-10">
        <p className="text-2xl font-bold">Возврат денежных средств</p>
        <p className="mt-5 text-gray-500">
          Возврат денежных средств Покупателю Вайлдберриз осуществляется
          следующими способами:
        </p>
        <p className="text-2xl mt-10">Безналичный расчет</p>
        <p className="text-2xl mt-10">Кредит или рассрочка</p>
        <p className="text-2xl mt-10">Баланс</p>
      </div>
      </div>

      
    </div>
  );
};

export default VozratDen;
