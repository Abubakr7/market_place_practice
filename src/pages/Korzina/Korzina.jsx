import React from "react";
import { Link, Outlet } from "react-router-dom";
import TemporaryDrawer from "../../layout/components/Menu";

const Korzina = () => {
  return (
    <div>
      <div className="w-[30%] m-auto text-center pt-10 pb-10">

        <p className="text-2xl font-bold">В корзине пока пусто</p>
        <p className="text-lg text-gray-400 mt-5">
          Загляните на главную, чтобы выбрать товары или найдите нужное в поиске
        </p>
        <Link to={"/"}>
        <button className="p-5 w-[80%] bg-violet-600 rounded-lg mt-5 text-white">Перейти на главную</button>
        </Link>
      </div>
    </div>
  );
};

export default Korzina;
