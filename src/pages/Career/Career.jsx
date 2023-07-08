import React from "react";

import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Career = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="w-[95%] m-auto">
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
          <p className="text-3xl font-bold">Способы оплаты</p>
          <p className="mt-5 text-xl text-gray-400">Понравившиеся вещи Вы можете оплатить перечисленными ниже способами.</p>
          <p className="mt-5 font-bold text-xl">Банковская карта</p>
          <p className="mt-5 font-bold text-xl">Оплата через СБП (Систему быстрых платежей)</p>
          <p className="mt-5 font-bold text-xl">Оплата в кредит или рассрочку</p>
          <p className="mt-5 font-bold text-xl">Оплата балансом</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
