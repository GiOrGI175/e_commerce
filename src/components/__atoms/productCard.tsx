import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { getCookies } from 'cookies-next';
import Link from 'next/link';

export default function ProductCard({
  onAddToCart,
  name,
  price,
  isNew,
  discount,
  ProductImage,
  id,
  layout,
  description,
}: any) {
  const [showAddToCart, setShowAddToCart] = useState(false);

  const handleMouseEnter = () => {
    setShowAddToCart(true);
  };

  const handleMouseLeave = () => {
    setShowAddToCart(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${
        layout === 'Sort3'
          ? 'max-w-[548px] h-fit flex flex-col sm:flex-row gap-x-[24px] items-center'
          : 'h-fit border-gray-200 rounded-lg overflow-hidden max-w-[262px]'
      }`}
    >
      <div className='relative w-[240px] '>
        <Image
          className='w-full object-cover'
          src={ProductImage}
          alt='Product Image'
          width={262}
          height={349}
        />
        <div
          className={`${layout === 'Sort3' && 'hidden'} absolute top-2 left-2`}
        >
          <div className='flex flex-col gap-2'>
            <div className='bg-black text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]'>
              {isNew && 'NEW'}
            </div>
            <div className='bg-[#38CB89] text-white text-sm font-bold px-[14px] py-[4px] rounded-[4px]'>
              {discount}
            </div>
          </div>
        </div>
        {layout !== 'Sort3' && showAddToCart && (
          <div className='flex flex-col items-center justify-center'>
            <Link
              href={`shop/${id}`}
              className='absolute bottom-4 max-w-[200px] w-full'
            >
              <button className='  w-full bg-black text-white rounded-md py-[9px]'>
                Add to cart
              </button>
            </Link>
          </div>
        )}
      </div>

      <div
        className={`text-[#121212] pt-[12px] ${
          layout === 'Sort3' ? 'gap-y-[16px]' : 'gap-y-[4px]'
        } flex flex-col max-w-[282px] w-full`}
      >
        <div className='flex items-center text-md'>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <p className='font-semibold text-base'>{name}</p>
        <span className='font-bold text-xs'>{price}</span>
        {layout === 'Sort3' && (
          <>
            <p>{description}</p>
            <div className='flex flex-col gap-y-[8px]'>
              <button className='bg-black w-full text-white rounded-md py-[9px]'>
                {/* <Link href={`shop/${id}`}>View Information</Link> */}
              </button>
              <button className='py-[9px] font-bold'>Wish List</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
