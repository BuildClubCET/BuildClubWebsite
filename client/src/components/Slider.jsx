import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "../index.css";
import { FreeMode, Pagination, Keyboard, Autoplay } from "swiper/modules";

import { client } from "../sanity/client";
import { useState } from "react";
import { useEffect } from "react";


const teamQuery = `*[_type=="Team"] | order(Priority asc, Name asc) {_id, Name, Position, Priority, "imageURL":Image.asset->url}`

export default function Slider() {

  const [teamData, setTeamData] = useState([]);

  useEffect( () => {
    async function fetchTeam(){
      const d = await client.fetch(teamQuery);
      setTeamData(d);
    }
    fetchTeam();
    
  },[])

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
        {teamData.map((s, index) => (
          <SwiperSlide
            key={index}
          >
            <div className="my-[10px] rounded-xl flex flex-col items-center justify-center">
              <div className="h-[16rem] w-[16rem] md:h-[22rem] md:w-[22rem]">
                <img
                  src={s.imageURL}
                  alt={s.Name}
                  className="rounded-t-xl"
                />
              </div>
              <div className="text-center py-[3px] bg-black w-[16rem] md:w-[22rem] rounded-b-xl">
                <h3 className="text-lg font-bold text-white">{s.Name}</h3>
                <p className="text-sm text-gray-200">{s.Position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
