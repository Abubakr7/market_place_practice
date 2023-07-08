import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import img from "../../assets/kar.jpg";
import img2 from "../../assets/kar2.jpg";
import img3 from "../../assets/kar3.jpg";
import img4 from "../../assets/kar4.jpg";
import img5 from "../../assets/kar5.jpg";
import img6 from "../../assets/kar6.jpg";
import img7 from "../../assets/kar7.jpg";
import img8 from "../../assets/kar8.jpg";
import img9 from "../../assets/kar9.jpg";
import img10 from "../../assets/kar10.jpg";
import img101 from "../../assets/kar101.jpg";
import img102 from "../../assets/kar102.jpg";
import img103 from "../../assets/kar103.jpg";

import img11 from "../../assets/kar11.jpg";
import img12 from "../../assets/kar12.jpg";
import img13 from "../../assets/kar13.jpg";
import img14 from "../../assets/kar14.jpg";
import img15 from "../../assets/kar15.jpg";
import img16 from "../../assets/kar16.jpg";
import img17 from "../../assets/kar17.jpg";
import img18 from "../../assets/kar18.jpg";
import img19 from "../../assets/kar19.jpg";
import img20 from "../../assets/kar20.jpg";
import img21 from "../../assets/kar21.jpg";
import img22 from "../../assets/kar22.jpg";
import img23 from "../../assets/kar23.jpg";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="">
        <div className=" dropdown">
          <div className="flex justify-center items-center">
            <img src={img11} alt="" />
            <p className="text-lg text-center">Женщинам</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Женщинам</h1>
              <Link to={"/Bluzki"}>
                <h1 className="mt-3">Блузки и рубашки</h1>
              </Link>
              <Link to={"/Bruki"}>
                <h1 className="mt-3">Брюки</h1>
              </Link>
              <Link to={"/Verh"}>
                <h1 className="mt-3">Верхняя одежда</h1>
              </Link>
              <h1 className="mt-3">Джемперы, водолазки и кардиганы</h1>
              <h1 className="mt-3">Комбинезоны</h1>
              <h1 className="mt-3">Костюмы</h1>
              <h1 className="mt-3">Лонгсливы</h1>

              <div className="dropdown-content2">
                <img src={img} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img13} alt="" />
            <p className="text-lg text-center">Мужчинам</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Мужчинам</h1>
              <Link to={"/Brukim"}>
                <h1 className="mt-3">Брюки</h1>
              </Link>
              <Link to={"/Verhm"}>
              <h1 className="mt-3">Верхняя одежда</h1>
              </Link>
              <h1 className="mt-3">Джемперы, водолазки и кардиганы</h1>
              <h1 className="mt-3">Джинсы</h1>
              <h1 className="mt-3">Комбинезоны и полукомбинезоны</h1>
              <h1 className="mt-3">Костюмы</h1>

              <div className="dropdown-content2">
                <img src={img2} alt="" />
              </div>
            </p>
          </p>
        </div>

        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img12} alt="" />
            <p className="text-lg text-center">Детям</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Детям</h1>
              <Link to={"/Bluzkid"}>
              <h1 className="mt-3">Для девочек</h1>
              </Link>
              <Link to={"/Shorti"}>
              <h1 className="mt-3">Для мальчиков</h1>
              </Link>
              <h1 className="mt-3">Для новорожденных</h1>
              <h1 className="mt-3">Детская электроника</h1>
              <h1 className="mt-3">Конструкторы</h1>
              <h1 className="mt-3">Джинсы</h1>
              <h1 className="mt-3">Комбинезоны и полукомбинезоны Детям </h1>
              <h1 className="mt-3"> Детское питание </h1>

              <div className="dropdown-content2">
                <img src={img3} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img21} alt="" />
            <p className="text-lg text-center">Обувь</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Обувь</h1>
              <Link to={"/DetskayaOb"}>
              <h1 className="mt-3"> Детская</h1>
              </Link>
              <h1 className="mt-3">Для новорожденных</h1>
              <h1 className="mt-3">Женская</h1>
              <h1 className="mt-3">Мужская</h1>
              <h1 className="mt-3">Ортопедическая обувь</h1>
              <h1 className="mt-3"> Аксессуары для обуви</h1>

              <div className="dropdown-content2">
                <img src={img4} alt="" />
              </div>
            </p>
          </p>
        </div>

        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img14} alt="" />
            <p className="text-lg text-center">Красота</p>
          </div>
          <p className="dropdown-content">
            <div className="dropdown2 text-lg">
              <h1 className="font-bold">Красота</h1>
              <Link to={"/Aksesuar"}>
              <h1 className="mt-3">Аксессуары</h1>
              </Link>
              <h1 className="mt-3"> Волосы</h1>
              <h1 className="mt-3">Аптечная косметика</h1>
              <h1 className="mt-3">Детская декоративная косметика</h1>
              <h1 className="mt-3">Для загара</h1>
              <h1 className="mt-3">Для мам и малышей</h1>
              <h1 className="mt-3"> Израильская косметика</h1>
              <h1 className="mt-3"> Инструменты для парикмахеров</h1>
              <h1 className="mt-3"> Макияж</h1>
              <h1 className="mt-3"> Парфюмерия</h1>
              <div className="dropdown-content2">
                <img src={img5} alt="" />
              </div>
            </div>
          </p>
        </div>

        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img15} alt="" />
            <p className="text-lg text-center">Аксессуары</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Аксессуары</h1>
              <Link to={"/Aksesuari"}>
              <h1 className="mt-3">Аксессуары для волос</h1>
              </Link>
              <h1 className="mt-3">Аксессуары для одежды</h1>
              <h1 className="mt-3"> Бижутерия</h1>
              <h1 className="mt-3">Веера</h1>
              <h1 className="mt-3">Зонты</h1>
              <h1 className="mt-3">Головные уборы</h1>
              <h1 className="mt-3">Кошельки и кредитницы</h1>
              <h1 className="mt-3">Маски для сна</h1>
              <h1 className="mt-3"> Носовые платки</h1>
              <h1 className="mt-3">Очки и футляры</h1>
              <h1 className="mt-3"> Перчатки и варежки</h1>

              <div className="dropdown-content2">
                <img src={img6} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img16} alt="" />
            <p className="text-lg text-center">Электроника</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Электроника</h1>
              <h1 className="mt-5">Автоэлектроника и навигация</h1>
              <h1 className="mt-5">Гарнитуры и наушники</h1>
              <h1 className="mt-5"> Игровые консоли и игры</h1>
              <h1 className="mt-5">Кабели и зарядные устройства</h1>
              <h1 className="mt-5">Музыка и видео</h1>
              <h1 className="mt-5">Ноутбуки и компьютеры</h1>
              <h1 className="mt-5">Офисная техника</h1>
              <h1 className="mt-5">Развлечения и гаджеты</h1>
              <h1 className="mt-5">Сетевое оборудование</h1>
              <h1 className="mt-5">Системы безопасности</h1>
              <h1 className="mt-5">Смартфоны и телефоны</h1>
              <div className="dropdown-content2">
                <img src={img7} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-5  dropdown">
          <div className="flex justify-center items-center">
            <img src={img17} alt="" />
            <p className="text-lg text-center">Игрушки</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Игрушки</h1>
              <h1 className="mt-5">Для малышей</h1>
              <h1 className="mt-5">Для песочницы</h1>
              <h1 className="mt-5"> Игровые консоли и игры</h1>
              <h1 className="mt-5">Игрушечное оружие и аксессуары</h1>
              <h1 className="mt-5">Игрушечный транспорт</h1>
              <h1 className="mt-5">Игрушки для ванной</h1>
              <h1 className="mt-5">Интерактивные</h1>
              <h1 className="mt-5">Кинетический песок</h1>
              <h1 className="mt-5">Конструкторы</h1>
              <h1 className="mt-5">Куклы и аксессуары</h1>
              <h1 className="mt-5">Конструкторы LEGO</h1>

              <div className="dropdown-content2">
                <img src={img8} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-5  dropdown">
          <div className="flex justify-center items-center">
            <img src={img18} alt="" />
            <p className="text-lg text-center">Мебель</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Мебель</h1>
              <h1 className="mt-5">Детская мебель</h1>
              <h1 className="mt-5">Диваны и кресла</h1>
              <h1 className="mt-5"> Столы и стулья</h1>
              <h1 className="mt-5">Компьютерная мебель</h1>
              <h1 className="mt-5">Мебель для геймеров</h1>
              <h1 className="mt-5">Мебель для гостиной</h1>
              <h1 className="mt-5">Мебель для кухни</h1>
              <h1 className="mt-5">Мебель для прихожей</h1>
              <h1 className="mt-5">Мебель для спальни</h1>
              <h1 className="mt-5">Гардеробная мебель</h1>
              <h1 className="mt-5">Офисная мебель</h1>

              <div className="dropdown-content2">
                <img src={img9} alt="" />
              </div>
            </p>
          </p>
        </div>
        <div className=" mt-5  dropdown">
          <div className="flex justify-center items-center">
            <img src={img20} alt="" />
            <p className="text-lg text-center">Бытовая техника</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold">Бытовая техника</h1>
              <h1 className="mt-5">Климатическая техника</h1>
              <h1 className="mt-5">Садовая техника</h1>
              <h1 className="mt-5"> Техника для дома</h1>
              <h1 className="mt-5">Техника для кухни</h1>
              <h1 className="mt-5">Крупная бытовая техника</h1>

              <div className="dropdown-content2">
                <img src={img10} alt="" />
              </div>
            </p>
          </p>
        </div>

        <div className=" mt-5  dropdown">
          <div className="flex justify-center items-center">
            <img src={img19} alt="" />
            <p className="text-lg text-center">Продукты</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold"> Продукты</h1>
              <h1 className="mt-5">Чай и кофе</h1>
              <h1 className="mt-5">Сладости и хлебобулочные изделия</h1>
              <h1 className="mt-5">Добавки пищевые</h1>
              <h1 className="mt-5">Здоровое питание</h1>
              <h1 className="mt-5">Мясная продукция</h1>
              <h1 className="mt-5">Молочные продукты и яйца</h1>
              <h1 className="mt-5">Напитки</h1>
              <h1 className="mt-5">Снеки</h1>

              <div className="dropdown-content2">
                <img src={img101} alt="" />
              </div>
            </p>
          </p>
        </div>

        <div className=" mt-5  dropdown">
          <div className="flex justify-center items-center">
            <img src={img22} alt="" />
            <p className="text-lg text-center">Спорт</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold"> Спорт</h1>
              <h1 className="mt-5">Йога/Пилатес</h1>
              <h1 className="mt-5">Охота и рыбалка</h1>
              <h1 className="mt-5">Самокаты/Ролики/Скейтборды</h1>
              <h1 className="mt-5">Туризм/Походы</h1>
              <h1 className="mt-5">Бег/Ходьба</h1>
              <h1 className="mt-5">Водные виды спорта</h1>
              <h1 className="mt-5">Зимние виды спорта</h1>
              <h1 className="mt-5">Спортивное питание и косметика</h1>
              <h1 className="mt-5">Бадминтон/Теннис</h1>
              <h1 className="mt-5">Бильярд/Гольф/Дартс/Метание ножей</h1>
              <h1 className="mt-5">Единоборства</h1>

              <div className="dropdown-content2">
                <img src={img102} alt="" />
              </div>
            </p>
          </p>
        </div>

        <div className=" mt-3  dropdown">
          <div className="flex justify-center items-center">
            <img src={img23} alt="" />
            <p className="text-lg text-center">Автотовары</p>
          </div>
          <p className="dropdown-content">
            <p className="dropdown2 text-lg">
              <h1 className="font-bold"> Автотовары</h1>
              <h1 className="mt-3">Масла и жидкости</h1>
              <h1 className="mt-3">Автокосметика и автохимия</h1>
              <h1 className="mt-3">Краски и грунтовки</h1>
              <h1 className="mt-3">Автоэлектроника и навигация</h1>
              <h1 className="mt-3">Аксессуары в салон и багажник</h1>
              <h1 className="mt-3">Коврики</h1>
              <h1 className="mt-3">Внешний тюнинг</h1>
              <h1 className="mt-3">Другие аксессуары и доп. оборудование</h1>

              <h1 className="mt-3"> Запчасти на легковые автомобили</h1>
              <h1 className="mt-3">Шины и диски колесные</h1>
              <h1 className="mt-3">Инструменты</h1>

              <div className="dropdown-content2">
                <img src={img103} alt="" />
              </div>
            </p>
          </p>
        </div>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="text-black" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon fontSize="large" sx={{ color: "white", fontSize: 50 }} />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
