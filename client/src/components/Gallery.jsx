import React, { forwardRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Navigation, Autoplay } from 'swiper/modules';
import { client } from '../sanity/client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './gallery.css'; // Import the custom CSS file

const galleryQuery = `*[_type=="Gallery"]{_id, Title, "imageURL":Image.asset->url}`;

const Gallery = forwardRef(({ galleryRef }, ref) => {
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
        async function fetchGallery() {
            const data = await client.fetch(galleryQuery);
            setGalleryImages(data);
        }

        fetchGallery();
    }, []);

    return (
        <div className='flex flex-col items-center w-full py-5 pt-16 bg-[#05141B] relative'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4' ref={galleryRef}>Our Gallery</h2>
            <p className='text-lg md:text-xl text-gray-300 mb-8 text-center max-w-[85%]'>
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
                    {galleryImages.map((item, index) => (
                        <SwiperSlide key={item._id}>
                            <div className='flex items-center justify-center w-[100%] h-[20rem] p-4'>
                                <img src={item.imageURL} className='w-full rounded-lg shadow-lg' alt={item.Title} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div> {/* Add this div for pagination */}
            </div>
        </div>
    );
});

Gallery.displayName = 'Gallery';
export default Gallery;