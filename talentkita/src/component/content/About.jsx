import React from "react";
import { images } from "../../asset/img";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="container flex max-w-4xl items-center mx-auto py-12">
          <div className="">
            <h1 className="font-bold text-5xl mb-4">
              Propsper with our bespoke solutions
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standar
            </p>
            <div className="py-6">
              <button className="px-10 py-2 mr-5 bg-orange-500 rounded-full">
                Sign Up
              </button>
              <button className="px-10 py-[0.4rem] border-2 border-orange-500 rounded-full">
                Sign Up
              </button>
            </div>
            <div className="font-extralight text-xs opacity-70 mt-4">Worrked with 100+ companies</div>
            <div className="flex justify-start">
              <img src={images.iklan2} alt="sponsor" width="100px" />
              <img src={images.iklan3} alt="sponsor" width="100px" />
            </div>
          </div>

          <div className="w-3/4">
            <img src={images.scene} alt="foto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
