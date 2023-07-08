import React from "react";
import img1 from "../../src/assets/tovar/kar.jpg";

const Card = ({ name, media, price, addToBasket }) => {
  return (
    <div className="w-[80%] m-auto">
      <img
        className="w-[80%]"
        src={`http://localhost:3000/${media[0].src}`}
        alt=""
      />
      <p className="font-bold">
        {price - (price * 10) / 100}{" "}
        <span className="line-through">{price}</span>
      </p>
      <p className="mt-2">{name}</p>
      <p className="mt-2 flex items-center">
        <img className="w-[5%]" src={img1} alt="" />
        {3}
      </p>
      {/* <p className="mt-2">{title4}</p>
      <p className="mt-2">{title5}</p> */}
      <button
        className="p-4 w-[70%] bg-red-400 rounded-2xl mt-2 "
        onClick={addToBasket}
      >
        В корзину
      </button>
    </div>
  );
};

export default Card;
