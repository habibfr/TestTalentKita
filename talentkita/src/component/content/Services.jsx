import React from "react";
import Card from "../UI/Card";

const dataCards = [
  {
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?game",
  },
  {
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?beach",
  },
  {
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?teknologi",
  },
];

const Services = () => {
  const Cards = dataCards.map((card) => {
    return <Card title={card.title} image={card.image} desc={card.desc} />;
  });

  return (
    <div className="w-full py-8 bg-gray-200">
      <div className="max-w-4xl py-6 container mx-auto ">
        <div>
          <h1 className="font-bold text-4xl w-1/2">
            Lorem Ipsum Will 5000 Compenieshelp You Okay
          </h1>
          <p className="w-2/3 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standarLorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>
        <div className="flex pt-8 gap-8">{Cards}</div>
      </div>
    </div>
  );
};

export default Services;
