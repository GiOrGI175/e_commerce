'use client';

import { navLinks } from '@/commons/services/navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const PathName = usePathname();

  return (
    <nav>
      <ul className='flex'>
        {navLinks.map((item) => {
          const isActive = PathName.startsWith(item.link);

          return (
            <li key={item.link}>
              <span
                className={`font-publicSans font-bold leading-[24px] group-hover:text-[#F2F2F2] duration-1000  ${
                  isActive
                    ? 'text-[#201F24] group-hover:text-[#201F24]'
                    : 'text-[#B3B3B3]'
                }  text-[19px]`}
              >
                <Link href={item.link}>{item.title}</Link>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
