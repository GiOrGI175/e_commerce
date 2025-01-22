'use client';

import Image from 'next/image';

import { search } from '@/utility';

const SearchBtn = () => {
  return (
    <button>
      <Image src={search} width={24} height={24} alt='user' />
    </button>
  );
};

export default SearchBtn;
