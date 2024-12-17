'use client'

import Modal from '@/components/Modal';
import Title from '@/components/title';
import { masterDataES } from '@/utils/masterData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type props = {
  changeShowModal: (src: string) => void
}

export const Libreries = ({ changeShowModal }: props) => {
  
  return <section className='h-[85%] pb-12' id={masterDataES.nav[3].navbar}>
    <Title text='Librerías'/>
    <section className='flex gap-6 flex-col md:flex-row mt-8 overflow-y-auto flex-wrap h-full'>
      <section className='border-2 rounded-lg lg:w-[45%] p-10'>
        <h4 className='text-lg md:text-2xl text-custom-primary font-bold'>
          <Link href={'https://www.npmjs.com/package/carousel-motion-blured'} target='_blank'>Carrusel 3d</Link>
        </h4>
        <section className='group relative'>
          <video autoPlay loop src="/videos/lib/carouser-3d/carousel-example.mp4"></video>
          <button onClick={()=> changeShowModal("/videos/lib/carouser-3d/carousel-example.mp4")} className='absolute opacity-0 group-hover:opacity-75 left-0 top-0 w-full h-full bg-black transition-all ease-in-out flex justify-center items-center'>
            <Image src={'/icons/eye.png'} alt='' width={120} height={120}/>
          </button>
        </section>
        <p className='mt-4 text-custom-text text-xs md:text-base'>Disponible para react: <span className='underline'>npm i carousel-motion-blured</span> </p>
      </section>
      <section className='border-2 rounded-lg lg:w-[45%] p-10'>
        <h4 className='text-lg md:text-2xl text-custom-primary font-bold'>
          <Link href={'https://www.npmjs.com/package/effect-circle-square'} target='_blank'>Animación de circulo a cuadrado</Link>
        </h4>
        <section className='group relative'>
          <video autoPlay loop src="/videos/lib/effect-circle/1.mp4"></video>
          <button onClick={()=> changeShowModal("/videos/lib/effect-circle/1.mp4")}  className='absolute opacity-0 group-hover:opacity-75 left-0 top-0 w-full h-full bg-black transition-all ease-in-out flex justify-center items-center'>
            <Image src={'/icons/eye.png'} alt='' width={120} height={120}/>
          </button>
        </section>
        <p className='mt-4 text-custom-text text-xs md:text-base'>Disponible para react: <span className='underline'>npm i effect-circle-square</span> </p>
      </section>
      <section className='border-2 rounded-lg lg:w-[45%] p-10'>
        <h4 className='text-lg md:text-2xl text-custom-primary font-bold'>
          <Link href={'https://www.npmjs.com/package/news-gallery-neiderapp'} target='_blank'>Galería de noticias</Link>
        </h4>
        <section className='group relative'>
          <video autoPlay loop src="/videos/lib/new-gallery/example.mp4"></video>
          <button onClick={()=> changeShowModal("/videos/lib/new-gallery/example.mp4")}  className='absolute opacity-0 group-hover:opacity-75 left-0 top-0 w-full h-full bg-black transition-all ease-in-out flex justify-center items-center'>
            <Image src={'/icons/eye.png'} alt='' width={120} height={120}/>
          </button>
        </section>
        <p className='mt-4 text-custom-text text-xs md:text-base'>Disponible para react: <span className='underline'>npm i news-gallery-neiderapp</span> </p>
      </section>
      
    </section>
  </section>;
}
