import Header from '@/components/__molecules/Header';
import SwipperBaner from '@/components/__molecules/SwipperBaner';
import Image from 'next/image';

export default function Home() {
  return (
    <section className='w-full flex justify-center '>
      <div className='max-w-[1440px] w-full flex justify-center '>
        <SwipperBaner />
      </div>
    </section>
  );
}
