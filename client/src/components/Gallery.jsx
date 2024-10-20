import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './gallery.css'; // Import the custom CSS file
import logo from "../assets/buildClubLogo.png";

const data = [
    { img: logo },
    { img: logo },
    { img: logo },
    { img: logo },
    { img: logo },
];

const Gallery = () => {
    return (
        <div className='flex flex-col items-center w-full py-5 bg-[#05141B] relative'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Our Gallery</h2>
            <p className='text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl'>
                Explore our collection of images showcasing the innovative projects and events at CET Build Club.
            </p>
            <div className='w-full md:w-3/4'>
                <Swiper
                    slidesPerView={1.4}
                    centeredSlides={true}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    modules={[Pagination, FreeMode, Navigation]}
                    className="w-full py-5"
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
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center justify-center h-full p-4'>
                                <img src={item.img} className='h-auto w-auto max-h-60 max-w-full rounded-lg shadow-lg' alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div> {/* Add this div for pagination */}
            </div>
        </div>
    );
};

export default Gallery;