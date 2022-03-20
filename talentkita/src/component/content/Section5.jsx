import React from 'react'
import foto from "./undraw_icon_design_re_9web.svg"

const Section5 = () => {
  return (
    <div>
      <div className='flex items-center bg-orange-400 mb-12'>
        <img className='w-1/2 h-full' src="https://source.unsplash.com/750x400/?teknologi" alt="fotooo"/>
        <div className='p-16 text-white w-1/2'>
        <h1 className="w-2/3 font-bold text-3xl">
              Lorem Ipsum is text of the printing and typesetting industry.
            </h1>
          <button className='px-6 pb-2 pt-[0.4rem] bg-white rounded-full mt-6 trasition duration-500 ease-in text-orange-500 font-medium hover:text-white hover:bg-orange-800'>See Job Vancancies</button>
        </div>
      </div>

      <div className="container py-6 max-w-4xl mx-auto pb-12">
        <div className="flex justify-between  items-center">
          <div className="py-1">
            <h1 className="w-11/12 font-bold text-3xl my-6">
              Lorem Ipsum is text of the printing and typesetting industry.
            </h1>
            <p className="w-11/12 my-6 font-normal text-gray-600 text-sm ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <div className='flex items-center gap-4'>
              <img className='rounded-full' src='https://source.unsplash.com/50x50/?programmer' alt="orang"/>
              <div className='cursor-pointer'>
                <div className='text-lg font-semibold text-violet-900'>Habib Ganteng</div>
                <div className='text-orange-400 font-medium text-sm -mt-1'>CEO at Home</div>
              </div>
            </div>
          </div>

          <div className="ml-20 pl-8">
            <img className="w-[500px]" src={foto} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5