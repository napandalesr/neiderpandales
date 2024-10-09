import React from 'react';

type props = {
  src: string;
  changeShowModal: (src: string) => void
};

const Modal = ({ src, changeShowModal }: props) => {
  return <section className='fixed top-0 left-0 w-screen h-screen z-50 bg-black/80'>
    <button className='absolute right-8 top-8 text-white font-bold text-3xl z-20' onClick={() => changeShowModal('')}>X</button>
    <video className='w-full h-full z-10' autoPlay loop src={src}></video>
  </section>;
}

export default Modal;