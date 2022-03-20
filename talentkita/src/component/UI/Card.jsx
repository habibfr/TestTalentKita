import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={"max-w-xs " + props.className} >
        <img
          className={"w-full " + props.classImg}
          src={props.image}
          alt="Sunset in the mountains"
        />
        <div className={"py-4 " + props.classDesc}>
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 text-sm">{props.desc}</p>
        </div>

        <div className="">
          <span className={"text-base text-orange-600 transition-all hover:text-orange-800 cursor-pointer " + props.classLearn}> Learn More </span>
        </div>
      </div>
    </>
  );
};

export default Card;
