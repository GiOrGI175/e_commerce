'use client';

import { navLinks } from '@/commons/services/navLinks';
import { it } from 'node:test';

const Header = () => {
  return (
    <header className='max-w-[1120px] w-full h-[20px] border-[1px] border-black'>
      <div>logo</div>
      <nav>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
