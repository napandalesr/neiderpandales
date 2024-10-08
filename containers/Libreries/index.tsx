'use client'

import { masterDataES } from '@/utils/masterData';
import Link from 'next/link';
import React from 'react';

const Libreries = () => {
  return <>
  <section className='flex gap-6 flex-col md:flex-row mt-8' id={masterDataES.nav[3].navbar}>
    <section className='border-2 rounded-lg lg:w-1/2 p-10'>
      <h4 className='text-lg md:text-2xl text-custom-primary font-bold'>
        <Link href={'https://www.npmjs.com/package/carousel-motion-blured'} target='_blank'>Carrusel 3d</Link>
      </h4>
      <video autoPlay loop src="/videos/lib/carouser-3d/carousel-example.mp4"></video>
      <p className='mt-4 text-custom-text text-xs md:text-base'>Disponible para react: <span className='underline'>npm install carousel-motion-blured</span> </p>
    </section>
    <section className='border-2 rounded-lg lg:w-1/2 p-10'>
      <h4 className='text-lg md:text-2xl text-custom-primary font-bold'>
        <Link href={'https://www.npmjs.com/package/effect-circle-square'} target='_blank'>Animación de circulo a cuadrado</Link>
      </h4>
      <video autoPlay loop src="/videos/lib/effect-circle/1.mp4"></video>
      <p className='mt-4 text-custom-text text-xs md:text-base'>Disponible para react: <span className='underline'>npm install effect-circle-square</span> </p>
    </section>
  </section>
  </>;
}

export default Libreries;