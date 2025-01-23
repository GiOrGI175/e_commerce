import DetailsMiniInfo from '@/components/__atoms/DetailsMiniInfo';
import SwiperHeader from '@/components/__atoms/SwiperHeader';
import Header from '@/components/__molecules/Header';
import ArticlesSection from '@/components/__organisms/ArticlesSection';
import CategotySection from '@/components/__organisms/CategotySection';
import LowerPriceSection from '@/components/__organisms/LowerPriceSection';
import SwiperProduct from '@/components/__organisms/SwiperProduct';
import SwipperBaner from '@/components/__organisms/SwipperBaner';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full flex justify-center '>
      <div className='max-w-[1440px] w-full flex flex-col items-center  '>
        <SwipperBaner />
        <CategotySection />
        <SwiperHeader />
        <div className='flex self-end   '>
          <SwiperProduct />
        </div>
        <DetailsMiniInfo />
        <LowerPriceSection />
        <ArticlesSection />
      </div>
    </div>
  );
}
