'use client';

import Image from 'next/image';

import { user } from '@/utility';

const SearchBtn = () => {
  return (
    <button>
      <Image src={user} width={24} height={24} alt='user' />
    </button>
  );
};

export default SearchBtn;
