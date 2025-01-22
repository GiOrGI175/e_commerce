'use client';

import Image from 'next/image';

import { Cart } from '@/utility';

const CartBtn = () => {
  return (
    <button>
      <Image src={Cart} width={24} height={24} alt='user' />
    </button>
  );
};

export default CartBtn;
