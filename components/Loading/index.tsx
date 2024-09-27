import React from 'react';

const LoadingComponent = () => {
  return <section className='fixed top-0 left-0 w-screen h-screen bg-black/80 flex justify-center items-center z-50'>
    <p className='w-min text-8xl'>Espere...</p>
  </section>;
}

export default LoadingComponent;