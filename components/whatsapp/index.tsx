import Image from 'next/image';
import React from 'react';

import 'animate.css';

const Whatsapp = () => {
  return <span className='fixed w-20 h-20 right-4 z-50 cursor-pointer bottom-4 hover:animate-bounce '><Image src={'/Neider1.png'} alt="Neider" width={446} height={440}/></span>;
}

export default Whatsapp;