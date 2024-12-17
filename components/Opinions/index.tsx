"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { recommendationsType } from '@/utils/masterData';
import useScreenSize from '@/hooks/useScreenSize';

const Opinions = ({ img, text, name }: recommendationsType) => {
  const [showText, setShowText] = useState(true);
  const { width } = useScreenSize();

  useEffect(()=> {
    if(width > 760) {
      setShowText(false);
    }
  },[width])
  
  return <section className='cursor-pointer flex flex-col items-center text-center w-60 md:w-72 my-4 transition-all ease-in-out'>
    <section className='p-1 w-36 h-36 bg-custom-accent rounded-full'>
      <Image className='rounded-full' src={img} alt='Lennin' width={181} height={181}/>
    </section>
    <span className='text-sm mt-1 font-bold text-custom-primary'>{name}</span>
    <p className={`text-xs mt-2 text-custom-text transition-all ease-in-out ${showText && 'h-8 overflow-hidden bg-gradient-to-t from-[#d2d2d2]'}`}>{text}</p>
    {
      width < 760 && <button className='text-custom-secundary underline' onClick={()=>setShowText(!showText)}>{showText ? <>Leer más</> : <>Leer menos</>}</button>
    }
    
  </section>;
}

export default Opinions;