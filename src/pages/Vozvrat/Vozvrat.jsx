import React from "react";
import "./Vozvrat.css";

import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import "animate.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const Vozvrat = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="dark:bg-black dark:text-white ">
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

        <div className="mt-5">
          <p className="font-bold text-2xl">
            Возврат товара надлежащего качества
          </p>
          <p className="font-bold mt-5">Условия возврата</p>
          <p className="mt-5">
            Товар принимается к возврату только в полной комплектации, со всеми
            упаковками и наклейками, в неношеном/неиспользованном виде
          </p>
          <p className="font-bold mt-5">Причины возврата</p>
          <p className="mt-5">-Не подошел размер, фасон, цвет, длина и т.п.</p>
          <p className="mt-5">
            -Оттенок полученного товара отличается от оттенка модели с
            фотографии на сайте
          </p>
          <p className="mt-5 font-bold">Срок возврата</p>
          <p className="mt-5">
            Срок возврата товара надлежащего качества составляет 14 дней с
            момента получения товара, если иное не было оговорено при продаже
            товара
          </p>
          <p className="font-bold mt-5">Как вернуть товар</p>
          <p className="font-bold mt-5">
            1.В пункты выдачи/возврата Wildberries
          </p>
          <p className="ml-5 mt-5">
            Покупатель может самостоятельно вернуть неподошедший товар в наши
            фирменные пункты выдачи/возврата
          </p>
          <p className="font-bold mt-5">2.Курьером Wildberries</p>
          <p className="mt-5 ml-5">
            Услуга доступна для населенных пунктов, куда осуществляется доставка
            курьером
          </p>
          <p className="mt-5 ml-5">
            Курьером можно вернуть не более 10 позиций в день. Количество
            товаров для возврата в пункты выдачи не ограничено
          </p>
          <p className="mt-10 font-bold text-2xl">
            Возврат товара ненадлежащего качества
          </p>
          <p className="mt-5 font-bold">Причина возврата</p>
          <p className="mt-5">Производственный недостаток (брак) товара</p>
          <p className="mt-5 font-bold">Срок возврата</p>
          <p className="mt-5">
            Покупатель может вернуть товар в течение гарантийного срока,
            установленного производителем.
          </p>
          <p>
            Если гарантийный срок производителем не установлен, срок для
            возврата составляет 2 (два) года.
          </p>
          <p className="mt-5 font-bold">Как вернуть товар</p>
          <p className="mt-5">
            - Оформить заявку в Личном кабинете. Срок рассмотрения заявки не
            превышает 7 (семь) рабочих дней
          </p>
          <p className="mt-5">
           - В случае, если по результату рассмотрения заявки продавцом принято
            положительное решение, покупатель может вернуть товар в Пункт выдачи
            Wildberries
          </p>
          <p className="mt-5">
           - В случае отклонения заявки, покупатель вправе обратиться в
            независимую экспертизу. В случае, если независимой экспертизой будет
            подтверждено право покупателя на возврат товара, все расходы
            покупателя, связанные с проведением независимой экспертизы подлежат
            возмещению продавцом
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vozvrat;
