import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const slides = ["1", "2", "3", "4", "5", "6"];
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {
  FreeMode,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

const data=[
  {
    name:'Goureesh Chandra',
    img:'',
    title:'President'
  },
  
]

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        keyboard={true}
        freeMode={true}
        loop={true}
        
        modules={[FreeMode, Pagination, Navigation, Keyboard]}
        className="w-full h-72 "
      >
        {slides.map((s, index) => {
          return (
            <SwiperSlide key={index} className=" p-15  border-r border-t rounded-2xl border-b border-l m-4 ">
              <div className="w-full  rounded overflow-hidden shadow-lg">
                <div className="px-4 py-4">
                  <div className="font-bold text-blue-50 border-gray-400-xl mb-2">
                    The Coldest Sunset
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
