import React from 'react';

type props = {
  text: string
}

const Title = ({text}: props) => {
  return <section className='w-min py-4'>
    <h2 className='text-3xl md:text-4xl font-bold text-custom-accent w-max'>{text}</h2>
    <section className='flex'>
      <section className='w-2/3 h-[2px] bg-custom-primary'></section>
      <section className='w-1/3 h-[2px] bg-custom-accent'></section>
    </section>
  </section>;
}

export default Title;