'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import Title from '@/components/title';
import { masterDataES, resumeType } from '@/utils/masterData';

import 'animate.css';

export const Resume = ({education, experiencie}: resumeType) => {
  const [ counter, setCounter] = useState(0);
  const [ animationParagraph, setAnimationParagraph] = useState('');

  const transitionParagraphRight = () => {
    setAnimationParagraph('animate__animated animate__fadeOutLeftBig');
    setTimeout(() =>{
      setCounter(counter+1);
      setAnimationParagraph('animate__animated animate__fadeInRight');
    }, 200);
  }

  const transitionParagraphLeft = () => {
    setAnimationParagraph('animate__animated animate__fadeOutRightBig');
    setTimeout(() =>{
      setCounter(counter-1);
      setAnimationParagraph('animate__animated animate__fadeInLeftBig');
    }, 200);
  }

  return <section id={masterDataES.nav[1].navbar}>
    <section className='lg:h-52'>
      <Title text={education.title}/>
      <h3 className='md:ml-4 text-xl md:text-2xl text-custom-primary font-bold'>{education.institute} - <span className='text-custom-secundary'>{education.degree}</span></h3>
      <h5 className='md:ml-4 text-xl md:text-xl text-custom-primary font-bold mt-2'>{experiencie.subtitle}</h5>
      <p className='md:ml-4 text-custom-text text-sm'>
        {education.description}
      </p>
    </section>
    <section className='relative w-full pb-12'>
      <Title text={experiencie.title}/>
      <section className={`${animationParagraph} overflow-hidden`}>
        <h3 className='md:ml-4 text-xl md:text-2xl text-custom-primary font-bold'>{experiencie.description[counter].title}: <span className='text-custom-secundary'>{experiencie.description[counter].bussines}</span></h3>
        <span className='ml-4 text-custom-text font-bold text-sm'>{experiencie.description[counter].dates}</span>
        <section className='flex flex-col md:flex-row mt-2 md:ml-4 gap-5 items-start'>
          <section className='w-full md:w-[36%] shrink-0'>
            <h5 className='text-base md:text-lg text-custom-primary font-bold'>{experiencie.subtitle}</h5>
            <p className='text-custom-text text-xs md:text-sm leading-relaxed'>{experiencie.description[counter].description.text}</p>
            <p className='text-custom-text text-xs md:text-sm mt-2'><span className='text-custom-primary font-bold'>Cargo:</span> {experiencie.description[counter].cargo}</p>
          </section>
          <section className='w-full md:flex-1'>
            <h5 className='text-base md:text-lg text-custom-primary font-bold'>{experiencie.subtitle2}</h5>
            <p className='text-custom-text text-xs md:text-sm leading-relaxed' dangerouslySetInnerHTML={{__html: experiencie.description[counter].functions.text}}></p>
          </section>
        </section>
      </section>
      
      <section className='absolute bottom-0 right-0 flex items-center'>
        {
          counter > 0 && <button onClick={transitionParagraphLeft}><Image className='h-12 rotate-180' src={'/icons/double-arrow-right.png'} alt='arrow' width={50} height={64}/></button>
        }
        <span>{counter+1}/{experiencie.description.length}</span>
        {
          counter+1 !== experiencie.description.length && <button onClick={transitionParagraphRight}><Image className='h-12' src={'/icons/double-arrow-right.png'} alt='arrow' width={50} height={64}/></button>
        }
      </section>
    </section>
  </section>;
}