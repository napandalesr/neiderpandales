import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import 'animate.css';

const Whatsapp = () => {
  return <Link href='https://dm.wa.link/0a0dgs' target='_blank' className='fixed w-20 h-20 right-4 z-40 cursor-pointer bottom-4'><Image src={'/Neider1.png'} alt="Neider" width={446} height={440}/></Link>;
}

export default Whatsapp;