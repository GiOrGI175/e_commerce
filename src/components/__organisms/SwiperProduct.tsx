'use client';

import React, { useRef, useEffect, useState } from 'react';

import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SwipperSlidesArr2 } from '@/commons/services/swipperSlides';
import ProductCardSwipper from '../__molecules/ProductCardSwipper';

const SwiperProduct = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className='w-full h-full '>
      <div className='mt-[80px] mb-[100px] flex justify-center'>
        <h3 className='w-[728px]  font-lora font-medium text-[64px] leading-[81px] text-center text-[#FAF5E6]'>
          Let's Hear About Their Experiences
        </h3>
      </div>
      <div className='relative  '>
        {swiperReady && (
          <Swiper
            className='mySwiper2  w-full h-full'
            slidesPerView={'auto'}
            spaceBetween={24}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            loop={true}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination]}
          >
            {SwipperSlidesArr2.map((item) => (
              <SwiperSlide
                key={`${item.name}${item.price}`}
                className='swiper-slide2'
              >
                <ProductCardSwipper item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={paginationRef} className='custom-pagination' />

        <div className='bg_Gradient_Right absolute w-[150px] h-[675px] left-[-30px] top-[0px] z-[3] rounded-[20px] ' />
        <div className='bg_Gradient_Left absolute w-[150px] h-[675px] right-[-30px] top-[0px] z-[3] rounded-[20px]' />
      </div>
    </div>
  );
};

export default SwiperProduct;
