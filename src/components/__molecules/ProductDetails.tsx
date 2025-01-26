'use client';

import { useState } from 'react';
import Image from 'next/image';
import AddToCart from '../__atoms/AddToCart';
import useSetObj from '../__atoms/SetObj';

const ProductDetails = () => {
  const myObject = useSetObj((state: any) => state.myObject);

  const [color, setColor] = useState(myObject?.chooseColor[0].color || '');
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  if (!myObject) {
    return <div>Loading...</div>;
  }

  return (
    <div className='sm:ml-[63px] mt-[220px] sm:mt-[0px]'>
      <div className='flex items-center'>
        <div className='flex gap-[2px] mr-[10px]'>
          {myObject.stars.map((star: any, index: any) => (
            <div key={index}>
              <Image src={star} width={16} height={16} alt='stars' />
            </div>
          ))}
        </div>
        <div>
          <span className='font-poppins font-normal text-[12px]  leading-[20px] tracking-tighter-[-0.1px]  text-[#141718]'>
            {myObject.reviews} reviews
          </span>
        </div>
      </div>

      <div>
        <h2 className='my-[16px] font-poppins font-medium text-[40px]  leading-[44px] tracking-tighter-[-0.4px]  text-[#141718]'>
          {myObject.name}
        </h2>
        <p className='mb-[16px] max-w-[430px]  font-poppins font-normal text-[16px]  leading-[26px] text-[#6C7275]'>
          {myObject.description}
        </p>
        <div className='flex'>
          <span className='mr-[12px] font-poppins font-medium text-[28px] leading-[34px] tracking-tighter-[-0.6px]  text-[#121212]'>
            ${myObject.price}
          </span>
          <span className='font-poppins font-medium text-[20px] leading-[28px]  text-[#6C7275] line-through'>
            ${myObject.oldPrice}
          </span>
        </div>
      </div>

      <div className='mt-[48px] flex flex-col'>
        <span className='font-Inter font-semibold text-[16px] leading-[26px]  text-[#6C7275] '>
          Measurements
        </span>
        <span className='mt-[8px] font-Inter font-normal text-[20px] leading-[32px]  text-[#141718] '>
          {myObject.measurements}
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
          {myObject.chooseColor.map((item: any, index: any) => {
            return (
              <div
                className={`max-w-[72px] max-h-[72px] overflow-hidden ${
                  index === hoverIndex && 'border-[1px] border-[#141718]'
                }`}
                onClick={() => {
                  setHoverIndex(index);
                  setColor(item.color);
                }}
                key={index}
              >
                <Image src={item.img} width={72} height={72} alt='color' />
              </div>
            );
          })}
        </div>
        <AddToCart />
        <div className='py-[24px] mt-[32px] border-t-[1px] border-[#E8ECEF]'>
          <div className='flex'>
            <div className='w-[125px]'>
              <span className='font-Inter font-normal text-[12px] leading-[20px]  text-[#6C7275]'>
                SKU
              </span>
            </div>
            <div>
              <span className=' font-Inter font-normal text-[12px] leading-[20px]  text-[#141718]'>
                {myObject.SKU}
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
              <span>{myObject.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
