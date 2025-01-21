import { useState } from 'react';

import { navLinks } from '@/commons/services/navLinks';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex items-center justify-between w-full py-6'>
      {/* <img src={logo} alt='hoobank' className='h-[32px] w-[124px]' /> */}

      <ul className='items-center justify-end flex-1 hidden list-none sm:flex gap-10'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[16px] font-normal ${
              active === nav.title ? 'text-white' : 'text-dimWhite'
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='flex items-center justify-end flex-1 sm:hidden'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='h-[28px] w-[28px] object-contain'
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl bg-black p-6`}
        >
          <ul className='flex flex-col items-start justify-end flex-1 list-none gap-10'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-[16px] font-medium ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
