import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Active_Reviews from '../Lists/Reviews';
import photo from "../../public/assets/Anonyme.png";

export default function Reviews() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#242626] py-16 lg:pt-27 lg:pb-27 px-6">
      <h1 className="text-white text-3xl lg:text-3xl md:text-5xl font-[Montserrat] font-bold mb-4 text-center">
         Clients <span className='text-yellow-500'>Feedbacks</span> 
      </h1>
      <p className="text-white font-[Montserrat] text-lg mb-12 max-w-2xl text-center">
        See what our clients are saying about their experience with our platform.
      </p>

      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation ,Autoplay]}
          spaceBetween={20}              // Good breathing room on all sizes
          slidesPerView={1}
          centeredSlides={true}          // Looks better on mobile
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          // navigation={true}              // Keep arrows (they become hidden on very small screens automatically)
          className="reviews-swiper"

          // Fully responsive breakpoints
          breakpoints={{
            320: {   // Mobile small
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {   // Mobile large
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            640: {   // Small tablet
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {   // Tablet
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {  // ≤1080p laptops / small desktops
              slidesPerView: 3,
              spaceBetween: 28,
            },
            1280: {  // Large screens
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {  // Extra large
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {Active_Reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col h-full">
                {/* Card container with fixed aspect ratio */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm">
                  <img
                    src={review.image || photo}
                    alt={`Review from ${review.name || 'client'}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  {/* Optional overlay with name/rating if you want text */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                    <h3 className="text-white font-semibold">{review.name}</h3>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional custom CSS for better card height consistency */}
      <style jsx>{`
        .reviews-swiper .swiper-slide {
          height: auto;
        }
        .reviews-swiper .swiper-slide > div {
          aspect-ratio: 3 / 4; /* Adjust ratio as needed (e.g., 1/1, 4/5, 3/4) */
        }
        @media (min-width: 768px) {
          .reviews-swiper .swiper-slide > div {
            aspect-ratio: 4 / 5;
          }
        }
      `}</style>
    </div>
  );
}