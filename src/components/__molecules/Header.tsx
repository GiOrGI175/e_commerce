'use client';

import { navLinks } from '@/commons/services/navLinks';
import { it } from 'node:test';
import Navbar from '../__atoms/NavBar';
import { Logo } from '@/utility/images/ImgExport';
import Image from 'next/image';

import { useState } from 'react';

const Header = () => {
  const [modal, isModalOpen] = useState(false);

  const handleClick = () => {
    isModalOpen(!isModalOpen);
  };
  return (
    <header className='max-w-[1120px] w-full h-[60px]  flex justify-between items-center'>
      <div>
        <Image src={Logo} width={105} height={24} alt='logo' />
      </div>
      <>
        <Navbar />
      </>
      <div className='flex gap-4'>
        {/* <SearchBtn />
        <UserBtn />
        <CartBtn /> */}
      </div>
    </header>
  );
};

export default Header;
