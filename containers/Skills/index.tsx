'use client'

import React, { useRef } from 'react';
import Image from 'next/image';

import Title from '@/components/title';
import Stars from '@/components/Stars';
import useScreenSize from '@/hooks/useScreenSize';
import { masterDataES } from '@/utils/masterData';

const Skills = () => {
  const blandasRef = useRef<HTMLDivElement>(null);
  const tecRef = useRef<HTMLDivElement>(null);
  const { width } = useScreenSize();

  const showMores = () => {
    blandasRef && blandasRef.current && blandasRef.current.scrollIntoView({behavior: 'smooth'});
  }

  const showBack = () => {
    tecRef && tecRef.current && tecRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return <section className='overflow-hidden h-full' id={masterDataES.nav[2].navbar}>
    <span ref={tecRef}></span>
    <Title text='Habilidades'/>
    <section className='md:ml-4 md:h-[30rem] relative'>
      <h3 className='text-2xl font-bold text-custom-primary'>Técnicas</h3>
      <section className='ml-4 flex flex-wrap md:flex-nowrap gap-6'>
        <section className='md:w-1/3'>
          <h5 className='text-xl text-custom-secundary font-bold'>Backend</h5>
          <section>
            Node js
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
          <section>
            Nest js
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
          <section>
            Spring boot
            <span className='flex gap-2'>{<Stars full={1}/>}</span>
          </section>
          <section>
            .NET
            <span className='flex gap-2'>{<Stars full={1}/>}</span>
          </section>
        </section>
        <section className='md:w-1/3'>
          <h5 className='text-xl text-custom-secundary font-bold'>Frontend</h5>
          <section>
            React js
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
          <section>
            Next js
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
          <section>
            Angular js
            <span className='flex gap-2'>{<Stars full={3}/>}</span>
          </section>
          <section>
            React Native
            <span className='flex gap-2'>{<Stars full={2}/>}</span>
          </section>
          <section>
            Tailwind css
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
          <section>
            Sass
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
        </section>
        <section className='md:w-1/3'>
          <h5 className='text-xl text-custom-secundary font-bold'>Diseño</h5>
          <section>
            Figma
            <span className='flex gap-2'>{<Stars full={3}/>}</span>
          </section>
          <section>
            Illustrator
            <span className='flex gap-2'>{<Stars full={2}/>}</span>
          </section>
          <section>
            Photoshop
            <span className='flex gap-2'>{<Stars full={2}/>}</span>
          </section>
        </section>
        <section className='md:w-1/3'>
        <h5 className='text-xl text-custom-secundary font-bold'>SGBD</h5>
        <section>
            Oracle
            <span className='flex gap-2'>{<Stars full={3}/>}</span>
          </section>
          <section>
            MySQL
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section>
            PostgreSQL
            <span className='flex gap-2'>{<Stars full={3}/>}</span>
          </section>
          <section>
            MongoDB
            <span className='flex gap-2'>{<Stars full={3}/>}</span>
          </section>
          <section>
            Firestore
            <span className='flex gap-2'>{<Stars full={2}/>}</span>
          </section>
        </section>
        {
          width >= 768 && <section className='w-full flex absolute bottom-10'>
          <button className='mx-auto animate-float-up-sm' onClick={showMores}><Image src={'/icons/show-more.png'} alt='show more' width={110} height={63}/></button>
        </section>
        }
        
      </section>
    </section>
    <section className='md:ml-4 md:h-[32rem] relative' ref={blandasRef}>
      <h3 className='text-2xl font-bold text-custom-primary'>Blandas</h3>
      <section className='ml-4 flex flex-wrap md:flex-nowrap gap-6 mt-4'>
        <section>
          <section>
            Trabajo en Equipo
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section>
            Comunicación Efectiva
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section>
            Resolución de Problemas
            <span className='flex gap-2'>{<Stars full={5}/>}</span>
          </section>
        </section>
        <section>
          <section>
            Adaptabilidad
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section>
            Creatividad
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section>
            Liderazgo
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
        </section>
      </section>
      <h3 className='text-2xl font-bold text-custom-primary mt-8'>Idiomas</h3>
        <section className='ml-4 mt-2'>
        <section>
            Español - Nativo
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
          </section>
          <section className='mt-4'>
            Ingles
            <p className="text-xs">Escrito</p>
            <span className='flex gap-2'>{<Stars full={4}/>}</span>
            <p className="text-xs mt-2">Hablado</p>
            <span className='flex gap-2'>{<Stars full={2}/>}</span>
          </section>
        </section>
      {
        width >= 768 && <section className='w-full flex absolute bottom-4'>
        <button className='mx-auto animate-float-up-sm' onClick={showBack}><Image src={'/icons/back.png'} alt='show more' width={110} height={63}/></button>
      </section>
      }
      
    </section>
  </section>;
}

export default Skills;