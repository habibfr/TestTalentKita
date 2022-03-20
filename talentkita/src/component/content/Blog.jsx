import React from "react";
import Card from "../UI/Card";

const dataCards = [
  {
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?cripto",
  },
  {
    title: "Digital Market",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?home",
  },
  {
    title: "Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, nulla! Maiores et.",
    image: "https://source.unsplash.com/750x500/?smartphone",
  },
];

const Blog = () => {
  const cards = dataCards.map((card) => {
    return (
      <Card
        className="bg-white shadow-lg rounded-lg overflow-hidden pb-8"
        classDesc="p-6"
        classLearn="p-6"
        key={card.title}
        image={card.image}
        title={card.title}
        desc={card.desc}
      />
    );
  });

  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container max-w-4xl mx-auto">
        <div className="font-bold text-3xl mb-8">Latest Blog & News</div>
        <div className="">
          <div className="flex justify-between items-center gap-6">
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
