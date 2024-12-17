import React from 'react';

import './styles.css';

const LoadingComponent = () => {
  return <section className='fixed top-0 left-0 w-screen h-screen bg-black/80 flex flex-col justify-center items-center z-40 text-white'>
    <p className='w-min text-xl'>Espere...</p>
    <svg className='w-28 h-28' viewBox="0 0 240 240">
      <circle className="pl1123__ring pl1123__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 660" strokeDashoffset="-330" strokeLinecap="round"/>
      <circle className="pl1123__ring pl1123__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 220" strokeDashoffset="-110" strokeLinecap="round"/>
      <circle className="pl1123__ring pl1123__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeDashoffset="round"/>
      <circle className="pl1123__ring pl1123__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" strokeDasharray="0 440" strokeDashoffset="round"/>
    </svg>
  </section>;
}

export default LoadingComponent;