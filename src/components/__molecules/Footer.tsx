import {
  FacebookIcon,
  InstagramIcon,
  Logo,
  YoutubeIcon,
} from '@/utility/images/ImgExport';
import Image from 'next/image';
import React from 'react';
import Navbar from '../__atoms/NavBar';

export default function Footer() {
  return (
    <div className='w-full h-[249px] bg-black mt-[80px]'>
      <div className='max-w-[1120px] m-auto '>
        <div className='flex mt-[81px] justify-between '>
          <div className='flex'>
            <Image src={Logo} width={105} height={24} alt='Logo'></Image>
            <p className='text-white  ml-[65px]'>Gift & Decoration Store</p>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <div className='text-white   mt-[65px] flex justify-between '>
          <div className='flex gap-7'>
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <button>Privacy Policy</button>
            <button>Terms of Use</button>
          </div>
          <div className='flex gap-[26px]'>
            <Image
              src={InstagramIcon}
              width={20}
              height={18}
              alt='InstagramIcon'
            />
            <Image
              src={FacebookIcon}
              width={20}
              height={18}
              alt='FacebookIcon'
            />

            <Image src={YoutubeIcon} width={20} height={18} alt='YoutubeIcon' />
          </div>
        </div>
      </div>
    </div>
  );
}
