import React from "react";
import foto from "./undraw_icon_design_re_9web.svg";
import foto1 from "./undraw_agree_re_hor9.svg";

const dataCard = [
  {
    total: "150",
    title: "Lorem",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    total: "356",
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing",
  },
];

const Section4 = () => {
  const cards = dataCard.map((card) => {
    return (
      <div key={card.title} className=" max-w-[15rem] shadow-lg rounded-lg p-4">
        <div className="font-bold text-2xl text-orange-600">{card.total}+</div>
        <div className="">
          <div className="font-bold text-lg cursor-pointer">{card.title}</div>
          <div className="text-sm font-thin ">{card.desc}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full bg-gray-100 pb-16"  id="pricing">
      <div className="container py-6 max-w-4xl mx-auto pb-12">
        <div className="flex justify-between  items-center">
          <div className="py-1">
            <h1 className="w-full font-bold text-3xl my-6">
              Lorem Ipsum is text of the printing and typesetting industry.
            </h1>
            <p className="w-full my-6 font-normal text-gray-600 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="flex justify-between items-center gap-4">
              {cards}
            </div>
          </div>
          <div className="ml-20 pl-8">
            <img className="w-[700px]" src={foto} alt="img" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl bg-blue-100 rounded-xl shadow-lg mx-auto p-8">
        <div className="py-4 font-medium">
          <span className="px-5 py-3 mr-4 pt-2 cursor-pointer border-[1px]  transition-all duration-500 ease-in  bg-white text-orange-500 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white">
            Business Strategy
          </span>
          <span className="px-5 py-3 pt-2 mr-4 cursor-pointer transition-all duration-500 ease-in  border-[1px] border-gray-400 text-gray-400 rounded-full hover:border-transparent hover:bg-orange-400 hover:text-white">
            Business Strategy
          </span>
          <span className="px-5 py-3 mr-4 border-[1px] pt-2 cursor-pointer transition-all duration-500 ease-in border-gray-400 text-gray-400 rounded-full hover:border-transparent hover:bg-orange-400 hover:text-white">
            Business Strategy
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="w-full font-bold text-3xl my-6">
              Lorem Ipsum is text of the printing and typesetting industry.
            </h1>
            <p className="w-2/3 my-6 font-normal text-gray-600 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p className="w-2/3 my-6 font-normal text-gray-600 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <span className="text-orange-400 hover:text-orange-600 cursor-pointer">Learn More</span>
          </div>

          <div className="ml-2 w-[120%]">
            <img src={foto1} alt="foto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
