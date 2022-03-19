import React from "react";
import { images } from "../../asset/img";

const Section4 = () => {
  return (
    <div className="w-full bg-white" id="pricing">
      <div className="container py-6 max-w-4xl mx-auto">
        <div className="flex  items-center">
          <div className="py-12">
            <h1 className="w-full font-bold text-3xl my-6">
              Lorem Ipsum is text of the printing and typesetting industry.
            </h1>
            <p className="w-full my-6 font-normal text-gray-600 text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="flex justify-between items-center gap-4">
              <div className="bg-white max-w-[15rem]">
              <div className="font-bold text-2xl text-orange-600">150+</div>
                <div className="">
                  <div className="font-bold text-lg">Invoicing</div>
                  <div className="text-sm font-thin ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
              <div className="bg-white max-w-[15rem]">
                <div className="font-bold text-2xl text-orange-600">150+</div>
                <div className="">
                  <div className="font-bold text-lg">Invoicing</div>
                  <div className="text-sm font-thin ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img className="rotate-12" src={images.scene1} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
