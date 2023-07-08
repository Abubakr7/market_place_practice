import Card from "../../components/Card";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import img from "../../assets/kar33.jpg";
import img2 from "../../assets/kar34.jpg";
import img3 from "../../assets/kar35.jpg";
import img4 from "../../assets/kar36.jpg";
import img5 from "../../assets/kar37.jpg";
import img6 from "../../assets/kar38.jpg";
import img7 from "../../assets/kar39.jpg";
import img8 from "../../assets/kar40.jpg";

import "../About/About.css";

const About = () => {
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

        <div className="mt-5">
          <h1 className="font-bold text-3xl">Как сделать заказ</h1>
          <h1 className="font-bold text-3xl mt-3">
            1. Войти или зарегистрироваться
          </h1>
          <p className="mt-3">
            Оформить заказ можно только в личном кабинете. Войдите или
            зарегистрируйтесь по номеру телефона:
          </p>

          <img className="mt-5" src={img} alt="" />
          <p className="font-bold text-3xl mt-3">
            2. Добавить товар в «Корзину»
          </p>
          <p className="mt-5">
            В карточке товара выберите подходящий размер и нажмите «Добавить в
            корзину»:
          </p>
          <img src={img2} alt="" />
          <p className="mt-5">
            Для выбора подходящего размера по параметрам фигуры нажмите ссылку
            «Таблица размеров»:
          </p>
          <img className="mt-5" src={img3} alt="" />
          <p className="font-bold text-3xl">3. Перейти в корзину</p>
          <p className="mt-3">
            Для продолжения оформления заказа перейдите в «Корзину».
          </p>
          <p className="mt-3">
            По клику на кнопку «Перейти в корзину» в карточке товара:
          </p>
          <img src={img4} alt="" />
          <p className="mt-3">
            Или нажав на корзину в правом верхнем углу сайта:
          </p>
          <img src={img5} alt="" />
          <p className="font-bold text-3xl">4. Проверить заказ</p>
          <p className="mt-3">
            Проверьте состав заказа. Измените количество, отложите или удалите
            товар, если ошиблись с выбором:
          </p>
          <img className="mt-3" src={img6} alt="" />
          <p className="font-bold text-3xl">5. Выбрать адрес доставки</p>
          <p className="mt-3">Выберите способ доставки.</p>
          <div className="w-[95%] m-auto">
            <p className="mt-3 font-bold text-2xl">
              5.1 Доставка в пункт выдачи
            </p>
            <p className=" mt-3">
              Выберите удобный пункт выдачи товаров, нажав «Выбрать пункт
              выдачи»:
            </p>
            <img className="mt-3" src={img7} alt="" />
            <p className="mt-3">
              В пункте выдачи Вы можете проверить и примерить товары. Пункты
              оборудованы удобными примерочными.
            </p>
            <p className="font-bold text-2xl mt-3">5.2 Доставка курьером</p>
            <p className="mt-3">
              Для указания адреса доставки нажмите «Выбрать адрес»:
            </p>
            <img src={img8} alt="" />
            <p className="mt-3">
              После поступления заказанных товаров, курьер свяжется с Вами для
              уточнения даты и времени доставки.
            </p>
            <p className="mt-3">
              При доставке у Вас будет 20 минут на примерку и проверку товара.
            </p>
          </div>
          <p className="mt-3 font-bold text-3xl">6. Выбрать способ оплаты</p>
          <p className="mt-3">Выберите способ оплаты из предложенных.</p>
          <p className="mt-3 font-bold text-3xl">7. Завершить оформление заказа</p>
          <p className="mt-3">Нажмите кнопку «Оплатить заказ». После поступления оплаты заказ будет оформлен.</p>
          <p className="mt-3">Отслеживать информацию о заказе можно в разделе личного кабинета «Покупки».</p>
        </div>
      </div>
    </div>
  );
};

export default About;
