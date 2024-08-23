'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import Opinions from '@/components/Opinions';
import Title from '@/components/title';
import { aboutType, masterDataES, recommendationsType } from '@/utils/masterData';
import useScreenSize from '@/hooks/useScreenSize';

type Props = {
  about: aboutType;
  opinions: recommendationsType[]
}

const About = ({ about, opinions }: Props) => {
  const opinionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { width } = useScreenSize();
  const aboutScrollOpinions = () => {
    opinionsRef && opinionsRef.current && opinionsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const aboutScroll = () => {
    aboutRef && aboutRef.current && aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return <section className={`overflow-hidden h-full`} id={masterDataES.nav[0].navbar}>
    <section className='h-full relative' ref={aboutRef}>
      <Title text={about.title}/>
      <p className='mt-4 text-sm text-custom-text'>
        {about.text}
      </p>
      <section className='text-custom-text text-sm mt-6'>
        {
          about.info.map(item => <p key={item} className='flex gap-6 items-center mt-2 ml-8'><Image className='h-6' src={'/icons/arrow.png'} alt='arrow' width={14} height={27}/> {item}</p>)
        }
        <section className='w-full items-center absolute bottom-4 hidden xl:flex'>
          <button className='mx-auto mt-20 w-max animate-float-up-sm' onClick={aboutScrollOpinions}><Image src={'/icons/show-opinions.png'} alt='show more' width={103} height={42}/></button>
        </section> 
      </section>
    </section>
    <section ref={opinionsRef} className='h-full'>
      <Title text='Recomendaciones' />
      <section className='flex gap-4'>
        {
          opinions.map(opinion => <Opinions key={opinion.name} img={opinion.img} link={opinion.link} text={opinion.text} name={opinion.name}/>)
        }
        
      </section>
      {
        width >= 768 && <section className='w-full flex items-center'>
        <button className='mx-auto w-max animate-float-up-sm' onClick={aboutScroll}><Image src={'/icons/back.png'} alt='show more' width={103} height={42}/></button>
      </section>
      }
    </section>
  </section>;
}

export default About;