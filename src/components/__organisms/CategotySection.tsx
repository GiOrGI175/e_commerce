'use client';

import Image from 'next/image';

import { livingRoom, badRoom, kitchen } from '@/utility/images/ImgExport';

const CategotySection = () => {
  return (
    <section className=' max-w-[1120px] w-full mt-[240px] flex gap-[24px]'>
      <div className='relative'>
        <div className='absolute top-0 left-0'>
          <p>Living Room</p>
          <button>Shop Now</button>
        </div>
        <Image src={livingRoom} width={548} height={664} alt='livingRoomImg' />
      </div>
      <div className='flex flex-col gap-[24px]'>
        <div className='relative'>
          <Image src={badRoom} width={548} height={664} alt='badRoomImg' />
          <div className='absolute top-0 left-0'>
            <p>Living Room</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div className='relative'>
          <Image src={kitchen} width={548} height={664} alt='Kitchen' />
          <div className='absolute top-0 left-0'>
            <p>Kitchen</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategotySection;
