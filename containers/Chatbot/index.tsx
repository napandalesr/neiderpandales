"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import MinimizeIconCircle from '../../components/icons/Minimize';
import Chat from '@/components/Chat';

const Chatbot = () => {
  const [minimize, setMinimize] = useState(false);
  const [register, setRegister] = useState(true);
  const [name, setName] = useState({
    check: false,
    text: ""
  });
  const [email, setEmail] = useState("");


  return <section className='fixed right-12 bottom-4 z-30 w-72 rounded-3xl py-2 border bg-custom-secundary'>
    <header className='px-4 py-2 text-white w-full flex justify-between items-center'>
      <p className='font-medium flex items-center gap-2 w-48'>
        <Image className='w-10' src={'/Neider1.png'} alt="Neider" width={446} height={440}/>
        Hola, soy Neider, un chatbot con IA</p>
      <button onClick={() => setMinimize(prev => !prev)}>
        <MinimizeIconCircle/>
        </button>
    </header>
    <section className={`${minimize && "hidden"} transition-all`}>
      {
        register ? <>
          <Chat minimize={minimize}/>
        </>
        :
        <>
          <form className={`p-4 w-full text-white text-center flex flex-col gap-2 ´${minimize && "hidden"}`}>
            {
              name.check ? <>
                <label htmlFor="">Escribe tu nombre</label>
                <input 
                  className='rounded-2xl p-1 w-full text-gray-700' 
                  type="text" 
                  onChange={e => setName(prev => ({ ...prev, text: e.target.value}))} 
                  value={name.text}/>
              </>
              :
              <>
                <label htmlFor="">Escribe tu correo</label>
                <input 
                  className='rounded-2xl p-1 w-full text-gray-700' 
                  type="email" 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} />
              </>
            }
          </form>
        </>
      }
    </section>
  </section>;
}

export default Chatbot;