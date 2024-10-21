import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination, Keyboard, Autoplay } from "swiper/modules";

import goureesh from "../assets/Goureesh.jpg";
import ajith from "../assets/Ajith.jpg";
import pappan from "../assets/Pappan.jpg";
import anandalekshmi from "../assets/AnandaLekshmi.jpg";
import sachu from "../assets/Sachu.jpg";
import suraj from "../assets/Suraj.jpg";

const data = [
  {
    name: "Goureesh Chandra",
    img: goureesh,
    title: "President",
  },
  {
    name: "Anandapadmanabhan B",
    img: pappan,
    title: "Vice President",
  },
  {
    name: "Ajith Jeejo",
    img: ajith,
    title: "Secretary",
  },
  {
    name: "Anantha Lekshmi S Nair",
    img: anandalekshmi,
    title: "Joint Secretary",
  },
  {
    name: "Sachu T Cherian",
    img: sachu,
    title: "Joint Secretary",
  },
  {
    name: "Suraj Krishna S S",
    img: suraj,
    title: "Joint Secretary",
  },
];

export default function Slider() {
  return (
    <div className="w-[85%]">
      <Swiper
        spaceBetween={'15px'}
        keyboard={true}
        freeMode={true}
        autoplay={true}
        modules={[FreeMode, Pagination, Keyboard, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((s, index) => (
          <SwiperSlide
            key={index}
          >
            <div className="my-[10px] rounded-xl flex flex-col items-center justify-center">
              <div className="h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem]">
                <img
                  src={s.img}
                  alt={s.name}
                  className="rounded-t-xl"
                />
              </div>
              <div className="text-center py-[3px] bg-black w-[100%] rounded-b-xl">
                <h3 className="text-lg font-bold text-white">{s.name}</h3>
                <p className="text-sm text-gray-200">{s.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
