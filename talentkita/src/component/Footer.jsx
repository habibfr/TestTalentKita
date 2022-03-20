import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-orange-700 py-12" id="contact">
      <div className="container max-w-4xl mx-auto flex justify-between flex-row text-white ">
        <div>
          <div className="w-11/12 font-bold text-2xl">
            Bospeke Software Solution
          </div>
        </div>
        <div className="px-8">
          <div className="font-medium text-lg mb-4">Company</div>
          <div>About Us</div>
          <div>Carrers</div>
          <div>Services</div>
          <div>Blog</div>
        </div>
        <div className="px-8">
          <div className="font-medium text-lg mb-4">Connect</div>
          <div>habibfr968@gmail.com</div>
          <div>+(62) 234-5678</div>
        </div>
        <div className="px-8">
          <div className="font-medium text-lg mb-4">Join Newsletter</div>
          <div>
            <input
              type="email"
              placeholder="type email here"
              className="bg-white py-2 px-6 rounded-full outline-none text-gray-600"
            />
          </div>
          <button className="py-2 px-6 my-4 transition-all duration-500 ease-linear rounded-full bg-orange-500 hover:bg-orange-800">
            Subscribe
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 flex justify-between items-center text-white font-medium">
        <div>©All Rights Reserved</div>
        <div className="">
          <span>Privacy Police</span>{" "}
          <span className="ml-8">Terms & Condition</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
