import Header from '@/components/__molecules/Header';
import Image from 'next/image';

export default function HomePage() {
  return (
    <section className='w-full flex justify-center  '>
      <div className='max-w-[1440px] w-full flex justify-center '>
        <Header />
      </div>
    </section>
  );
}
