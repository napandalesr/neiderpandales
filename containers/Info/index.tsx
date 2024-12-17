import TypingEffectArray from '@/components/TypingEffectArray';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Info = () => {
  return <section className='w-[90%] md:w-[300px] min-h-[653px] md:max-h-[98vh] md:ml-4 rounded-lg bg-white text-center drop-shadow-[6px_2px_10px_rgba(97,97,97,1)] relative z-10 mt-32 md:mt-0'>
    <Image className='w-full object-cover rounded-lg' src={'/images/home/profile.png'} alt='Profile' width={384} height={496} quality={100} />
    <h1 className='w-[300px] font-bold text-custom-text'>Neider Andres Pandales Renteria</h1>
    <h2 className='text-2xl font-bold text-custom-secundary h-10'><TypingEffectArray texts={['Ingeniero de sistemas', 'Desarrollador full stack', 'Dev backend', 'Dev Frontend', 'Diseñador UX/IU']} speed={100}/></h2>
    <section className='flex items-center w-full justify-center py-3'>
      <Link target='_blank' href={'https://www.linkedin.com/in/neider-andres-pandales-renteria-385860108/'}><Image src={'/icons/LinkedIn.png'} alt='Linkedin' width={90} height={90}/></Link>
      <Link href={'https://github.com/napandalesr'} target='_blank'><Image src={'/icons/GitHub.png'} alt='GitHub' width={90} height={90}/></Link>
      <Link href={''}><Image src={'/icons/Gmail Logo.png'} alt='GitHub' width={90} height={90}/></Link>
    </section>
    <section className='flex justify-between h-24'>
      <Link href='/cv.pdf' target='_blank' className='w-1/2 border-r-2 border-t-2 border-custom-accent flex justify-center items-center'><Image src={'/icons/download.png'} alt='GitHub' width={50} height={50}/> </Link>
      <Link href='https://dm.wa.link/0a0dgs' target='_blank' className='w-1/2 flex border-t-2 border-custom-accent justify-center items-center'><Image src={'/icons/incoming-call.png'} alt='GitHub' width={58} height={64}/> </Link>
    </section>
  </section>;
}
