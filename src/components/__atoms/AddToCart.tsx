'use client';

import { heart } from '@/utility/images/ImgExport';
import Image from 'next/image';

const AddToCart = () => {
  return (
    <div className='max-w-[508px] w-full flex-col mt-[56px] '>
      <div className='w-full flex gap-[24px]'>
        <div className='flex max-w-[127px] w-full h-[52px] rounded-[8px] bg-[#F5F5F5]'>
          <button className='flex-1'>-</button>
          <div className='flex justify-center items-center'>
            <span className='flex-1 text-center'>1</span>
          </div>
          <button className='flex-1'>+</button>
        </div>
        <div className='max-w-[357px] w-full h-[52px] border-[1px] border-[#141718] rounded-[8px] flex justify-center items-center'>
          <Image src={heart} width={24} height={24} alt='heart' />
          <div>
            <span className='ml-[8px] mb-[16px] font-Inter font-normal text-[18px] leading-[32px]  text-[#141718] '>
              Wishlist
            </span>
          </div>
        </div>
      </div>
      <button className='mt-[16px] w-full h-[52px] rounded-[8px] bg-[#141718]'>
        <span className='font-Inter font-medium text-[18px] leading-[32px]  text-white '>
          Add to Cart
        </span>
      </button>
    </div>
  );
};

export default AddToCart;
