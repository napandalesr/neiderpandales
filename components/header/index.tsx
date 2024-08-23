"use client"

import { masterData, navbarOptionTypes } from '@/utils/masterData';
import Image from 'next/image';
import React from 'react';

type Props = {
  changeNavBar:  (nav: navbarOptionTypes) => void
  navBar: navbarOptionTypes,
  data: masterData
}

const Header = ({ navBar, changeNavBar, data }: Props) => {
  return <header className={`p-2 rounded bg-white text-custom-text flex h-min max-w-full fixed md:static z-50`}>
   <ul className='nav flex xl:flex-col changeNavar-col md:gap-8 items-center justify-center'>
    {
      data.nav.map(item => <button key={item.alt} onClick={()=>changeNavBar(item.navbar)} className={`flex items-center flex-col w-max font-bold rounded px-2 hover:bg-[#1F3A93]/40 ${navBar === item.navbar && 'bg-custom-primary/60 text-white'}`}>
        <Image className='w-16 h-16 p-1' src={item.icon} alt={item.alt} width={256} height={256}/>
        <h3>{item.title}</h3>
      </button>)
    }
   </ul>
  </header>;
}

export default Header;