import SwiperHeader from '@/components/__atoms/SwiperHeader';
import Header from '@/components/__molecules/Header';
import CategotySection from '@/components/__organisms/CategotySection';
import SwiperProduct from '@/components/__organisms/SwiperProduct';
import SwipperBaner from '@/components/__organisms/SwipperBaner';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='w-full flex justify-center '>
      <div className='max-w-[1440px] w-full flex flex-col items-center   border-[1px] border-black '>
        <SwipperBaner />
        <CategotySection />
        <SwiperHeader />
        <div className='flex self-end  border-[1px] border-black  '>
          <SwiperProduct />
        </div>
      </div>
    </section>
  );
}
