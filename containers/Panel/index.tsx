'use client'

import React, { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode
  change: boolean
  changeLenguage: (leng: 'EN' | 'ES') => void,
  leng: 'EN' | 'ES'
}

export const Panel = ({children, change, changeLenguage, leng}: Props) => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  useEffect(()=> {
    if(change) {
      setShowPanel(false);
    }
    setTimeout(()=> {
      if(!change) {
        setShowPanel(true);
      }
    }, 200)
    
  }, [change])

  return <section className={`bg-white xl:h-[612px] rounded-lg xl:-ml-20 relative z-0 transition-all ease-in-out duration-500 px-6 md:px-12 xl:px-36 mt-4 xl:mt-0 py-10 ${change ? 'w-0' : 'w-[90%] md:w-[80%] xl:w-[70vw]'}`}>
    <section className='absolute right-8 top-4 flex gap-2'>
      <button className={`${leng === 'ES' ? 'font-bold text-custom-accent' : 'text-custom-text'}`} onClick={() => changeLenguage('ES')}>ES</button>|<button className={`${leng === 'EN' ? 'font-bold text-custom-accent' : 'text-custom-text'}`}  onClick={() => changeLenguage('EN')}>EN</button>
      </section>
    {
      showPanel && children
    }
  </section>;
}