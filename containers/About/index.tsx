'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Opinions from '@/components/Opinions';
import Title from '@/components/title';
import { aboutType, masterDataES, recommendationsType } from '@/utils/masterData';
import useScreenSize from '@/hooks/useScreenSize';

import 'swiper/css';

type Props = {
  about: aboutType;
  opinions: recommendationsType[]
}

export const About = ({ about, opinions }: Props) => {
  const opinionsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { width } = useScreenSize();
  const aboutScrollOpinions = () => {
    opinionsRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const aboutScroll = () => {
    aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return <section className={`overflow-hidden h-full`} id={masterDataES.nav[0].navbar}>
    <section className='h-full relative' ref={aboutRef}>
      <Title text={about.title}/>
      <p className='mt-4 text-sm text-custom-text'>
        {about.text}
      </p>
      <section className='text-custom-text text-sm mt-6'>
        {
          about.info.map(item => <p key={item} className='flex gap-4 md:gap-6 items-center mt-2 ml-8'><Image className='h-6' src={'/icons/arrow.png'} alt='arrow' width={14} height={27}/> {item}</p>)
        }
        <section className='w-full items-center absolute bottom-4 hidden xl:flex'>
          <button className='mx-auto mt-20 w-max animate-float-up-sm' onClick={aboutScrollOpinions}><Image src={'/icons/show-opinions.png'} alt='show more' width={103} height={42}/></button>
        </section> 
      </section>
    </section>
    <section ref={opinionsRef} className='h-full'>
      <Title text='Recomendaciones' />
      {
        width < 760 ?
        <Swiper
        keyboard
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={'auto'}
        scrollbar={{draggable: true}}
        navigation
        pagination={{ clickable: true }}
        mousewheel
          className={``}
        >
          {
            opinions.map(opinion => <SwiperSlide key={opinion.name} className={`!w-60`}><Opinions img={opinion.img} link={opinion.link} text={opinion.text} name={opinion.name}/></SwiperSlide>)
          }
        </Swiper>
        :
        <section className='flex gap-4'>
        {
          opinions.map(opinion => <Opinions key={opinion.name} img={opinion.img} link={opinion.link} text={opinion.text} name={opinion.name}/>)
        }
        </section>
        
      }
      
      {
        width >= 768 && <section className='w-full flex items-center'>
        <button className='mx-auto w-max animate-float-up-sm' onClick={aboutScroll}><Image src={'/icons/back.png'} alt='show more' width={103} height={42}/></button>
      </section>
      }
    </section>
  </section>;
}