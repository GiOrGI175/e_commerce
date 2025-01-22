'use client';

import { navLinks } from '@/commons/services/navLinks';
import { it } from 'node:test';
import Navbar from '../__atoms/NavBar';
import { logo } from '@/utility';
import Image from 'next/image';
import SearchBtn from '../__atoms/SearchBtn';
import UserBtn from '../__atoms/Userbtn';
import CartBtn from '../__atoms/CartBtn';

const Header = () => {
  return (
    <header className='max-w-[1120px] w-full h-[20px] border-[1px] border-black flex justify-between'>
      <div>
        <Image src={logo} width={105} height={24} alt='logo' />
      </div>
      <>
        <Navbar />
      </>
      <div>
        <SearchBtn />
        <UserBtn />
        <CartBtn />
      </div>
    </header>
  );
};

export default Header;
