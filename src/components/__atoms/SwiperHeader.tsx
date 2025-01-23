'use client';

import { ArrowRight } from '@/utility/images/ImgExport';
import Image from 'next/image';

const SwiperHeader = () => {
  return (
    <div className='max-w-[1120px] w-full flex justify-between items-center border-[1px] border-red-700'>
      <h3 className='text-xl font-semibold'>New Arrivals</h3>
      <button className='font-medium text-[16px] leading-[28px] tracking-tighter-[-0.4px]  text-[#141718] flex items-center'>
        More Products
        <Image
          src={ArrowRight}
          width={20}
          height={20}
          alt='arrow'
          className='ml-[4px]'
        />
      </button>
    </div>
  );
};

export default SwiperHeader;
