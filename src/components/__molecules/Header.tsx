'use client';

import { navLinks } from '@/commons/services/navLinks';
import { it } from 'node:test';
import Navbar from '../__atoms/NavBar';
import { logo } from '@/utility';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='max-w-[1120px] w-full h-[20px] border-[1px] border-black flex'>
      <div>
        <Image src={logo} width={105} height={24} alt='logo' />
      </div>
      <>
        <Navbar />
      </>
      <div></div>
    </header>
  );
};

export default Header;
