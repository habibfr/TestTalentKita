import React from "react";

const dataCard = [
  {
    title: "Invoicing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    title: "Invoicing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    title: "Invoicing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const Section3 = () => {
  const cards = dataCard.map((card) => {
    return (
      <div key={card.title} className="bg-white max-w-xs rounded-xl shadow-lg pt-6">
        <div className="px-8 pb-8">
        <div className="font-bold text-4xl text-orange-600">*</div>
          <div className="font-bold mb-2 text-xl">{card.title}</div>
          <div className="text-sm">
            {card.desc}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full bg-white">
      <div className="container py-6 max-w-4xl mx-auto">
        <div className="flex justify-center items-center py-6">
          <div className="w-full font-bold text-3xl mr-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="w-full text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standarLorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </div>
        </div>
        <div className="flex gap-8 py-6">
          {cards}
        </div>
      </div>
    </div>
  );
};

export default Section3;
