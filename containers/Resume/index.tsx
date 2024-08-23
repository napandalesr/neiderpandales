'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Title from '@/components/title';
import { masterDataES, resumeType } from '@/utils/masterData';

import 'animate.css';

const Resume = ({education, experiencie}: resumeType) => {
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
      <h3 className='ml-4 text-2xl text-custom-primary font-bold'>{education.institute} - <span className='text-custom-secundary'>{education.degree}</span></h3>
      <h5 className='ml-4 text-xl text-custom-primary font-bold mt-2'>{experiencie.subtitle}</h5>
      <p className='ml-4 text-custom-text text-sm'>
        {education.description}
      </p>
    </section>
    <section className='relative w-full pb-12 lg:h-80'>
      <Title text={experiencie.title}/>
      <section className={`${animationParagraph} overflow-hidden`}>
        <h3 className='ml-4 text-2xl text-custom-primary font-bold'>{experiencie.description[counter].title}: <span className='text-custom-secundary'>{experiencie.description[counter].bussines}</span></h3>
        <span className='ml-4 text-custom-text font-bold'>{experiencie.description[counter].dates}</span>
        <section className='flex mt-2 ml-4'>
          <section className='w-[45%]'>
            <h5 className='text-xl text-custom-primary font-bold'>{experiencie.subtitle}</h5>
            <p className='text-custom-text text-sm mr-4'>{experiencie.description[counter].description.text}</p>
            <p className='text-custom-text text-sm mr-4'><span className='text-custom-primary font-bold'>Cargo:</span> {experiencie.description[counter].cargo}</p>
          </section>
          <section>
            <h5 className='text-xl text-custom-primary font-bold'>{experiencie.subtitle2}</h5>
            <p className='text-custom-text text-sm' dangerouslySetInnerHTML={{__html: experiencie.description[counter].functions.text}}></p>
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

export default Resume;