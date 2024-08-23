import React from 'react';
import Image from 'next/image';

import { recommendationsType } from '@/utils/masterData';
import Link from 'next/link';

const Opinions = ({ img, text, link, name }: recommendationsType) => {
  return <Link target='_blank' href={link} className='cursor-pointer flex flex-col items-center text-center w-72 my-4 transition-all ease-in-out hover:scale-110'>
    <section className='p-1 w-36 h-36 bg-custom-accent rounded-full'>
      <Image className='rounded-full' src={img} alt='Lennin' width={181} height={181}/>
    </section>
    <span className='text-sm mt-1 font-bold text-custom-primary'>{name}</span>
    <p className='text-xs mt-2 text-custom-text'>{text}</p>
  </Link>;
}

export default Opinions;