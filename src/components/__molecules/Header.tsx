'use client';

import { navLinks } from '@/commons/services/navLinks';
import { it } from 'node:test';
import Navbar from '../__atoms/NavBar';

const Header = () => {
  return (
    <header className='max-w-[1120px] w-full h-[20px] border-[1px] border-black flex'>
      <div>logo</div>

      <>
        <Navbar />
      </>
    </header>
  );
};

export default Header;
