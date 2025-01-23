'use client';

import React, { useRef, useEffect, useState } from 'react';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Import Swiper's Scrollbar styles

import { SwipperSlidesArr2 } from '@/commons/services/swipperSlides';
import ProductCardSwipper from '../__molecules/ProductCardSwipper';
import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';

const SwiperProduct = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className='max-w-[1280px] w-full  mx-auto h-full border-[1px] border-[green]'>
      <div className='relative '>
        {swiperReady && (
          <Swiper
            className='mySwiper2 w-full h-full'
            slidesPerView={'auto'}
            spaceBetween={24}
            loop={true}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            pagination={false}
            scrollbar={{
              el: paginationRef.current,
              hide: false,
              draggable: true,
              dragSize: 'auto',
            }}
            modules={[Navigation, Scrollbar]}
            breakpoints={{
              // Default: for larger screens
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // Tablets and below (screen width <= 1024px)
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // Mobile screens (screen width <= 480px)
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
            }}
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

        <div ref={paginationRef} className='swiper-scrollbar' />
      </div>
    </div>
  );
};

export default SwiperProduct;
