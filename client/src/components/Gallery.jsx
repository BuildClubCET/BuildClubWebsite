import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './gallery.css'; // Import the custom CSS file


import pic1 from '../assets/gallery/1.jpg';
import pic2 from '../assets/gallery/2.jpg';
import pic3 from '../assets/gallery/3.jpg';
import pic4 from '../assets/gallery/4.jpg';
import pic5 from '../assets/gallery/5.jpg';
import pic6 from '../assets/gallery/6.jpg';
import pic7 from '../assets/gallery/7.jpg';
import pic8 from '../assets/gallery/8.jpg';
import pic9 from '../assets/gallery/9.jpg';
import pic10 from '../assets/gallery/10.jpg';

const data = [
    { img: pic1 },
    { img: pic2 },
    { img: pic3 },
    { img: pic4 },
    { img: pic5 },
    { img: pic6 },
    { img: pic7 },
    { img: pic8 },
    { img: pic9 },
    { img: pic10 },
];

const Gallery = forwardRef(({galleryRef},ref) => {
    return (
        <div className='flex flex-col items-center w-full py-5 bg-[#05141B] relative'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4' ref={galleryRef}>Our Gallery</h2>
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
                    autoplay={true}
                    pagination={{ clickable: true, el: '.swiper-pagination' }}
                    modules={[Pagination, FreeMode, Navigation, Autoplay]}
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
});


Gallery.displayName = 'Gallery'
export default Gallery;