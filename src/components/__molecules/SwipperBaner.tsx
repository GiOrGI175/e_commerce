'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper/modules';
import { SwipperSlidesArr } from '@/commons/services/swipperSlides';
import Image from 'next/image';

const SwipperBaner = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (paginationRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className='relative'>
      {swiperReady && (
        <Swiper
          className='mySwiper  w-full h-full'
          slidesPerView={'auto'}
          spaceBetween={20}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
          loop={true}
          cssMode={true}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination]}
        >
          {SwipperSlidesArr.map((item) => (
            <SwiperSlide className='swiper-slide'>
              <Image src={item.img} width={1120} height={537} alt='slide' />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div ref={paginationRef} className='custom-pagination' />

      <button className='custom-prev'>
        {/* <Image src={} alt='room' width={32} height={18} /> */}
        ia
      </button>
      <button className='custom-next'>
        {/* <Image src={} alt='room' width={32} height={18} /> */}
        aq
      </button>
    </div>
  );
};

export default SwipperBaner;
