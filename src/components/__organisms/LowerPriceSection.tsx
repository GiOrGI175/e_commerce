import React from 'react';

import { ArrowRight, lowerPriceBaner } from '@/utility/images/ImgExport';
import Image from 'next/image';

const LowerPriceSection = () => {
  return (
    <section className='w-full mt-[48px] flex bg-[#F3F5F7]'>
      <div>
        <Image
          src={lowerPriceBaner}
          width={720}
          height={532}
          alt='lowerPriceBaner'
        />
      </div>
      <div className=' pl-[72px] h-full flex flex-col justify-center'>
        <span className='mb-[16px] font-Inter font-bold text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#377DFF]'>
          SALE UP TO 35% OFF
        </span>
        <h3 className='max-w-[320px] mb-[16px] font-poppins font-medium text-[40px] leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
          HUNDREDS of New lower prices!
        </h3>
        <p className='max-w-[380px] mb-[24px] font-Inter text-[20px] leading-[32px]  text-[#141718]'>
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <button
          className='w-[100px] font-poppins text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center
         border-b-[1px] border-[#141718]'
        >
          Shop Now
          <Image
            src={ArrowRight}
            width={20}
            height={20}
            alt='arrow'
            className='ml-[4px]'
          />
        </button>
      </div>
    </section>
  );
};

export default LowerPriceSection;