"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import MinimizeIconCircle from '../../components/icons/Minimize';
import Chat from '@/components/Chat';
import { useUser } from '@/hooks/useUser';

const Chatbot = () => {
  const [minimize, setMinimize] = useState(false);
  const [register, setRegister] = useState(false);
  const [name, setName] = useState({
    check: false,
    text: ""
  });
  const [email, setEmail] = useState("");
  const { validateUser, createUser, user, loading } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userResult = await validateUser(email);
    if (userResult) {
      setRegister(true);
    } else {
      setName({
        check: true,
        text: ""
      });
    }
  };

  const handelSubmitName = async (e: React.FormEvent) => {
    e.preventDefault();
    const userResult = await createUser(name.text, email);
    if (userResult) {
      setRegister(true);
      setName({
        check: true,
        text: userResult.name || name.text
      });
    }
  };

  return <section className={`fixed right-4 md:right-10 bottom-4 z-30 rounded-3xl py-2 border border-blue-400/30 shadow-2xl bg-custom-secundary transition-all duration-300 ${minimize ? "w-64" : "w-[92vw] sm:w-[420px]"}`}>
    <header className='px-4 py-2 text-white w-full flex justify-between items-center'>
      <div className='font-medium flex items-center gap-2.5 flex-1'>
        <Image className='w-9 h-9 rounded-full border border-white/40' src={'/Neider1.png'} alt="Neider" width={446} height={440} />
        <div>
          <p className='text-xs font-bold leading-tight'>Neider Pandales</p>
          <p className='text-[10px] text-blue-100 flex items-center gap-1'>
            <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse'></span>
            Asistente IA Profesional
          </p>
        </div>
      </div>
      <button onClick={() => setMinimize(prev => !prev)} className='hover:scale-110 transition-transform'>
        <MinimizeIconCircle />
      </button>
    </header>
    <section className={`${minimize ? "invisible opacity-0 h-0 duration-300" : "h-auto"} transition-all duration-300`}>
      {
        register ? <>
          <Chat
            minimize={minimize}
            id={user?.id ?? email}
            userEmail={user?.email || email}
            userName={user?.name || name.text}
          />
        </>
          :
          <>
            <form className={`p-4 w-full text-white text-center flex flex-col gap-3 transition-all duration-300 ${minimize ? "invisible opacity-0 h-0" : "h-auto"}`}>
              {
                name.check ? <>
                  <label htmlFor="" className='text-xs font-semibold'>Escribe tu nombre para comenzar:</label>
                  <input
                    className='rounded-xl p-2 w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
                    type="text"
                    placeholder="Tu nombre..."
                    disabled={minimize}
                    onChange={e => setName(prev => ({ ...prev, text: e.target.value }))}
                    value={name.text} />
                  <button
                    className='rounded-xl py-2 px-4 w-full bg-[#1F3A93] hover:bg-blue-900 font-semibold text-sm text-white shadow-md transition-all'
                    disabled={name.text.length < 2}
                    onClick={e => {
                      e.preventDefault();
                      handelSubmitName(e);
                    }}>
                    {loading ? "Cargando..." : "Ingresar al chat"}
                  </button>
                </>
                  :
                  <>
                    <label htmlFor="" className='text-xs font-semibold'>Ingresa tu correo para guardar la conversación:</label>
                    <input
                      className='rounded-xl p-2 w-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300'
                      type="email"
                      placeholder="ejemplo@correo.com"
                      disabled={minimize}
                      onChange={e => setEmail(e.target.value)}
                      value={email} />
                    <button
                      className='rounded-xl py-2 px-4 w-full bg-[#1F3A93] hover:bg-blue-900 font-semibold text-sm text-white shadow-md transition-all'
                      disabled={email.length < 5}
                      onClick={e => {
                        e.preventDefault();
                        handleSubmit(e);
                      }}>
                      {
                        loading ? "Cargando..." : "Continuar"
                      }
                    </button>
                  </>
              }
            </form>
          </>
      }
    </section>
  </section>;
}

export default Chatbot;
