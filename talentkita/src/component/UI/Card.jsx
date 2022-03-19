import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="max-w-xs">
        <img
          className="w-full rounded-xl "
          src={props.image}
          alt="Sunset in the mountains"
        />
        <div class=" py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-base">{props.desc}</p>
        </div>

        <div className="">
          <span className="text-base text-orange-600 transition-all hover:text-orange-800 cursor-pointer"> Learn More </span>
        </div>
      </div>
    </>
  );
};

export default Card;
