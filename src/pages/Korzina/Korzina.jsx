import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrementProduct, incrementProduct } from "../../reducers/basket";

const Korzina = () => {
  const products = useSelector(({ basket }) => basket.products);
  const total = useSelector(({ basket }) => basket.total);
  const dispatch = useDispatch();
  return (
    <div>
      {products.length > 0 ? (
        <div style={{ padding: 10 }}>
          <h1>Корзина</h1>
          {products.map((elem) => {
            return (
              <div key={elem.product.id}>
                <span>{elem.product.name}</span>
                <button
                  onClick={() => dispatch(decrementProduct(elem.product.id))}
                  className="p-2 bg-slate-300"
                >
                  -
                </button>
                {elem.quantity}
                <button
                  className="p-2 bg-slate-300"
                  onClick={() => {
                    console.log(elem);
                    dispatch(incrementProduct(elem.product.id));
                  }}
                >
                  +
                </button>
              </div>
            );
          })}
          {total}
        </div>
      ) : (
        <div className="w-[30%] m-auto text-center pt-10 pb-10">
          <p className="text-2xl font-bold">В корзине пока пусто</p>
          <p className="text-lg text-gray-400 mt-5">
            Загляните на главную, чтобы выбрать товары или найдите нужное в
            поиске
          </p>
          <Link to={"/"}>
            <button className="p-5 w-[80%] bg-violet-600 rounded-lg mt-5 text-white">
              Перейти на главную
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Korzina;
