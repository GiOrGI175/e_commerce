'use client';

import { product } from '@/commons/services/productDetails';
import Image from 'next/image';
import { useState } from 'react';
import AddToCart from '../__atoms/AddToCart';

const ProductDetails = () => {
  const [color, setColor] = useState(product.chooseColor[0].color);
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <div className='ml-[63px]'>
      <div className='flex items-center'>
        <div className='flex gap-[2px] mr-[10px]'>
          {product.stars.map((star) => (
            <div>
              <Image src={star} width={16} height={16} alt='stars' />
            </div>
          ))}
        </div>
        <div>
          <span className='font-poppins font-normal text-[12px]  leading-[20px] tracking-tighter-[-0.1px]  text-[#141718]'>
            {product.reviews} reviews
          </span>
        </div>
      </div>

      <div>
        <h2 className='my-[16px] font-poppins font-medium text-[40px]  leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
          {product.name}
        </h2>
        <p className='mb-[16px] max-w-[430px]  font-poppins font-normal text-[16px]  leading-[26px] text-[#6C7275]'>
          {product.description}
        </p>
        <div className='flex'>
          <span className='mr-[12px] font-poppins font-medium text-[28px] leading-[34px] tracking-tighter-[-0.6px]  text-[#121212]'>
            ${product.price}
          </span>
          <span className='font-poppins font-medium text-[20px] leading-[28px]  text-[#6C7275] line-through'>
            ${product.oldPrice}
          </span>
        </div>
      </div>

      <div className='mt-[48px] flex flex-col'>
        <span className='font-Inter font-semibold text-[16px] leading-[26px]  text-[#6C7275] '>
          Measurements
        </span>
        <span className='mt-[8px] font-Inter font-normal text-[20px] leading-[32px]  text-[#141718] '>
          {product.measurements}
        </span>
      </div>

      <div className='flex flex-col'>
        <span className='mb-[8px] font-Inter font-semibold text-[16px] leading-[26px]  text-[#6C7275] '>
          Choose Color
        </span>
        <span className='mb-[16px] font-Inter font-normal text-[20px] leading-[32px]  text-[#141718] '>
          {color}
        </span>
        <div className='flex gap-[16px]'>
          {product.chooseColor.map((item, index) => {
            return (
              <div
                className={`max-w-[72px] max-h-[72px] overflow-hidden ${
                  index === hoverIndex && 'border-[1px] border-[#141718]'
                }`}
                onClick={() => {
                  setHoverIndex(index);
                  setColor(item.color);
                }}
              >
                <Image src={item.img} width={72} height={72} alt='color' />
              </div>
            );
          })}
        </div>
        <>
          <AddToCart />
        </>
        <div className='py-[24px] mt-[32px] border-t-[1px] border-[#E8ECEF]'>
          <div className='flex'>
            <div className='w-[125px]'>
              <span className='font-Inter font-normal text-[12px] leading-[20px]  text-[#6C7275]'>
                SKU
              </span>
            </div>
            <div>
              <span className=' font-Inter font-normal text-[12px] leading-[20px]  text-[#141718]'>
                {product.SKU}
              </span>
            </div>
          </div>
          <div className='flex'>
            <div className='w-[125px]'>
              <span className='font-Inter font-normal text-[12px] leading-[20px]  text-[#6C7275]'>
                CATEGORY
              </span>
            </div>
            <div className=' font-Inter font-normal text-[12px] leading-[20px]  text-[#141718]'>
              <span>{product.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
