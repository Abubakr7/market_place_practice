import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import "../../src/App.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import img from "../assets/kar24.png";
import img2 from "../assets/kar25.png";
import img3 from "../assets/kar30.jpg";
import img4 from "../assets/kar31.jpg";
import img5 from "../assets/kar32.jpg";

import "animate.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../layout/Layout.css";
import TemporaryDrawer from "./components/Menu";
import MultipleSelectCheckmarks from "./components/select";

const Layout = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="dark:bg-black dark:text-white">
      <div className="w-[100%] bgheader p-5 pb-10">
        <div className="w-[100%] flex">
          <div className="w-[60%] flex justify-between items-center">
            <div className="dropdown3">
              <div>
                <MultipleSelectCheckmarks />
              </div>

              {/* <div className="dropdown-content3">
                <div className="flex justify-evenly items-center">
                  <img className="ml-0.5" src={img3} alt="" />
                  <p>RUB</p>
                  <p>Российский рубль</p>
                </div>
                <div className="flex justify-evenly items-center">
                  <img className="ml-2" src={img4} alt="" />
                  <p>BYN</p>
                  <p>Белорусский рубль</p>
                </div>
                <div className="flex justify-evenly items-center">
                  <img className="ml-3" src={img5} alt="" />
                  <p>KZT</p>
                  <p>Казахстанский тенге</p>
                </div>
              </div> */}
            </div>

            <div className="flex items-center">
              <LocationOnIcon />
              <p>Москва</p>
            </div>

            <div className=" w-[30%] p-1 flex justify-center items-center rounded-full text-white bg-violet-500">
              <Link
                to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}
              >
                <p>Продавайте на Wildberries</p>
              </Link>
            </div>

            <div className=" w-[25%] p-1 flex justify-center items-center rounded-full text-white bg2">
              <Link
                to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}
              >
                <p>Работа в Wildberries</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <TemporaryDrawer />
          <div>
            <Link to={"/"}>
              <h1 className="text-5xl text-white">WILDBERRIES</h1>
            </Link>
          </div>
          <div className="w-[50%]">
            <input
              placeholder="   Я ищу..."
              className="w-[100%] h-[10vh] rounded-full text-2xl"
              type="text"
            />
          </div>
          <div className=" w-[20%] flex justify-evenly text-white">
            <div>
              <Link to={"About"}>
                <LocationOnIcon
                  className="ml-2"
                  sx={{ color: "white", fontSize: 35 }}
                />
                <p className="text-gray-200">Адреса</p>
              </Link>
            </div>
            <Link to={"/Login"}>
              <div>
                <PermIdentityIcon
                  className="ml-0"
                  sx={{ color: "white", fontSize: 35 }}
                />
                <p className="text-gray-200">Войти</p>
              </div>
            </Link>
            <Link to={"/Korzina"}>
              <div>
                <LocalGroceryStoreIcon
                  className="ml-1"
                  sx={{ color: "white", fontSize: 35 }}
                />
                <p className="text-gray-200">Корзина</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />

      <footer className="w-[100%]  sm:h-[100vh] bg-violet-900 ">
        <div className="w-[90%] m-auto  flex justify-between">
          <div className="text-lg text-gray-300 pt-10">
            <Link>
              <p className="font-bold text-white">Покупателям</p>
            </Link>
            <Link to={"/About"}>
              <p className="mt-3">Как сделать заказ</p>
            </Link>
            <Link to={"/Career"}>
              <p className="mt-3">Способы оплаты</p>
            </Link>
            <Link to={"/Dostavka"}>
              <p className="mt-3">Доставка</p>
            </Link>
            <Link to={"/Vozvrat"}>
              <p className="mt-3">Возврат товара</p>
            </Link>
            <Link to={"/VozvratDen"}>
              <p className="mt-3">Возврат денежных средств</p>
            </Link>
            <Link to={"/Pprodaji"}>
              <p className="mt-3">Правила продажи</p>
            </Link>
            <Link to={"/Pptp"}>
              <p className="mt-3">Правила пользования торговой площадкой</p>
            </Link>
            <Link to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}>
              <p className="mt-3">Вопросы и ответы</p>
            </Link>
          </div>
          <div className="text-lg text-gray-300 pt-10">
            <Link to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}>
              <p className="font-bold text-white">Партнерам</p>
            </Link>
            <Link to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}>
              <p className="mt-3">Продавайте на Wildberries</p>
            </Link>
            <Link to={"https://seller.wildberries.ru/login/ru/?redirect_url=/"}>
              <p className="mt-3">Курьерам</p>
            </Link>
            <p className="mt-3">Перевозчикам</p>
            <p className="mt-3">Партнерский пункт выдачи</p>
            <p className="mt-3">Франшизный пункт выдачи</p>
            <p className="mt-10 text-white font-bold">Наши проекты</p>
            <p className="mt-3">WB Guru</p>
            <p className="mt-3">Трудоустройство</p>
            <p className="mt-3">Цифровые товары</p>
          </div>

          <div className="text-lg text-gray-300 pt-10">
            <p className="font-bold text-white">Компания</p>
            <p className="mt-3">О нас</p>
            <p className="mt-3">Реквизиты</p>
            <p className="mt-3">Пресс-центр</p>
            <p className="mt-3">Контакты</p>
            <p className="mt-3">Bug Bounty</p>
            <p className="mt-3">WB.Tech</p>
          </div>
          <div className="text-lg text-gray-300 pt-10">
            <p className="font-bold text-white">Мы в соцсетях</p>
            <p className="mt-3">ВКонтакте</p>
            <p className="mt-3">Одноклассники</p>
            <p className="mt-3">YouTube</p>
            <p className="mt-3">Телеграм</p>
          </div>
          <div className="text-lg text-gray-300 pt-10">
            <p className="font-bold text-white">Приложение Wildberries</p>

            <div className="text-center border border-gray-600 h-[50vh] mt-5 flex items-center rounded-2xl">
              <div className="p-2">
                <img className="m-auto" src={img} alt="" />
                <p>
                  Наведите камеру, <br /> чтобы скачать приложение
                </p>
                <img className="m-auto" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
