import React from "react";
import img1 from "../../src/assets/tovar/kar.jpg"

const Card = ({ img, title1,title11, title2,title3,title4,title5}) => {
  return (
    <div className="w-[80%] m-auto">
      <img className="w-[80%]" src={img} alt="" />
      <p className="font-bold">{title1} <span className="line-through">{title11}</span></p>
      <p className="mt-2">{title2}</p>
      <p className="mt-2 flex items-center"><img className="w-[5%]" src={img1} alt="" />{title3}</p>
      <p className="mt-2">{title4}</p>
      <p className="mt-2">{title5}</p>
      <button className="p-4 w-[70%] bg-red-400 rounded-2xl mt-2 ">В корзину</button>
    </div>
  );
};

export default Card;
