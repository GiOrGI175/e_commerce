'use client';

import { navLinks } from '@/commons/services/navLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const PathName = usePathname();

  return (
    <nav>
      <ul className='flex w-full justify-between'>
        {navLinks.map((item) => {
          const isActive = PathName.startsWith(item.link);

          return (
            <li key={item.link} className='ml-[40px]'>
              <span
                className={`font-publicSans font-normal leading-[24px] group-hover:text-[#F2F2F2] duration-1000  ${
                  isActive
                    ? 'text-[#141718] group-hover:text-[#201F24]'
                    : 'text-[#6C7275]'
                }  text-[14px]`}
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
